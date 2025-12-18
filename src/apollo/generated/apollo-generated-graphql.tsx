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
  /** Refresh token을 폐기해 로그아웃 합니다. */
  logout: Scalars['Boolean']['output'];
  /** refresh token을 통해 새로운 access token을 발급합니다. */
  refreshAccessToken: LoginSuccess;
};


export type MutationLogoutArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Cafe24 OAuth 인증을 시작하기 위한 Authorization URL을 반환한다. */
  cafe24AuthenticationUrl: Scalars['String']['output'];
  /** 파일 업로드를 위한 업로드 URL과 파일 URL을 발급합니다. */
  fileUpload: Upload;
  /** 사용자 */
  me: User;
};


export type QueryCafe24AuthenticationUrlArgs = {
  mallId: Scalars['String']['input'];
};


export type QueryFileUploadArgs = {
  data: FileUploadInput;
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