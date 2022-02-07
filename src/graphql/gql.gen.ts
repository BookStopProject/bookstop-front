import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Book = {
  __typename?: 'Book';
  authors: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  publishedYear: Scalars['Int'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Browse = {
  __typename?: 'Browse';
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  startedAt?: Maybe<Scalars['Time']>;
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String'];
  endedAt: Scalars['Time'];
  href: Scalars['String'];
  id: Scalars['ID'];
  startedAt: Scalars['Time'];
  title: Scalars['String'];
  user: User;
  userId: Scalars['ID'];
};

export type Exchange = {
  __typename?: 'Exchange';
  exchangedAt: Scalars['Time'];
  id: Scalars['ID'];
  userBookIdNew: Scalars['ID'];
  userBookIdOld: Scalars['ID'];
  userBookNew: UserBook;
  userBookOld: UserBook;
};

export type HomeStats = {
  __typename?: 'HomeStats';
  exchangeCount: Scalars['Int'];
  postCount: Scalars['Int'];
  userCount: Scalars['Int'];
};

export type Inventory = {
  __typename?: 'Inventory';
  id: Scalars['ID'];
  location: Location;
  locationId: Scalars['ID'];
  removed: Scalars['Boolean'];
  userBook: UserBook;
  userBookId: Scalars['ID'];
};

export type InventoryClaim = {
  __typename?: 'InventoryClaim';
  claimedAt: Scalars['Time'];
  id: Scalars['ID'];
  inventory: Inventory;
  inventoryId: Scalars['ID'];
};

export type Location = {
  __typename?: 'Location';
  addressLine: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  foo?: Maybe<Scalars['Int']>;
  inventoryClaimDo: InventoryClaim;
  meUpdate?: Maybe<User>;
  thoughtCreate: Thought;
  thoughtDelete: Scalars['Boolean'];
  userBookAdd: UserBook;
  userBookDelete: Scalars['Boolean'];
  userBookEdit: UserBook;
};


export type MutationInventoryClaimDoArgs = {
  id: Scalars['ID'];
};


export type MutationMeUpdateArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationThoughtCreateArgs = {
  bookId?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
};


export type MutationThoughtDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserBookAddArgs = {
  bookId: Scalars['ID'];
  endedAt?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
};


export type MutationUserBookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserBookEditArgs = {
  endedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  startedAt?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: Array<Maybe<Book>>;
  browse?: Maybe<Browse>;
  browseBooks: Array<Book>;
  browses: Array<Browse>;
  events: Array<Event>;
  exchanges: Array<Exchange>;
  foo?: Maybe<Scalars['Int']>;
  homeStats?: Maybe<HomeStats>;
  inventories: Array<Inventory>;
  inventoryClaimToken: Scalars['String'];
  inventoryClaimsMine: Array<InventoryClaim>;
  locations: Array<Location>;
  me?: Maybe<User>;
  search: Array<Book>;
  thoughts: Array<Thought>;
  user?: Maybe<User>;
  userBook?: Maybe<UserBook>;
  userBooks: Array<UserBook>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBooksArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryBrowseArgs = {
  id: Scalars['ID'];
};


export type QueryBrowseBooksArgs = {
  id: Scalars['ID'];
};


export type QueryExchangesArgs = {
  userBookId: Scalars['ID'];
};


export type QueryInventoriesArgs = {
  bookId?: Maybe<Scalars['ID']>;
  locationId?: Maybe<Scalars['ID']>;
};


export type QueryInventoryClaimTokenArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  limit: Scalars['Int'];
  query: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryThoughtsArgs = {
  before?: Maybe<Scalars['Int']>;
  limit: Scalars['Int'];
  userId?: Maybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserBookArgs = {
  id: Scalars['ID'];
};


export type QueryUserBooksArgs = {
  mine?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Thought = {
  __typename?: 'Thought';
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  text: Scalars['String'];
  user: User;
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time'];
  credit?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  profileImageUrl?: Maybe<Scalars['String']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  book: Book;
  bookId: Scalars['ID'];
  endedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  originalUserBookId?: Maybe<Scalars['ID']>;
  startedAt?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['ID'];
};

export type BookPartsFragment = { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined };

export type BrowsePartsFragment = { __typename?: 'Browse', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined };

export type BooksQueryVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type BooksQuery = { books: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined> };

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = { book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined };

export type BrowsesQueryVariables = Exact<{ [key: string]: never; }>;


export type BrowsesQuery = { browses: Array<{ __typename?: 'Browse', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined }> };

export type BrowseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BrowseQuery = { browse?: { __typename?: 'Browse', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined } | null | undefined };

export type BrowseBooksQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BrowseBooksQuery = { browseBooks: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }> };

export type SearchQueryVariables = Exact<{
  query: Scalars['String'];
  limit: Scalars['Int'];
  skip?: Maybe<Scalars['Int']>;
}>;


export type SearchQuery = { search: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }> };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { events: Array<{ __typename?: 'Event', id: string, title: string, description: string, href: string, userId: string, startedAt: any, endedAt: any, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }> };

export type ExchangesQueryVariables = Exact<{
  userBookId: Scalars['ID'];
}>;


export type ExchangesQuery = { exchanges: Array<{ __typename?: 'Exchange', id: string, userBookIdOld: string, userBookIdNew: string, exchangedAt: any, userBookOld: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }, userBookNew: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } } }> };

