import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Genre>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  publishedYear: Scalars['Int'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export enum BookCondition {
  Acceptable = 'acceptable',
  Good = 'good',
  LikeNew = 'like_new',
  New = 'new'
}

export type BookCopy = {
  __typename?: 'BookCopy';
  book: Book;
  condition: Scalars['String'];
  id: Scalars['ID'];
  location?: Maybe<Location>;
  owners: Array<User>;
};

export type Browse = {
  __typename?: 'Browse';
  books: Array<Book>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String'];
  endTime: Scalars['Time'];
  id: Scalars['ID'];
  location?: Maybe<Location>;
  name: Scalars['String'];
  startTime: Scalars['Time'];
};

export type Genre = {
  __typename?: 'Genre';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  creationTime: Scalars['Time'];
  id: Scalars['ID'];
  location: Location;
  locationId: Scalars['Int'];
};

export type InvoiceEntry = {
  __typename?: 'InvoiceEntry';
  Credit: Scalars['Int'];
  bookCopy: BookCopy;
  bookCopyId: Scalars['ID'];
  invoiceId: Scalars['ID'];
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  exchange: Invoice;
  meUpdate: User;
  postCreate: Post;
  postDelete: Scalars['Boolean'];
  postUpdate: Post;
  test: Test;
  userBookAdd: UserBook;
  userBookDelete: Scalars['Boolean'];
  userBookEdit: UserBook;
};


export type MutationExchangeArgs = {
  bookCopyId: Array<Scalars['ID']>;
};


export type MutationMeUpdateArgs = {
  bio?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationPostCreateArgs = {
  bookId: Scalars['ID'];
  isRecommending: Scalars['Boolean'];
  text: Scalars['String'];
};


export type MutationPostDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPostUpdateArgs = {
  id: Scalars['ID'];
  isRecommending: Scalars['Boolean'];
  text: Scalars['String'];
};


export type MutationUserBookAddArgs = {
  bookId: Scalars['ID'];
  endDate?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
};


export type MutationUserBookDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserBookEditArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  startDate?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  book: Book;
  creationTime: Scalars['Time'];
  id: Scalars['ID'];
  isRecommending: Scalars['Boolean'];
  text: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  book?: Maybe<Book>;
  bookCopiesAvailable: Array<BookCopy>;
  bookSearch: Array<Book>;
  browses: Array<Browse>;
  event?: Maybe<Event>;
  events: Array<Event>;
  genre?: Maybe<Genre>;
  genres: Array<Genre>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  me?: Maybe<User>;
  meInvoices: Array<Invoice>;
  meTradeIns: Array<TradeIn>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  test: Test;
  user: User;
  userBook?: Maybe<UserBook>;
  userBooks: Array<UserBook>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBookCopiesAvailableArgs = {
  bookId: Scalars['ID'];
};


export type QueryBookSearchArgs = {
  limit: Scalars['Int'];
  query: Scalars['String'];
  skip: Scalars['Int'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryGenreArgs = {
  id: Scalars['ID'];
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  before?: InputMaybe<Scalars['Int']>;
  bookId?: InputMaybe<Scalars['ID']>;
  limit: Scalars['Int'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserBookArgs = {
  id: Scalars['ID'];
};


export type QueryUserBooksArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type TradeIn = {
  __typename?: 'TradeIn';
  book: Book;
  bookCopyId: Scalars['ID'];
  creationTime: Scalars['Time'];
  credit: Scalars['Int'];
  id: Scalars['ID'];
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']>;
  creationTime?: Maybe<Scalars['Time']>;
  credit?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
};

export type UserBook = {
  __typename?: 'UserBook';
  book?: Maybe<Book>;
  bookCopyId?: Maybe<Scalars['Int']>;
  bookId: Scalars['Int'];
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  owners: Array<User>;
  startDate?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type BookPartsFragment = { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null };

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = { book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } | null };

export type BookSearchQueryVariables = Exact<{
  query: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type BookSearchQuery = { bookSearch: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }> };

export type AuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AuthorQuery = { author?: { __typename?: 'Author', id: string, name: string } | null };

export type GenreQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GenreQuery = { genre?: { __typename?: 'Genre', id: string, name: string } | null };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type BrowsePartsFragment = { __typename?: 'Browse', id: string, name: string, description?: string | null, books: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }> };

export type BrowsesQueryVariables = Exact<{ [key: string]: never; }>;


export type BrowsesQuery = { browses: Array<{ __typename?: 'Browse', id: string, name: string, description?: string | null, books: Array<{ __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }> }> };

export type BookCopyPartsFragment = { __typename?: 'BookCopy', id: string, condition: string, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, location?: { __typename?: 'Location', id: string, name: string, address: string } | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { events: Array<{ __typename?: 'Event', id: string, name: string, description: string, startTime: any, endTime: any }> };

export type EventQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EventQuery = { event?: { __typename?: 'Event', id: string, name: string, description: string, startTime: any, endTime: any } | null };

export type InvoicePartsFragment = { __typename?: 'Invoice', id: string, creationTime: any, location: { __typename?: 'Location', id: string, name: string } };

export type InvoiceEntryPartsFragment = { __typename?: 'InvoiceEntry', invoiceId: string, bookCopyId: string, bookCopy: { __typename?: 'BookCopy', id: string, condition: string, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, location?: { __typename?: 'Location', id: string, name: string, address: string } | null } };

export type TradeInPartsFragment = { __typename?: 'TradeIn', id: string, userId: string, bookCopyId: string, credit: number, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } };

export type BookCopiesAvailableQueryVariables = Exact<{
  bookId: Scalars['ID'];
}>;


export type BookCopiesAvailableQuery = { bookCopiesAvailable: Array<{ __typename?: 'BookCopy', id: string, condition: string, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, location?: { __typename?: 'Location', id: string, name: string, address: string } | null }> };

export type MeInvoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type MeInvoicesQuery = { meInvoices: Array<{ __typename?: 'Invoice', id: string, creationTime: any, location: { __typename?: 'Location', id: string, name: string } }> };

export type MeTradeInsQueryVariables = Exact<{ [key: string]: never; }>;


export type MeTradeInsQuery = { meTradeIns: Array<{ __typename?: 'TradeIn', id: string, userId: string, bookCopyId: string, credit: number, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } }> };

export type ExchangeMutationVariables = Exact<{
  bookCopyId: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type ExchangeMutation = { exchange: { __typename?: 'Invoice', id: string, creationTime: any, location: { __typename?: 'Location', id: string, name: string } } };

export type LocationPartsFragment = { __typename?: 'Location', id: string, name: string, address: string };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { locations: Array<{ __typename?: 'Location', id: string, name: string, address: string }> };

export type LocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LocationQuery = { location?: { __typename?: 'Location', id: string, name: string, address: string } | null };

export type PostPartsFragment = { __typename?: 'Post', id: string, text: string, isRecommending: boolean, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, user: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } };

export type PostsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']>;
  bookId?: InputMaybe<Scalars['ID']>;
  limit: Scalars['Int'];
  before?: InputMaybe<Scalars['Int']>;
}>;


export type PostsQuery = { posts: Array<{ __typename?: 'Post', id: string, text: string, isRecommending: boolean, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, user: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } }> };

export type PostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostQuery = { post?: { __typename?: 'Post', id: string, text: string, isRecommending: boolean, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, user: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } } | null };

export type PostCreateMutationVariables = Exact<{
  text: Scalars['String'];
  bookId: Scalars['ID'];
  isRecommending: Scalars['Boolean'];
}>;


export type PostCreateMutation = { postCreate: { __typename?: 'Post', id: string, text: string, isRecommending: boolean, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, user: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } } };

