import CONFIG from "@/config";
import { authExchange } from "@urql/exchange-auth";
import { cacheExchange } from "@urql/exchange-graphcache";
import { simplePagination } from "@urql/exchange-graphcache/extras";
import toast from "react-hot-toast";
import {
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
} from "urql";
import { getAuthCode } from "./auth";
import type { GraphCacheConfig } from "./gql.gen";

export function newClient() {
  return createClient({
    url: `${CONFIG.API_URI}/graphql`,
    exchanges: [
      dedupExchange,
      cacheExchange<GraphCacheConfig>({
        resolvers: {
          Query: {
            user(parent, { id }) {
              return {
                id,
                __typename: "User",
              };
            },
            book(parent, { id }) {
              return {
                id,
                __typename: "Book",
              };
            },
            userBook(parent, { id }) {
              return {
                id,
                __typename: "UserBook",
              };
            },
            search: simplePagination({
              mergeMode: "after",
              limitArgument: "limit",
              offsetArgument: "skip",
            }),
            thoughts: simplePagination({
              mergeMode: "before",
              limitArgument: "limit",
              offsetArgument: "before",
            }),
          },
          User: {
            createdAt({ createdAt }) {
              return new Date(createdAt);
            },
          },
          InventoryClaim: {
            claimedAt({ claimedAt }) {
              return new Date(claimedAt);
            },
          },
          Exchange: {
            exchangedAt({ exchangedAt }) {
              return new Date(exchangedAt);
            },
          },
          Thought: {
            createdAt({ createdAt }) {
              return new Date(createdAt);
            },
          },
          Event: {
            startedAt({ startedAt }) {
              return new Date(startedAt);
            },
            endedAt({ endedAt }) {
              return new Date(endedAt);
            },
          },
        },
        updates: {
          Mutation: {
            userBookAdd(parent, args, cache) {
              cache.invalidate("Query", "userBooks", {
                userId: parent.userBookAdd.userId as string,
              });
              cache.invalidate("Query", "userBooks", {
                mine: true,
              });
            },
            userBookDelete(parent, args, cache) {
              cache.invalidate({ __typename: "UserBook", id: args.id });
            },
            inventoryClaimDo(parent, args, cache) {
              cache.invalidate("Query", "me");
              if (parent.inventoryClaimDo.inventory) {
                cache.invalidate("Query", "inventories", {
                  bookId: parent.inventoryClaimDo.inventory.userBook.bookId,
                });
                cache.invalidate("Query", "inventories", {
                  locationId: parent.inventoryClaimDo.inventory.locationId,
                });
              }
            },
            thoughtCreate(parent, args, cache) {
              cache.invalidate("Query", "thoughts");
            },
          },
        },
      }),
      authExchange<{ token: string } | null>({
        async getAuth({ authState }) {
          if (!authState) {
            const token = getAuthCode();
            if (!token) return null;
            return { token };
          }
          return null;
        },
        addAuthToOperation({ authState, operation }) {
          if (!authState?.token) {
            return operation;
          }

          const fetchOptions =
            typeof operation.context.fetchOptions === "function"
              ? operation.context.fetchOptions()
              : operation.context.fetchOptions || {};

          return {
            ...operation,
            context: {
              ...operation.context,
              fetchOptions: {
                ...fetchOptions,
                headers: {
                  ...fetchOptions.headers,
                  Authorization: authState.token,
                },
              },
            },
          };
        },
      }),
      errorExchange({
        onError(error) {
          if (error.networkError) {
            toast.error(error.networkError.message);
          } else {
            for (const err of error.graphQLErrors) {
              toast.error(err.message);
            }
          }
        },
      }),
      fetchExchange,
    ],
  });
}