export type HomeStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeStatsQuery = { homeStats?: { __typename?: 'HomeStats', userCount: number, exchangeCount: number, postCount: number } | null | undefined };

export type InventoryPartsFragment = { __typename?: 'Inventory', id: string, userBookId: string, locationId: string, removed: boolean, userBook: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }, location: { __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string } };

export type InventoryClaimPartsFragment = { __typename?: 'InventoryClaim', id: string, inventoryId: string, claimedAt: any, inventory: { __typename?: 'Inventory', id: string, userBookId: string, locationId: string, removed: boolean, userBook: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }, location: { __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string } } };

export type InventoriesQueryVariables = Exact<{
  bookId?: Maybe<Scalars['ID']>;
  locationId?: Maybe<Scalars['ID']>;
}>;


export type InventoriesQuery = { inventories: Array<{ __typename?: 'Inventory', id: string, userBookId: string, locationId: string, removed: boolean, userBook: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }, location: { __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string } }> };

export type InventoryClaimsMineQueryVariables = Exact<{ [key: string]: never; }>;


export type InventoryClaimsMineQuery = { inventoryClaimsMine: Array<{ __typename?: 'InventoryClaim', id: string, inventoryId: string, claimedAt: any, inventory: { __typename?: 'Inventory', id: string, userBookId: string, locationId: string, removed: boolean, userBook: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }, location: { __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string } } }> };

export type InventoryClaimTokenQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InventoryClaimTokenQuery = { inventoryClaimToken: string };

export type InventoryClaimDoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type InventoryClaimDoMutation = { inventoryClaimDo: { __typename?: 'InventoryClaim', id: string, inventoryId: string, claimedAt: any, inventory: { __typename?: 'Inventory', id: string, userBookId: string, locationId: string, removed: boolean, userBook: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }, location: { __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string } } } };

export type LocationPartsFragment = { __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { locations: Array<{ __typename?: 'Location', id: string, name: string, parentName?: string | null | undefined, addressLine: string }> };

export type ThoughtPartsFragment = { __typename?: 'Thought', id: string, text: string, createdAt: any, userId: string, bookId?: string | null | undefined, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any }, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined };

export type ThoughtsQueryVariables = Exact<{
  userId?: Maybe<Scalars['ID']>;
  limit: Scalars['Int'];
  before?: Maybe<Scalars['Int']>;
}>;


export type ThoughtsQuery = { thoughts: Array<{ __typename?: 'Thought', id: string, text: string, createdAt: any, userId: string, bookId?: string | null | undefined, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any }, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined }> };

export type ThoughtCreateMutationVariables = Exact<{
  text: Scalars['String'];
  bookId?: Maybe<Scalars['ID']>;
}>;


export type ThoughtCreateMutation = { thoughtCreate: { __typename?: 'Thought', id: string, text: string, createdAt: any, userId: string, bookId?: string | null | undefined, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any }, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined } | null | undefined } };

export type ThoughtDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ThoughtDeleteMutation = { thoughtDelete: boolean };

export type UserPartsFragment = { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { __typename?: 'User', credit?: number | null | undefined, id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } | null | undefined };

