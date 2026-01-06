import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Cafe24Product = {
  __typename?: 'Cafe24Product';
  /** 상품 등록일 */
  createdAt: Scalars['DateTime']['output'];
  detailImageUrl?: Maybe<Scalars['String']['output']>;
  /** 진열 여부 */
  display: Scalars['Boolean']['output'];
  /** 영문 상품명 */
  engProductName?: Maybe<Scalars['String']['output']>;
  listImageUrl?: Maybe<Scalars['String']['output']>;
  /** 해당 Cafe24 상품에 연결된 핀 개수 */
  pinsCount: Scalars['Float']['output'];
  /** 판매가 */
  price: Scalars['String']['output'];
  /** 상품 코드 */
  productCode: Scalars['String']['output'];
  /** 상품명 */
  productName: Scalars['String']['output'];
  /** Cafe24 상품 번호 */
  productNo: Scalars['ID']['output'];
  /** 소비자가 */
  retailPrice?: Maybe<Scalars['String']['output']>;
  /** 판매 여부 */
  selling: Scalars['Boolean']['output'];
  /** 쇼핑몰 번호 */
  shopNo: Scalars['Float']['output'];
  smallImageUrl?: Maybe<Scalars['String']['output']>;
  /** 품절 여부 */
  soldOut: Scalars['Boolean']['output'];
  /** 상품 요약 설명 */
  summaryDescription?: Maybe<Scalars['String']['output']>;
  tinyImageUrl?: Maybe<Scalars['String']['output']>;
  /** 상품 수정일 */
  updatedAt: Scalars['DateTime']['output'];
};

export type Cafe24ProductsConnection = {
  __typename?: 'Cafe24ProductsConnection';
  edges: Array<Cafe24ProductsConnectionEdge>;
  pageInfo: ConnectionPageInfo;
};

export type Cafe24ProductsConnectionEdge = {
  __typename?: 'Cafe24ProductsConnectionEdge';
  cursor: Scalars['String']['output'];
  node: Cafe24Product;
};

export type Cafe24ProductsConnectionFilterInput = {
  /** 상품 코드 */
  productCode?: InputMaybe<Scalars['String']['input']>;
  /** 상품명 (부분 검색) */
  productName?: InputMaybe<Scalars['String']['input']>;
};

export type ConnectionPageInfo = {
  __typename?: 'ConnectionPageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type CreatePinInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  connectingImageUrl: Scalars['String']['input'];
  displayImageUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  productNo?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PinType>;
  /** x 좌표 비율 (0~1) */
  xRatio: Scalars['Float']['input'];
  /** y 좌표 비율 (0~1) */
  yRatio: Scalars['Float']['input'];
};

export type FilePathInput = {
  /** unique 식별자. */
  id: Scalars['String']['input'];
  key: FilePathKey;
};

/** file 컨텍스트. file path에 사용 */
export enum FilePathKey {
  /** 파트너에 속한 파일 path. */
  Partner = 'Partner',
  /** 픽클백 속한 파일 path */
  Picklebag = 'Picklebag',
  /** 리뷰에 속한 파일 path */
  Review = 'Review',
  /** 사용자에 속한 파일 path. */
  User = 'User'
}

/** 파일 업로드 데이터 */
export type FileUploadInput = {
  /** 파일명. (확장자 포함) */
  filename: Scalars['String']['input'];
  metadata: MetadataInput;
  /** image/jpeg, image/png, image/gif, video/mp4, video/x-msvideo 허용. */
  mimetype: Scalars['String']['input'];
  path: FilePathInput;
};

/** 로그인 성공 */
export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  /** Access token */
  accessToken: Scalars['String']['output'];
  /** Access token이 만료될 시각 */
  expiresAt: Scalars['Timestamp']['output'];
  /** Refresh token */
  refreshToken: Scalars['String']['output'];
};