export type PostUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  text: Scalars['String'];
  isRecommending: Scalars['Boolean'];
}>;


export type PostUpdateMutation = { postUpdate: { __typename?: 'Post', id: string, text: string, isRecommending: boolean, creationTime: any, book: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null }, user: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } } };

export type PostDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostDeleteMutation = { postDelete: boolean };

export type UserPartsFragment = { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { __typename?: 'User', credit?: number | null, id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } | null };

export type MeUpdateMutationVariables = Exact<{
  name: Scalars['String'];
  bio: Scalars['String'];
}>;


export type MeUpdateMutation = { meUpdate: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { user: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } };

export type UserBookPartsFragment = { __typename?: 'UserBook', id: string, bookId: number, userId: number, startDate?: string | null, endDate?: string | null, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } | null, user?: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } | null, owners: Array<{ __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null }> };

export type UserBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBookQuery = { userBook?: { __typename?: 'UserBook', id: string, bookId: number, userId: number, startDate?: string | null, endDate?: string | null, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } | null, user?: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } | null, owners: Array<{ __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null }> } | null };

export type UserBooksQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']>;
}>;


export type UserBooksQuery = { userBooks: Array<{ __typename?: 'UserBook', id: string, bookId: number, userId: number, startDate?: string | null, endDate?: string | null, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } | null, user?: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } | null, owners: Array<{ __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null }> }> };