export type MeUpdateMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;


export type MeUpdateMutation = { meUpdate?: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } | null | undefined };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { user?: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } | null | undefined };

export type UserBookPartsFragment = { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } };

export type UserBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBookQuery = { userBook?: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } } | null | undefined };

export type UserBooksQueryVariables = Exact<{
  userId?: Maybe<Scalars['ID']>;
  mine?: Maybe<Scalars['Boolean']>;
}>;


export type UserBooksQuery = { userBooks: Array<{ __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } }> };

export type UserBookAddMutationVariables = Exact<{
  bookId: Scalars['ID'];
  startedAt?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
}>;


export type UserBookAddMutation = { userBookAdd: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } } };

export type UserBookEditMutationVariables = Exact<{
  id: Scalars['ID'];
  startedAt?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['String']>;
}>;


export type UserBookEditMutation = { userBookEdit: { __typename?: 'UserBook', id: string, bookId: string, userId: string, startedAt?: string | null | undefined, endedAt?: string | null | undefined, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null | undefined, authors: Array<string>, description: string, publishedYear: number, imageUrl?: string | null | undefined, isbn?: string | null | undefined }, user: { __typename?: 'User', id: string, name: string, description?: string | null | undefined, profileImageUrl?: string | null | undefined, createdAt: any } } };

export type UserBookDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBookDeleteMutation = { userBookDelete: boolean };

export const BrowsePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode;
export const BookPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;
export const UserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;
export const UserBookPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;
export const LocationPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}}]} as unknown as DocumentNode;
export const InventoryPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Inventory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userBookId"}},{"kind":"Field","name":{"kind":"Name","value":"userBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;
export const InventoryClaimPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryClaimParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InventoryClaim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryId"}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Inventory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userBookId"}},{"kind":"Field","name":{"kind":"Name","value":"userBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;
export const ThoughtPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThoughtParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thought"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;
export const BooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"books"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useBooksQuery(options: Omit<Urql.UseQueryArgs<BooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BooksQuery>({ query: BooksDocument, ...options });
};
export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useBookQuery(options: Omit<Urql.UseQueryArgs<BookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BookQuery>({ query: BookDocument, ...options });
};
export const BrowsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrowseParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode;

export function useBrowsesQuery(options: Omit<Urql.UseQueryArgs<BrowsesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BrowsesQuery>({ query: BrowsesDocument, ...options });
};
export const BrowseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrowseParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode;

export function useBrowseQuery(options: Omit<Urql.UseQueryArgs<BrowseQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BrowseQuery>({ query: BrowseDocument, ...options });
};
export const BrowseBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browseBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browseBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useBrowseBooksQuery(options: Omit<Urql.UseQueryArgs<BrowseBooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BrowseBooksQuery>({ query: BrowseBooksDocument, ...options });
};
export const SearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}}]} as unknown as DocumentNode;

export function useSearchQuery(options: Omit<Urql.UseQueryArgs<SearchQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchQuery>({ query: SearchDocument, ...options });
};
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useEventsQuery(options: Omit<Urql.UseQueryArgs<EventsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EventsQuery>({ query: EventsDocument, ...options });
};
export const ExchangesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"exchanges"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userBookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exchanges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userBookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userBookId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userBookIdOld"}},{"kind":"Field","name":{"kind":"Name","value":"userBookOld"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userBookIdNew"}},{"kind":"Field","name":{"kind":"Name","value":"userBookNew"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exchangedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useExchangesQuery(options: Omit<Urql.UseQueryArgs<ExchangesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ExchangesQuery>({ query: ExchangesDocument, ...options });
};
export const HomeStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCount"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeCount"}},{"kind":"Field","name":{"kind":"Name","value":"postCount"}}]}}]}}]} as unknown as DocumentNode;