export type MetadataInput = {
  /** duration (ms), video의 경우 반드시 포함. */
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** height (px) */
  height: Scalars['Int']['input'];
  /** width (px) */
  width: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 이미지에 핀 생성 */
  createPin: Pin;
  /** 핀 삭제 */
  deletePin: Scalars['Boolean']['output'];
  /** Refresh token을 폐기해 로그아웃 합니다. */
  logout: Scalars['Boolean']['output'];
  /** refresh token을 통해 새로운 access token을 발급합니다. */
  refreshAccessToken: LoginSuccess;
  /** 핀 수정 */
  updatePin: Pin;
  /** 이미지 기준으로 핀 목록을 전체 덮어쓰기(upsert) 합니다. */
  upsertPins: Array<Pin>;
};


export type MutationCreatePinArgs = {
  input: CreatePinInput;
};


export type MutationDeletePinArgs = {
  pinId: Scalars['ID']['input'];
};


export type MutationLogoutArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationUpdatePinArgs = {
  input: UpdatePinInput;
};


export type MutationUpsertPinsArgs = {
  input: UpsertPinsGraphQlInput;
};

export type Pin = {
  __typename?: 'Pin';
  color: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  connectingImageUrl: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayImageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkUrl?: Maybe<Scalars['String']['output']>;
  mallId: Scalars['String']['output'];
  productNo?: Maybe<Scalars['Int']['output']>;
  size: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  type: PinType;
  updatedAt: Scalars['DateTime']['output'];
  xRatio: Scalars['Float']['output'];
  yRatio: Scalars['Float']['output'];
};

/** Pin 타입 */
export enum PinType {
  /** 기본 핀 타입. */
  Basic = 'BASIC'
}

export type Query = {
  __typename?: 'Query';
  /** Cafe24 OAuth 인증을 시작하기 위한 Authorization URL을 반환한다. */
  cafe24AuthenticationUrl: Scalars['String']['output'];
  /** Cafe24 상품 단건 조회 */
  cafe24Product?: Maybe<Cafe24Product>;
  /** Cafe24 상품 목록 (Connection) */
  cafe24ProductsConnection: Cafe24ProductsConnection;
  /** 파일 업로드를 위한 업로드 URL과 파일 URL을 발급합니다. */
  fileUpload: Upload;
  /** 사용자 */
  me: User;
  /** 이미지 기준 핀 목록 조회 */
  pins: Array<Pin>;
};


export type QueryCafe24AuthenticationUrlArgs = {
  mallId: Scalars['String']['input'];
};


export type QueryCafe24ProductArgs = {
  productNo: Scalars['Int']['input'];
};


export type QueryCafe24ProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Cafe24ProductsConnectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFileUploadArgs = {
  data: FileUploadInput;
};


export type QueryPinsArgs = {
  connectingImageUrl: Scalars['String']['input'];
};

export type UpdatePinInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  displayImageUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  pinId: Scalars['ID']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PinType>;
  xRatio?: InputMaybe<Scalars['Float']['input']>;
  yRatio?: InputMaybe<Scalars['Float']['input']>;
};

/** 파일 업로드 */
export type Upload = {
  __typename?: 'Upload';
  /** 업로드 이후 파일 URL */
  fileUrl: Scalars['String']['output'];
  /** 업로드 용 URL */
  uploadUrl: Scalars['String']['output'];
};

export type UpsertPinItemInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  displayImageUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PinType>;
  /** x 좌표 비율 (0~1) */
  xRatio: Scalars['Float']['input'];
  /** y 좌표 비율 (0~1) */
  yRatio: Scalars['Float']['input'];
};

export type UpsertPinsGraphQlInput = {
  /** 핀을 연결할 이미지 URL (기준 키) */
  connectingImageUrl: Scalars['String']['input'];
  /** 해당 이미지에 저장할 핀 목록 (전체 덮어쓰기) */
  pins: Array<UpsertPinItemInput>;
  /** Cafe24 상품 번호 */
  productNo: Scalars['Int']['input'];
};