export type UserBookAddMutationVariables = Exact<{
  bookId: Scalars['ID'];
  startDate?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
}>;


export type UserBookAddMutation = { userBookAdd: { __typename?: 'UserBook', id: string, bookId: number, userId: number, startDate?: string | null, endDate?: string | null, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } | null, user?: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } | null, owners: Array<{ __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null }> } };

export type UserBookEditMutationVariables = Exact<{
  id: Scalars['ID'];
  startDate?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
}>;


export type UserBookEditMutation = { userBookEdit: { __typename?: 'UserBook', id: string, bookId: number, userId: number, startDate?: string | null, endDate?: string | null, book?: { __typename?: 'Book', id: string, title: string, subtitle?: string | null, imageUrl?: string | null, description?: string | null, publishedYear: number, author?: { __typename?: 'Author', id: string, name: string } | null, genre?: { __typename?: 'Genre', id: string, name: string } | null } | null, user?: { __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null } | null, owners: Array<{ __typename?: 'User', id: string, name: string, bio?: string | null, profilePicture?: string | null, creationTime?: any | null }> } };

export type UserBookDeleteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBookDeleteMutation = { userBookDelete: boolean };

export const BookPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const BrowsePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const InvoicePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvoiceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Invoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const LocationPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode;
export const BookCopyPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookCopyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookCopy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode;
export const InvoiceEntryPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvoiceEntryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InvoiceEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoiceId"}},{"kind":"Field","name":{"kind":"Name","value":"bookCopyId"}},{"kind":"Field","name":{"kind":"Name","value":"bookCopy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookCopyParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookCopyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookCopy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode;
export const TradeInPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TradeInParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TradeIn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"bookCopyId"}},{"kind":"Field","name":{"kind":"Name","value":"credit"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const UserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;
export const PostPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"isRecommending"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;
export const UserBookPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;
export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useBookQuery(options: Omit<Urql.UseQueryArgs<BookQueryVariables>, 'query'>) {
  return Urql.useQuery<BookQuery, BookQueryVariables>({ query: BookDocument, ...options });
};
export const BookSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"bookSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useBookSearchQuery(options: Omit<Urql.UseQueryArgs<BookSearchQueryVariables>, 'query'>) {
  return Urql.useQuery<BookSearchQuery, BookSearchQueryVariables>({ query: BookSearchDocument, ...options });
};
export const AuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"author"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useAuthorQuery(options: Omit<Urql.UseQueryArgs<AuthorQueryVariables>, 'query'>) {
  return Urql.useQuery<AuthorQuery, AuthorQueryVariables>({ query: AuthorDocument, ...options });
};
export const GenreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"genre"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genre"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useGenreQuery(options: Omit<Urql.UseQueryArgs<GenreQueryVariables>, 'query'>) {
  return Urql.useQuery<GenreQuery, GenreQueryVariables>({ query: GenreDocument, ...options });
};
export const GenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useGenresQuery(options?: Omit<Urql.UseQueryArgs<GenresQueryVariables>, 'query'>) {
  return Urql.useQuery<GenresQuery, GenresQueryVariables>({ query: GenresDocument, ...options });
};
export const BrowsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"browses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"browses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BrowseParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrowseParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Browse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}}]} as unknown as DocumentNode;