export function useHomeStatsQuery(options: Omit<Urql.UseQueryArgs<HomeStatsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HomeStatsQuery>({ query: HomeStatsDocument, ...options });
};
export const InventoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"inventories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inventories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Inventory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userBookId"}},{"kind":"Field","name":{"kind":"Name","value":"userBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useInventoriesQuery(options: Omit<Urql.UseQueryArgs<InventoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<InventoriesQuery>({ query: InventoriesDocument, ...options });
};
export const InventoryClaimsMineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"inventoryClaimsMine"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inventoryClaimsMine"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryClaimParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Inventory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userBookId"}},{"kind":"Field","name":{"kind":"Name","value":"userBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryClaimParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InventoryClaim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryId"}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useInventoryClaimsMineQuery(options: Omit<Urql.UseQueryArgs<InventoryClaimsMineQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<InventoryClaimsMineQuery>({ query: InventoryClaimsMineDocument, ...options });
};
export const InventoryClaimTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"inventoryClaimToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inventoryClaimToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;

export function useInventoryClaimTokenQuery(options: Omit<Urql.UseQueryArgs<InventoryClaimTokenQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<InventoryClaimTokenQuery>({ query: InventoryClaimTokenDocument, ...options });
};
export const InventoryClaimDoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"inventoryClaimDo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inventoryClaimDo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryClaimParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Inventory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userBookId"}},{"kind":"Field","name":{"kind":"Name","value":"userBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"removed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InventoryClaimParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InventoryClaim"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryId"}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InventoryParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useInventoryClaimDoMutation() {
  return Urql.useMutation<InventoryClaimDoMutation, InventoryClaimDoMutationVariables>(InventoryClaimDoDocument);
};
export const LocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine"}}]}}]} as unknown as DocumentNode;

export function useLocationsQuery(options: Omit<Urql.UseQueryArgs<LocationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LocationsQuery>({ query: LocationsDocument, ...options });
};
export const ThoughtsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"thoughts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thoughts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThoughtParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThoughtParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thought"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useThoughtsQuery(options: Omit<Urql.UseQueryArgs<ThoughtsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ThoughtsQuery>({ query: ThoughtsDocument, ...options });
};
export const ThoughtCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"thoughtCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thoughtCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThoughtParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThoughtParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thought"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useThoughtCreateMutation() {
  return Urql.useMutation<ThoughtCreateMutation, ThoughtCreateMutationVariables>(ThoughtCreateDocument);
};
export const ThoughtDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"thoughtDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thoughtDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;

export function useThoughtDeleteMutation() {
  return Urql.useMutation<ThoughtDeleteMutation, ThoughtDeleteMutationVariables>(ThoughtDeleteDocument);
};
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}},{"kind":"Field","name":{"kind":"Name","value":"credit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const MeUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"meUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useMeUpdateMutation() {
  return Urql.useMutation<MeUpdateMutation, MeUpdateMutationVariables>(MeUpdateDocument);
};
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const UserBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBookQuery(options: Omit<Urql.UseQueryArgs<UserBookQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserBookQuery>({ query: UserBookDocument, ...options });
};
export const UserBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mine"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"mine"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mine"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBooksQuery(options: Omit<Urql.UseQueryArgs<UserBooksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserBooksQuery>({ query: UserBooksDocument, ...options });
};
export const UserBookAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"endedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBookAddMutation() {
  return Urql.useMutation<UserBookAddMutation, UserBookAddMutationVariables>(UserBookAddDocument);
};
export const UserBookEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookEdit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"startedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startedAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"endedAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endedAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"endedAt"}}]}}]} as unknown as DocumentNode;

export function useUserBookEditMutation() {
  return Urql.useMutation<UserBookEditMutation, UserBookEditMutationVariables>(UserBookEditDocument);
};
export const UserBookDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;

