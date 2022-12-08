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
            bookSearch: simplePagination({
              mergeMode: "after",
              limitArgument: "limit",
              offsetArgument: "skip",
            }),
            posts: simplePagination({
              mergeMode: "before",
              limitArgument: "limit",
              offsetArgument: "before",
            }),
          },
          User: {
            creationTime({ creationTime }) {
              return new Date(creationTime);
            },
          },
          Post: {
            creationTime({ creationTime }) {
              return new Date(creationTime);
            },
          },
          Event: {
            startTime({ startTime }) {
              return new Date(startTime);
            },
            endTime({ endTime }) {
              return new Date(endTime);
            },
          },
          TradeIn: {
            creationTime({ creationTime }) {
              return new Date(creationTime);
            },
          },
          Invoice: {
            creationTime({ creationTime }) {
              return new Date(creationTime);
            },
          },
        },
        updates: {
          Mutation: {
            userBookAdd(parent, args, cache) {
              cache.invalidate("Query", "userBooks", {
                userId: parent.userBookAdd.userId!,
              });
              cache.invalidate("Query", "userBooks", {
                mine: true,
              });
            },
            userBookDelete(parent, args, cache) {
              cache.invalidate({ __typename: "UserBook", id: args.id });
            },
            postCreate(parent, args, cache) {
              cache.invalidate("Query", "posts");
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