export function useBrowsesQuery(options?: Omit<Urql.UseQueryArgs<BrowsesQueryVariables>, 'query'>) {
  return Urql.useQuery<BrowsesQuery, BrowsesQueryVariables>({ query: BrowsesDocument, ...options });
};
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}}]}}]} as unknown as DocumentNode;

export function useEventsQuery(options?: Omit<Urql.UseQueryArgs<EventsQueryVariables>, 'query'>) {
  return Urql.useQuery<EventsQuery, EventsQueryVariables>({ query: EventsDocument, ...options });
};
export const EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"event"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}}]}}]}}]} as unknown as DocumentNode;

export function useEventQuery(options: Omit<Urql.UseQueryArgs<EventQueryVariables>, 'query'>) {
  return Urql.useQuery<EventQuery, EventQueryVariables>({ query: EventDocument, ...options });
};
export const BookCopiesAvailableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"bookCopiesAvailable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookCopiesAvailable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookCopyParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookCopyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookCopy"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode;

export function useBookCopiesAvailableQuery(options: Omit<Urql.UseQueryArgs<BookCopiesAvailableQueryVariables>, 'query'>) {
  return Urql.useQuery<BookCopiesAvailableQuery, BookCopiesAvailableQueryVariables>({ query: BookCopiesAvailableDocument, ...options });
};
export const MeInvoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"meInvoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meInvoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvoiceParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvoiceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Invoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useMeInvoicesQuery(options?: Omit<Urql.UseQueryArgs<MeInvoicesQueryVariables>, 'query'>) {
  return Urql.useQuery<MeInvoicesQuery, MeInvoicesQueryVariables>({ query: MeInvoicesDocument, ...options });
};
export const MeTradeInsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"meTradeIns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meTradeIns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TradeInParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TradeInParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TradeIn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"bookCopyId"}},{"kind":"Field","name":{"kind":"Name","value":"credit"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}}]}}]} as unknown as DocumentNode;

export function useMeTradeInsQuery(options?: Omit<Urql.UseQueryArgs<MeTradeInsQueryVariables>, 'query'>) {
  return Urql.useQuery<MeTradeInsQuery, MeTradeInsQueryVariables>({ query: MeTradeInsDocument, ...options });
};
export const ExchangeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"exchange"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookCopyId"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exchange"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookCopyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookCopyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InvoiceParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InvoiceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Invoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

export function useExchangeMutation() {
  return Urql.useMutation<ExchangeMutation, ExchangeMutationVariables>(ExchangeDocument);
};
export const LocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode;

export function useLocationsQuery(options?: Omit<Urql.UseQueryArgs<LocationsQueryVariables>, 'query'>) {
  return Urql.useQuery<LocationsQuery, LocationsQueryVariables>({ query: LocationsDocument, ...options });
};
export const LocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"location"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode;

export function useLocationQuery(options: Omit<Urql.UseQueryArgs<LocationQueryVariables>, 'query'>) {
  return Urql.useQuery<LocationQuery, LocationQueryVariables>({ query: LocationDocument, ...options });
};
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"isRecommending"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({ query: PostsDocument, ...options });
};
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"isRecommending"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function usePostQuery(options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({ query: PostDocument, ...options });
};
export const PostCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isRecommending"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isRecommending"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isRecommending"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"isRecommending"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function usePostCreateMutation() {
  return Urql.useMutation<PostCreateMutation, PostCreateMutationVariables>(PostCreateDocument);
};
export const PostUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isRecommending"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"isRecommending"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isRecommending"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"isRecommending"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function usePostUpdateMutation() {
  return Urql.useMutation<PostUpdateMutation, PostUpdateMutationVariables>(PostUpdateDocument);
};
export const PostDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"postDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;