export function useUserBookDeleteMutation() {
  return Urql.useMutation<UserBookDeleteMutation, UserBookDeleteMutationVariables>(UserBookDeleteDocument);
};
export type WithTypename<T extends { __typename?: any }> = { [K in Exclude<keyof T, '__typename'>]?: T[K] } & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Book?: (data: WithTypename<Book>) => null | string,
  Browse?: (data: WithTypename<Browse>) => null | string,
  Event?: (data: WithTypename<Event>) => null | string,
  Exchange?: (data: WithTypename<Exchange>) => null | string,
  HomeStats?: (data: WithTypename<HomeStats>) => null | string,
  Inventory?: (data: WithTypename<Inventory>) => null | string,
  InventoryClaim?: (data: WithTypename<InventoryClaim>) => null | string,
  Location?: (data: WithTypename<Location>) => null | string,
  Thought?: (data: WithTypename<Thought>) => null | string,
  User?: (data: WithTypename<User>) => null | string,
  UserBook?: (data: WithTypename<UserBook>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    foo?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['Int'] | string>,
    book?: GraphCacheResolver<WithTypename<Query>, QueryBookArgs, WithTypename<Book> | string>,
    books?: GraphCacheResolver<WithTypename<Query>, QueryBooksArgs, Array<WithTypename<Book> | string>>,
    browses?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Browse> | string>>,
    browse?: GraphCacheResolver<WithTypename<Query>, QueryBrowseArgs, WithTypename<Browse> | string>,
    browseBooks?: GraphCacheResolver<WithTypename<Query>, QueryBrowseBooksArgs, Array<WithTypename<Book> | string>>,
    search?: GraphCacheResolver<WithTypename<Query>, QuerySearchArgs, Array<WithTypename<Book> | string>>,
    events?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Event> | string>>,
    exchanges?: GraphCacheResolver<WithTypename<Query>, QueryExchangesArgs, Array<WithTypename<Exchange> | string>>,
    homeStats?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<HomeStats> | string>,
    inventories?: GraphCacheResolver<WithTypename<Query>, QueryInventoriesArgs, Array<WithTypename<Inventory> | string>>,
    inventoryClaimsMine?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<InventoryClaim> | string>>,
    inventoryClaimToken?: GraphCacheResolver<WithTypename<Query>, QueryInventoryClaimTokenArgs, Scalars['String'] | string>,
    locations?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Location> | string>>,
    thoughts?: GraphCacheResolver<WithTypename<Query>, QueryThoughtsArgs, Array<WithTypename<Thought> | string>>,
    me?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<User> | string>,
    user?: GraphCacheResolver<WithTypename<Query>, QueryUserArgs, WithTypename<User> | string>,
    userBook?: GraphCacheResolver<WithTypename<Query>, QueryUserBookArgs, WithTypename<UserBook> | string>,
    userBooks?: GraphCacheResolver<WithTypename<Query>, QueryUserBooksArgs, Array<WithTypename<UserBook> | string>>
  },
  Book?: {
    id?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    subtitle?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    authors?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Array<Scalars['String'] | string>>,
    description?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    publishedYear?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['Int'] | string>,
    imageUrl?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    isbn?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>
  },
  Browse?: {
    id?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>,
    imageUrl?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>,
    startedAt?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['Time'] | string>,
    endedAt?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['Time'] | string>
  },
  Event?: {
    id?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['String'] | string>,
    href?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['String'] | string>,
    userId?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['ID'] | string>,
    user?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, WithTypename<User> | string>,
    startedAt?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['Time'] | string>,
    endedAt?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['Time'] | string>
  },
  Exchange?: {
    id?: GraphCacheResolver<WithTypename<Exchange>, Record<string, never>, Scalars['ID'] | string>,
    userBookIdOld?: GraphCacheResolver<WithTypename<Exchange>, Record<string, never>, Scalars['ID'] | string>,
    userBookOld?: GraphCacheResolver<WithTypename<Exchange>, Record<string, never>, WithTypename<UserBook> | string>,
    userBookIdNew?: GraphCacheResolver<WithTypename<Exchange>, Record<string, never>, Scalars['ID'] | string>,
    userBookNew?: GraphCacheResolver<WithTypename<Exchange>, Record<string, never>, WithTypename<UserBook> | string>,
    exchangedAt?: GraphCacheResolver<WithTypename<Exchange>, Record<string, never>, Scalars['Time'] | string>
  },
  HomeStats?: {
    userCount?: GraphCacheResolver<WithTypename<HomeStats>, Record<string, never>, Scalars['Int'] | string>,
    exchangeCount?: GraphCacheResolver<WithTypename<HomeStats>, Record<string, never>, Scalars['Int'] | string>,
    postCount?: GraphCacheResolver<WithTypename<HomeStats>, Record<string, never>, Scalars['Int'] | string>
  },
  Inventory?: {
    id?: GraphCacheResolver<WithTypename<Inventory>, Record<string, never>, Scalars['ID'] | string>,
    userBookId?: GraphCacheResolver<WithTypename<Inventory>, Record<string, never>, Scalars['ID'] | string>,
    userBook?: GraphCacheResolver<WithTypename<Inventory>, Record<string, never>, WithTypename<UserBook> | string>,
    locationId?: GraphCacheResolver<WithTypename<Inventory>, Record<string, never>, Scalars['ID'] | string>,
    location?: GraphCacheResolver<WithTypename<Inventory>, Record<string, never>, WithTypename<Location> | string>,
    removed?: GraphCacheResolver<WithTypename<Inventory>, Record<string, never>, Scalars['Boolean'] | string>
  },
  InventoryClaim?: {
    id?: GraphCacheResolver<WithTypename<InventoryClaim>, Record<string, never>, Scalars['ID'] | string>,
    inventoryId?: GraphCacheResolver<WithTypename<InventoryClaim>, Record<string, never>, Scalars['ID'] | string>,
    inventory?: GraphCacheResolver<WithTypename<InventoryClaim>, Record<string, never>, WithTypename<Inventory> | string>,
    claimedAt?: GraphCacheResolver<WithTypename<InventoryClaim>, Record<string, never>, Scalars['Time'] | string>
  },
  Location?: {
    id?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>,
    parentName?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>,
    addressLine?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>
  },
  Thought?: {
    id?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, Scalars['ID'] | string>,
    text?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, Scalars['String'] | string>,
    createdAt?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, Scalars['Time'] | string>,
    userId?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, Scalars['ID'] | string>,
    user?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, WithTypename<User> | string>,
    bookId?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, Scalars['ID'] | string>,
    book?: GraphCacheResolver<WithTypename<Thought>, Record<string, never>, WithTypename<Book> | string>
  },
  User?: {
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    profileImageUrl?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    createdAt?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Time'] | string>,
    credit?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Int'] | string>
  },
  UserBook?: {
    id?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    bookId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    book?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, WithTypename<Book> | string>,
    userId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    user?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, WithTypename<User> | string>,
    startedAt?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['String'] | string>,
    endedAt?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['String'] | string>,
    originalUserBookId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  foo?: GraphCacheOptimisticMutationResolver<Record<string, never>, Maybe<Scalars['Int']>>,
  inventoryClaimDo?: GraphCacheOptimisticMutationResolver<MutationInventoryClaimDoArgs, WithTypename<InventoryClaim>>,
  thoughtCreate?: GraphCacheOptimisticMutationResolver<MutationThoughtCreateArgs, WithTypename<Thought>>,
  thoughtDelete?: GraphCacheOptimisticMutationResolver<MutationThoughtDeleteArgs, Scalars['Boolean']>,
  meUpdate?: GraphCacheOptimisticMutationResolver<MutationMeUpdateArgs, Maybe<WithTypename<User>>>,
  userBookAdd?: GraphCacheOptimisticMutationResolver<MutationUserBookAddArgs, WithTypename<UserBook>>,
  userBookEdit?: GraphCacheOptimisticMutationResolver<MutationUserBookEditArgs, WithTypename<UserBook>>,
  userBookDelete?: GraphCacheOptimisticMutationResolver<MutationUserBookDeleteArgs, Scalars['Boolean']>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    foo?: GraphCacheUpdateResolver<{ foo: Maybe<Scalars['Int']> }, Record<string, never>>,
    inventoryClaimDo?: GraphCacheUpdateResolver<{ inventoryClaimDo: WithTypename<InventoryClaim> }, MutationInventoryClaimDoArgs>,
    thoughtCreate?: GraphCacheUpdateResolver<{ thoughtCreate: WithTypename<Thought> }, MutationThoughtCreateArgs>,
    thoughtDelete?: GraphCacheUpdateResolver<{ thoughtDelete: Scalars['Boolean'] }, MutationThoughtDeleteArgs>,
    meUpdate?: GraphCacheUpdateResolver<{ meUpdate: Maybe<WithTypename<User>> }, MutationMeUpdateArgs>,
    userBookAdd?: GraphCacheUpdateResolver<{ userBookAdd: WithTypename<UserBook> }, MutationUserBookAddArgs>,
    userBookEdit?: GraphCacheUpdateResolver<{ userBookEdit: WithTypename<UserBook> }, MutationUserBookEditArgs>,
    userBookDelete?: GraphCacheUpdateResolver<{ userBookDelete: Scalars['Boolean'] }, MutationUserBookDeleteArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};