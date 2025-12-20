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
  productNo?: InputMaybe<Scalars['String']['input']>;
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
  productNo?: Maybe<Scalars['String']['output']>;
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
  /** 수정일 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GetCafe24AuthenticationUrlQueryVariables = Exact<{
  mallId: Scalars['String']['input'];
}>;


export type GetCafe24AuthenticationUrlQuery = { __typename?: 'Query', cafe24AuthenticationUrl: string };


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