export function usePostDeleteMutation() {
  return Urql.useMutation<PostDeleteMutation, PostDeleteMutationVariables>(PostDeleteDocument);
};
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}},{"kind":"Field","name":{"kind":"Name","value":"credit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const MeUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"meUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bio"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bio"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function useMeUpdateMutation() {
  return Urql.useMutation<MeUpdateMutation, MeUpdateMutationVariables>(MeUpdateDocument);
};
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]} as unknown as DocumentNode;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'>) {
  return Urql.useQuery<UserQuery, UserQueryVariables>({ query: UserDocument, ...options });
};
export const UserBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]} as unknown as DocumentNode;

export function useUserBookQuery(options: Omit<Urql.UseQueryArgs<UserBookQueryVariables>, 'query'>) {
  return Urql.useQuery<UserBookQuery, UserBookQueryVariables>({ query: UserBookDocument, ...options });
};
export const UserBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]} as unknown as DocumentNode;

export function useUserBooksQuery(options?: Omit<Urql.UseQueryArgs<UserBooksQueryVariables>, 'query'>) {
  return Urql.useQuery<UserBooksQuery, UserBooksQueryVariables>({ query: UserBooksDocument, ...options });
};
export const UserBookAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookAdd"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"bookId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]} as unknown as DocumentNode;

export function useUserBookAddMutation() {
  return Urql.useMutation<UserBookAddMutation, UserBookAddMutationVariables>(UserBookAddDocument);
};
export const UserBookEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookEdit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserBookParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"publishedYear"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserBookParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserBook"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bookId"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BookParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]} as unknown as DocumentNode;

export function useUserBookEditMutation() {
  return Urql.useMutation<UserBookEditMutation, UserBookEditMutationVariables>(UserBookEditDocument);
};
export const UserBookDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userBookDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userBookDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;