/** 사용자 (Cafe24 mall 기준) */
export type User = {
  __typename?: 'User';
  /** 생성일 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제일 (soft delete) */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** 마지막 로그인 시각 */
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  /** 몰 ID */
  mallId?: Maybe<Scalars['String']['output']>;
  /** 수정일 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GetCafe24AuthenticationUrlQueryVariables = Exact<{
  mallId: Scalars['String']['input'];
}>;


export type GetCafe24AuthenticationUrlQuery = { __typename?: 'Query', cafe24AuthenticationUrl: string };

export type RefreshAccessTokenMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken: { __typename?: 'LoginSuccess', accessToken: string, expiresAt: any, refreshToken: string } };

export type LogoutMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, createdAt: any, deletedAt?: any | null, lastLogin?: any | null, updatedAt: any, mallId?: string | null } };

export type GetCafe24ProductsConnectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Cafe24ProductsConnectionFilterInput>;
}>;


export type GetCafe24ProductsConnectionQuery = { __typename?: 'Query', cafe24ProductsConnection: { __typename?: 'Cafe24ProductsConnection', edges: Array<{ __typename?: 'Cafe24ProductsConnectionEdge', cursor: string, node: { __typename?: 'Cafe24Product', productNo: string, productName: string, productCode: string, price: string, retailPrice?: string | null, display: boolean, selling: boolean, soldOut: boolean, shopNo: number, engProductName?: string | null, summaryDescription?: string | null, detailImageUrl?: string | null, listImageUrl?: string | null, tinyImageUrl?: string | null, smallImageUrl?: string | null } }>, pageInfo: { __typename?: 'ConnectionPageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string, endCursor: string } } };

export type GetCafe24ProductQueryVariables = Exact<{
  productNo: Scalars['Int']['input'];
}>;


export type GetCafe24ProductQuery = { __typename?: 'Query', cafe24Product?: { __typename?: 'Cafe24Product', productNo: string, productName: string, productCode: string, price: string, retailPrice?: string | null, display: boolean, selling: boolean, soldOut: boolean, createdAt: any, updatedAt: any, shopNo: number, engProductName?: string | null, summaryDescription?: string | null, detailImageUrl?: string | null, listImageUrl?: string | null, tinyImageUrl?: string | null, smallImageUrl?: string | null } | null };

export type PinFieldsFragment = { __typename?: 'Pin', id: string, color: string, comment?: string | null, connectingImageUrl: string, createdAt: any, displayImageUrl?: string | null, linkUrl?: string | null, mallId: string, productNo?: number | null, size: number, title?: string | null, type: PinType, updatedAt: any, xRatio: number, yRatio: number };

export type GetPinsQueryVariables = Exact<{
  connectingImageUrl: Scalars['String']['input'];
}>;


export type GetPinsQuery = { __typename?: 'Query', pins: Array<{ __typename?: 'Pin', id: string, color: string, comment?: string | null, connectingImageUrl: string, createdAt: any, displayImageUrl?: string | null, linkUrl?: string | null, mallId: string, productNo?: number | null, size: number, title?: string | null, type: PinType, updatedAt: any, xRatio: number, yRatio: number }> };

export type CreatePinMutationVariables = Exact<{
  input: CreatePinInput;
}>;


export type CreatePinMutation = { __typename?: 'Mutation', createPin: { __typename?: 'Pin', id: string, color: string, comment?: string | null, connectingImageUrl: string, createdAt: any, displayImageUrl?: string | null, linkUrl?: string | null, mallId: string, productNo?: number | null, size: number, title?: string | null, type: PinType, updatedAt: any, xRatio: number, yRatio: number } };

export type UpdatePinMutationVariables = Exact<{
  input: UpdatePinInput;
}>;


export type UpdatePinMutation = { __typename?: 'Mutation', updatePin: { __typename?: 'Pin', id: string, color: string, comment?: string | null, connectingImageUrl: string, createdAt: any, displayImageUrl?: string | null, linkUrl?: string | null, mallId: string, productNo?: number | null, size: number, title?: string | null, type: PinType, updatedAt: any, xRatio: number, yRatio: number } };

export type DeletePinMutationVariables = Exact<{
  pinId: Scalars['ID']['input'];
}>;


export type DeletePinMutation = { __typename?: 'Mutation', deletePin: boolean };

export type UpsertPinsMutationVariables = Exact<{
  input: UpsertPinsGraphQlInput;
}>;


export type UpsertPinsMutation = { __typename?: 'Mutation', upsertPins: Array<{ __typename?: 'Pin', id: string, color: string, comment?: string | null, connectingImageUrl: string, createdAt: any, displayImageUrl?: string | null, linkUrl?: string | null, mallId: string, productNo?: number | null, size: number, title?: string | null, type: PinType, updatedAt: any, xRatio: number, yRatio: number }> };

export type GetFileUploadQueryVariables = Exact<{
  data: FileUploadInput;
}>;


export type GetFileUploadQuery = { __typename?: 'Query', fileUpload: { __typename?: 'Upload', uploadUrl: string, fileUrl: string } };

export const PinFieldsFragmentDoc = gql`
    fragment PinFields on Pin {
  id
  color
  comment
  connectingImageUrl
  createdAt
  displayImageUrl
  linkUrl
  mallId
  productNo
  size
  title
  type
  updatedAt
  xRatio
  yRatio
}
    `;
export const GetCafe24AuthenticationUrlDocument = gql`
    query GetCafe24AuthenticationUrl($mallId: String!) {
  cafe24AuthenticationUrl(mallId: $mallId)
}
    `;

/**
 * __useGetCafe24AuthenticationUrlQuery__
 *
 * To run a query within a React component, call `useGetCafe24AuthenticationUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCafe24AuthenticationUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCafe24AuthenticationUrlQuery({
 *   variables: {
 *      mallId: // value for 'mallId'
 *   },
 * });
 */
export function useGetCafe24AuthenticationUrlQuery(baseOptions: Apollo.QueryHookOptions<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables> & ({ variables: GetCafe24AuthenticationUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>(GetCafe24AuthenticationUrlDocument, options);
      }
export function useGetCafe24AuthenticationUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>(GetCafe24AuthenticationUrlDocument, options);
        }
// @ts-ignore
export function useGetCafe24AuthenticationUrlSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>): Apollo.UseSuspenseQueryResult<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>;
export function useGetCafe24AuthenticationUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>): Apollo.UseSuspenseQueryResult<GetCafe24AuthenticationUrlQuery | undefined, GetCafe24AuthenticationUrlQueryVariables>;
export function useGetCafe24AuthenticationUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>(GetCafe24AuthenticationUrlDocument, options);
        }