export function useUserBookDeleteMutation() {
  return Urql.useMutation<UserBookDeleteMutation, UserBookDeleteMutationVariables>(UserBookDeleteDocument);
};
export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Author?: (data: WithTypename<Author>) => null | string,
  Book?: (data: WithTypename<Book>) => null | string,
  BookCopy?: (data: WithTypename<BookCopy>) => null | string,
  Browse?: (data: WithTypename<Browse>) => null | string,
  Event?: (data: WithTypename<Event>) => null | string,
  Genre?: (data: WithTypename<Genre>) => null | string,
  Invoice?: (data: WithTypename<Invoice>) => null | string,
  InvoiceEntry?: (data: WithTypename<InvoiceEntry>) => null | string,
  Location?: (data: WithTypename<Location>) => null | string,
  Post?: (data: WithTypename<Post>) => null | string,
  Test?: (data: WithTypename<Test>) => null | string,
  TradeIn?: (data: WithTypename<TradeIn>) => null | string,
  User?: (data: WithTypename<User>) => null | string,
  UserBook?: (data: WithTypename<UserBook>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    author?: GraphCacheResolver<WithTypename<Query>, QueryAuthorArgs, WithTypename<Author> | string>,
    book?: GraphCacheResolver<WithTypename<Query>, QueryBookArgs, WithTypename<Book> | string>,
    bookCopiesAvailable?: GraphCacheResolver<WithTypename<Query>, QueryBookCopiesAvailableArgs, Array<WithTypename<BookCopy> | string>>,
    bookSearch?: GraphCacheResolver<WithTypename<Query>, QueryBookSearchArgs, Array<WithTypename<Book> | string>>,
    browses?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Browse> | string>>,
    event?: GraphCacheResolver<WithTypename<Query>, QueryEventArgs, WithTypename<Event> | string>,
    events?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Event> | string>>,
    genre?: GraphCacheResolver<WithTypename<Query>, QueryGenreArgs, WithTypename<Genre> | string>,
    genres?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Genre> | string>>,
    location?: GraphCacheResolver<WithTypename<Query>, QueryLocationArgs, WithTypename<Location> | string>,
    locations?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Location> | string>>,
    me?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<User> | string>,
    meInvoices?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Invoice> | string>>,
    meTradeIns?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<TradeIn> | string>>,
    post?: GraphCacheResolver<WithTypename<Query>, QueryPostArgs, WithTypename<Post> | string>,
    posts?: GraphCacheResolver<WithTypename<Query>, QueryPostsArgs, Array<WithTypename<Post> | string>>,
    test?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<Test> | string>,
    user?: GraphCacheResolver<WithTypename<Query>, QueryUserArgs, WithTypename<User> | string>,
    userBook?: GraphCacheResolver<WithTypename<Query>, QueryUserBookArgs, WithTypename<UserBook> | string>,
    userBooks?: GraphCacheResolver<WithTypename<Query>, QueryUserBooksArgs, Array<WithTypename<UserBook> | string>>
  },
  Author?: {
    id?: GraphCacheResolver<WithTypename<Author>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Author>, Record<string, never>, Scalars['String'] | string>
  },
  Book?: {
    author?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, WithTypename<Author> | string>,
    description?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    genre?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, WithTypename<Genre> | string>,
    id?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['ID'] | string>,
    imageUrl?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    publishedYear?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['Int'] | string>,
    subtitle?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    title?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>
  },
  BookCopy?: {
    book?: GraphCacheResolver<WithTypename<BookCopy>, Record<string, never>, WithTypename<Book> | string>,
    condition?: GraphCacheResolver<WithTypename<BookCopy>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<BookCopy>, Record<string, never>, Scalars['ID'] | string>,
    location?: GraphCacheResolver<WithTypename<BookCopy>, Record<string, never>, WithTypename<Location> | string>,
    owners?: GraphCacheResolver<WithTypename<BookCopy>, Record<string, never>, Array<WithTypename<User> | string>>
  },
  Browse?: {
    books?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Array<WithTypename<Book> | string>>,
    description?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Browse>, Record<string, never>, Scalars['String'] | string>
  },
  Event?: {
    description?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['String'] | string>,
    endTime?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['Time'] | string>,
    id?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['ID'] | string>,
    location?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, WithTypename<Location> | string>,
    name?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['String'] | string>,
    startTime?: GraphCacheResolver<WithTypename<Event>, Record<string, never>, Scalars['Time'] | string>
  },
  Genre?: {
    description?: GraphCacheResolver<WithTypename<Genre>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Genre>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Genre>, Record<string, never>, Scalars['String'] | string>
  },
  Invoice?: {
    creationTime?: GraphCacheResolver<WithTypename<Invoice>, Record<string, never>, Scalars['Time'] | string>,
    id?: GraphCacheResolver<WithTypename<Invoice>, Record<string, never>, Scalars['ID'] | string>,
    location?: GraphCacheResolver<WithTypename<Invoice>, Record<string, never>, WithTypename<Location> | string>,
    locationId?: GraphCacheResolver<WithTypename<Invoice>, Record<string, never>, Scalars['Int'] | string>
  },
  InvoiceEntry?: {
    Credit?: GraphCacheResolver<WithTypename<InvoiceEntry>, Record<string, never>, Scalars['Int'] | string>,
    bookCopy?: GraphCacheResolver<WithTypename<InvoiceEntry>, Record<string, never>, WithTypename<BookCopy> | string>,
    bookCopyId?: GraphCacheResolver<WithTypename<InvoiceEntry>, Record<string, never>, Scalars['ID'] | string>,
    invoiceId?: GraphCacheResolver<WithTypename<InvoiceEntry>, Record<string, never>, Scalars['ID'] | string>
  },
  Location?: {
    address?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Location>, Record<string, never>, Scalars['String'] | string>
  },
  Post?: {
    book?: GraphCacheResolver<WithTypename<Post>, Record<string, never>, WithTypename<Book> | string>,
    creationTime?: GraphCacheResolver<WithTypename<Post>, Record<string, never>, Scalars['Time'] | string>,
    id?: GraphCacheResolver<WithTypename<Post>, Record<string, never>, Scalars['ID'] | string>,
    isRecommending?: GraphCacheResolver<WithTypename<Post>, Record<string, never>, Scalars['Boolean'] | string>,
    text?: GraphCacheResolver<WithTypename<Post>, Record<string, never>, Scalars['String'] | string>,
    user?: GraphCacheResolver<WithTypename<Post>, Record<string, never>, WithTypename<User> | string>
  },
  Test?: {
    id?: GraphCacheResolver<WithTypename<Test>, Record<string, never>, Scalars['ID'] | string>,
    status?: GraphCacheResolver<WithTypename<Test>, Record<string, never>, Scalars['String'] | string>
  },
  TradeIn?: {
    book?: GraphCacheResolver<WithTypename<TradeIn>, Record<string, never>, WithTypename<Book> | string>,
    bookCopyId?: GraphCacheResolver<WithTypename<TradeIn>, Record<string, never>, Scalars['ID'] | string>,
    creationTime?: GraphCacheResolver<WithTypename<TradeIn>, Record<string, never>, Scalars['Time'] | string>,
    credit?: GraphCacheResolver<WithTypename<TradeIn>, Record<string, never>, Scalars['Int'] | string>,
    id?: GraphCacheResolver<WithTypename<TradeIn>, Record<string, never>, Scalars['ID'] | string>,
    userId?: GraphCacheResolver<WithTypename<TradeIn>, Record<string, never>, Scalars['ID'] | string>
  },
  User?: {
    bio?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    creationTime?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Time'] | string>,
    credit?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Int'] | string>,
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    profilePicture?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>
  },
  UserBook?: {
    book?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, WithTypename<Book> | string>,
    bookCopyId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['Int'] | string>,
    bookId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['Int'] | string>,
    endDate?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['ID'] | string>,
    owners?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Array<WithTypename<User> | string>>,
    startDate?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['String'] | string>,
    user?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, WithTypename<User> | string>,
    userId?: GraphCacheResolver<WithTypename<UserBook>, Record<string, never>, Scalars['Int'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  exchange?: GraphCacheOptimisticMutationResolver<MutationExchangeArgs, WithTypename<Invoice>>,
  meUpdate?: GraphCacheOptimisticMutationResolver<MutationMeUpdateArgs, WithTypename<User>>,
  postCreate?: GraphCacheOptimisticMutationResolver<MutationPostCreateArgs, WithTypename<Post>>,
  postDelete?: GraphCacheOptimisticMutationResolver<MutationPostDeleteArgs, Scalars['Boolean']>,
  postUpdate?: GraphCacheOptimisticMutationResolver<MutationPostUpdateArgs, WithTypename<Post>>,
  test?: GraphCacheOptimisticMutationResolver<Record<string, never>, WithTypename<Test>>,
  userBookAdd?: GraphCacheOptimisticMutationResolver<MutationUserBookAddArgs, WithTypename<UserBook>>,
  userBookDelete?: GraphCacheOptimisticMutationResolver<MutationUserBookDeleteArgs, Scalars['Boolean']>,
  userBookEdit?: GraphCacheOptimisticMutationResolver<MutationUserBookEditArgs, WithTypename<UserBook>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    exchange?: GraphCacheUpdateResolver<{ exchange: WithTypename<Invoice> }, MutationExchangeArgs>,
    meUpdate?: GraphCacheUpdateResolver<{ meUpdate: WithTypename<User> }, MutationMeUpdateArgs>,
    postCreate?: GraphCacheUpdateResolver<{ postCreate: WithTypename<Post> }, MutationPostCreateArgs>,
    postDelete?: GraphCacheUpdateResolver<{ postDelete: Scalars['Boolean'] }, MutationPostDeleteArgs>,
    postUpdate?: GraphCacheUpdateResolver<{ postUpdate: WithTypename<Post> }, MutationPostUpdateArgs>,
    test?: GraphCacheUpdateResolver<{ test: WithTypename<Test> }, Record<string, never>>,
    userBookAdd?: GraphCacheUpdateResolver<{ userBookAdd: WithTypename<UserBook> }, MutationUserBookAddArgs>,
    userBookDelete?: GraphCacheUpdateResolver<{ userBookDelete: Scalars['Boolean'] }, MutationUserBookDeleteArgs>,
    userBookEdit?: GraphCacheUpdateResolver<{ userBookEdit: WithTypename<UserBook> }, MutationUserBookEditArgs>
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