export type GetCafe24AuthenticationUrlQueryHookResult = ReturnType<typeof useGetCafe24AuthenticationUrlQuery>;
export type GetCafe24AuthenticationUrlLazyQueryHookResult = ReturnType<typeof useGetCafe24AuthenticationUrlLazyQuery>;
export type GetCafe24AuthenticationUrlSuspenseQueryHookResult = ReturnType<typeof useGetCafe24AuthenticationUrlSuspenseQuery>;
export type GetCafe24AuthenticationUrlQueryResult = Apollo.QueryResult<GetCafe24AuthenticationUrlQuery, GetCafe24AuthenticationUrlQueryVariables>;
export const RefreshAccessTokenDocument = gql`
    mutation RefreshAccessToken($refreshToken: String!) {
  refreshAccessToken(refreshToken: $refreshToken) {
    accessToken
    expiresAt
    refreshToken
  }
}
    `;
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>(RefreshAccessTokenDocument, options);
      }
export type RefreshAccessTokenMutationHookResult = ReturnType<typeof useRefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationResult = Apollo.MutationResult<RefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout($refreshToken: String!) {
  logout(refreshToken: $refreshToken)
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetMeDocument = gql`
    query GetMe {
  me {
    id
    createdAt
    deletedAt
    lastLogin
    updatedAt
    mallId
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
// @ts-ignore
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>): Apollo.UseSuspenseQueryResult<GetMeQuery, GetMeQueryVariables>;
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>): Apollo.UseSuspenseQueryResult<GetMeQuery | undefined, GetMeQueryVariables>;
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const GetCafe24ProductsConnectionDocument = gql`
    query GetCafe24ProductsConnection($first: Int, $after: String, $before: String, $last: Int, $filter: Cafe24ProductsConnectionFilterInput) {
  cafe24ProductsConnection(
    first: $first
    after: $after
    before: $before
    last: $last
    filter: $filter
  ) {
    edges {
      cursor
      node {
        productNo
        productName
        productCode
        price
        retailPrice
        display
        selling
        soldOut
        shopNo
        engProductName
        summaryDescription
        detailImageUrl
        listImageUrl
        tinyImageUrl
        smallImageUrl
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useGetCafe24ProductsConnectionQuery__
 *
 * To run a query within a React component, call `useGetCafe24ProductsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCafe24ProductsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCafe24ProductsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCafe24ProductsConnectionQuery(baseOptions?: Apollo.QueryHookOptions<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>(GetCafe24ProductsConnectionDocument, options);
      }
export function useGetCafe24ProductsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>(GetCafe24ProductsConnectionDocument, options);
        }
// @ts-ignore
export function useGetCafe24ProductsConnectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>): Apollo.UseSuspenseQueryResult<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>;
export function useGetCafe24ProductsConnectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>): Apollo.UseSuspenseQueryResult<GetCafe24ProductsConnectionQuery | undefined, GetCafe24ProductsConnectionQueryVariables>;
export function useGetCafe24ProductsConnectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>(GetCafe24ProductsConnectionDocument, options);
        }
export type GetCafe24ProductsConnectionQueryHookResult = ReturnType<typeof useGetCafe24ProductsConnectionQuery>;
export type GetCafe24ProductsConnectionLazyQueryHookResult = ReturnType<typeof useGetCafe24ProductsConnectionLazyQuery>;
export type GetCafe24ProductsConnectionSuspenseQueryHookResult = ReturnType<typeof useGetCafe24ProductsConnectionSuspenseQuery>;
export type GetCafe24ProductsConnectionQueryResult = Apollo.QueryResult<GetCafe24ProductsConnectionQuery, GetCafe24ProductsConnectionQueryVariables>;
export const GetCafe24ProductDocument = gql`
    query GetCafe24Product($productNo: Int!) {
  cafe24Product(productNo: $productNo) {
    productNo
    productName
    productCode
    price
    retailPrice
    display
    selling
    soldOut
    createdAt
    updatedAt
    shopNo
    engProductName
    summaryDescription
    detailImageUrl
    listImageUrl
    tinyImageUrl
    smallImageUrl
  }
}
    `;

/**
 * __useGetCafe24ProductQuery__
 *
 * To run a query within a React component, call `useGetCafe24ProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCafe24ProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCafe24ProductQuery({
 *   variables: {
 *      productNo: // value for 'productNo'
 *   },
 * });
 */
export function useGetCafe24ProductQuery(baseOptions: Apollo.QueryHookOptions<GetCafe24ProductQuery, GetCafe24ProductQueryVariables> & ({ variables: GetCafe24ProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>(GetCafe24ProductDocument, options);
      }
export function useGetCafe24ProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>(GetCafe24ProductDocument, options);
        }
// @ts-ignore
export function useGetCafe24ProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>): Apollo.UseSuspenseQueryResult<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>;
export function useGetCafe24ProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>): Apollo.UseSuspenseQueryResult<GetCafe24ProductQuery | undefined, GetCafe24ProductQueryVariables>;
export function useGetCafe24ProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>(GetCafe24ProductDocument, options);
        }
export type GetCafe24ProductQueryHookResult = ReturnType<typeof useGetCafe24ProductQuery>;
export type GetCafe24ProductLazyQueryHookResult = ReturnType<typeof useGetCafe24ProductLazyQuery>;
export type GetCafe24ProductSuspenseQueryHookResult = ReturnType<typeof useGetCafe24ProductSuspenseQuery>;
export type GetCafe24ProductQueryResult = Apollo.QueryResult<GetCafe24ProductQuery, GetCafe24ProductQueryVariables>;
export const GetPinsDocument = gql`
    query GetPins($connectingImageUrl: String!) {
  pins(connectingImageUrl: $connectingImageUrl) {
    ...PinFields
  }
}
    ${PinFieldsFragmentDoc}`;

/**
 * __useGetPinsQuery__
 *
 * To run a query within a React component, call `useGetPinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPinsQuery({
 *   variables: {
 *      connectingImageUrl: // value for 'connectingImageUrl'
 *   },
 * });
 */
export function useGetPinsQuery(baseOptions: Apollo.QueryHookOptions<GetPinsQuery, GetPinsQueryVariables> & ({ variables: GetPinsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPinsQuery, GetPinsQueryVariables>(GetPinsDocument, options);
      }
export function useGetPinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPinsQuery, GetPinsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPinsQuery, GetPinsQueryVariables>(GetPinsDocument, options);
        }
// @ts-ignore
export function useGetPinsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPinsQuery, GetPinsQueryVariables>): Apollo.UseSuspenseQueryResult<GetPinsQuery, GetPinsQueryVariables>;
export function useGetPinsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPinsQuery, GetPinsQueryVariables>): Apollo.UseSuspenseQueryResult<GetPinsQuery | undefined, GetPinsQueryVariables>;
export function useGetPinsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPinsQuery, GetPinsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPinsQuery, GetPinsQueryVariables>(GetPinsDocument, options);
        }
export type GetPinsQueryHookResult = ReturnType<typeof useGetPinsQuery>;
export type GetPinsLazyQueryHookResult = ReturnType<typeof useGetPinsLazyQuery>;
export type GetPinsSuspenseQueryHookResult = ReturnType<typeof useGetPinsSuspenseQuery>;
export type GetPinsQueryResult = Apollo.QueryResult<GetPinsQuery, GetPinsQueryVariables>;
export const CreatePinDocument = gql`
    mutation CreatePin($input: CreatePinInput!) {
  createPin(input: $input) {
    ...PinFields
  }
}
    ${PinFieldsFragmentDoc}`;
export type CreatePinMutationFn = Apollo.MutationFunction<CreatePinMutation, CreatePinMutationVariables>;

/**
 * __useCreatePinMutation__
 *
 * To run a mutation, you first call `useCreatePinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPinMutation, { data, loading, error }] = useCreatePinMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePinMutation(baseOptions?: Apollo.MutationHookOptions<CreatePinMutation, CreatePinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePinMutation, CreatePinMutationVariables>(CreatePinDocument, options);
      }
export type CreatePinMutationHookResult = ReturnType<typeof useCreatePinMutation>;
export type CreatePinMutationResult = Apollo.MutationResult<CreatePinMutation>;
export type CreatePinMutationOptions = Apollo.BaseMutationOptions<CreatePinMutation, CreatePinMutationVariables>;
export const UpdatePinDocument = gql`
    mutation UpdatePin($input: UpdatePinInput!) {
  updatePin(input: $input) {
    ...PinFields
  }
}
    ${PinFieldsFragmentDoc}`;
export type UpdatePinMutationFn = Apollo.MutationFunction<UpdatePinMutation, UpdatePinMutationVariables>;

/**
 * __useUpdatePinMutation__
 *
 * To run a mutation, you first call `useUpdatePinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePinMutation, { data, loading, error }] = useUpdatePinMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePinMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePinMutation, UpdatePinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePinMutation, UpdatePinMutationVariables>(UpdatePinDocument, options);
      }
export type UpdatePinMutationHookResult = ReturnType<typeof useUpdatePinMutation>;
export type UpdatePinMutationResult = Apollo.MutationResult<UpdatePinMutation>;
export type UpdatePinMutationOptions = Apollo.BaseMutationOptions<UpdatePinMutation, UpdatePinMutationVariables>;
export const DeletePinDocument = gql`
    mutation DeletePin($pinId: ID!) {
  deletePin(pinId: $pinId)
}
    `;
export type DeletePinMutationFn = Apollo.MutationFunction<DeletePinMutation, DeletePinMutationVariables>;

/**
 * __useDeletePinMutation__
 *
 * To run a mutation, you first call `useDeletePinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePinMutation, { data, loading, error }] = useDeletePinMutation({
 *   variables: {
 *      pinId: // value for 'pinId'
 *   },
 * });
 */
export function useDeletePinMutation(baseOptions?: Apollo.MutationHookOptions<DeletePinMutation, DeletePinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePinMutation, DeletePinMutationVariables>(DeletePinDocument, options);
      }
export type DeletePinMutationHookResult = ReturnType<typeof useDeletePinMutation>;
export type DeletePinMutationResult = Apollo.MutationResult<DeletePinMutation>;
export type DeletePinMutationOptions = Apollo.BaseMutationOptions<DeletePinMutation, DeletePinMutationVariables>;
export const UpsertPinsDocument = gql`
    mutation UpsertPins($input: UpsertPinsGraphQLInput!) {
  upsertPins(input: $input) {
    ...PinFields
  }
}
    ${PinFieldsFragmentDoc}`;
export type UpsertPinsMutationFn = Apollo.MutationFunction<UpsertPinsMutation, UpsertPinsMutationVariables>;

/**
 * __useUpsertPinsMutation__
 *
 * To run a mutation, you first call `useUpsertPinsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPinsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPinsMutation, { data, loading, error }] = useUpsertPinsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertPinsMutation(baseOptions?: Apollo.MutationHookOptions<UpsertPinsMutation, UpsertPinsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertPinsMutation, UpsertPinsMutationVariables>(UpsertPinsDocument, options);
      }
export type UpsertPinsMutationHookResult = ReturnType<typeof useUpsertPinsMutation>;
export type UpsertPinsMutationResult = Apollo.MutationResult<UpsertPinsMutation>;
export type UpsertPinsMutationOptions = Apollo.BaseMutationOptions<UpsertPinsMutation, UpsertPinsMutationVariables>;
export const GetFileUploadDocument = gql`
    query GetFileUpload($data: FileUploadInput!) {
  fileUpload(data: $data) {
    uploadUrl
    fileUrl
  }
}
    `;

/**
 * __useGetFileUploadQuery__
 *
 * To run a query within a React component, call `useGetFileUploadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileUploadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileUploadQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetFileUploadQuery(baseOptions: Apollo.QueryHookOptions<GetFileUploadQuery, GetFileUploadQueryVariables> & ({ variables: GetFileUploadQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFileUploadQuery, GetFileUploadQueryVariables>(GetFileUploadDocument, options);
      }
export function useGetFileUploadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFileUploadQuery, GetFileUploadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFileUploadQuery, GetFileUploadQueryVariables>(GetFileUploadDocument, options);
        }
// @ts-ignore
export function useGetFileUploadSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFileUploadQuery, GetFileUploadQueryVariables>): Apollo.UseSuspenseQueryResult<GetFileUploadQuery, GetFileUploadQueryVariables>;
export function useGetFileUploadSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFileUploadQuery, GetFileUploadQueryVariables>): Apollo.UseSuspenseQueryResult<GetFileUploadQuery | undefined, GetFileUploadQueryVariables>;
export function useGetFileUploadSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFileUploadQuery, GetFileUploadQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFileUploadQuery, GetFileUploadQueryVariables>(GetFileUploadDocument, options);
        }
export type GetFileUploadQueryHookResult = ReturnType<typeof useGetFileUploadQuery>;
export type GetFileUploadLazyQueryHookResult = ReturnType<typeof useGetFileUploadLazyQuery>;
export type GetFileUploadSuspenseQueryHookResult = ReturnType<typeof useGetFileUploadSuspenseQuery>;
export type GetFileUploadQueryResult = Apollo.QueryResult<GetFileUploadQuery, GetFileUploadQueryVariables>;