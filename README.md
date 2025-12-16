# Shoppins Console

Next.js 16 + GraphQL CodeGen 프로젝트

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 GraphQL 엔드포인트를 설정하세요:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
```

### 3. GraphQL CodeGen 실행

GraphQL 스키마를 기반으로 타입과 훅을 생성합니다:

```bash
pnpm run codegen
```

생성된 파일은 `src/generated/graphql.ts`에 저장됩니다.

### 4. 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## GraphQL 쿼리 사용 예시

1. `src/queries/` 디렉토리에 GraphQL 쿼리 파일을 생성하세요 (예: `get-me.graphql`)

2. CodeGen을 실행하여 타입과 훅을 생성합니다:

```bash
pnpm run codegen
```

3. 컴포넌트에서 생성된 훅을 사용합니다:

```tsx
'use client';

import { useGetMeQuery } from '@/generated/graphql';

export default function ProfilePage() {
  const { data, loading, error } = useGetMeQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User ID: {data?.me.id}</h1>
      <p>Created: {data?.me.createdAt}</p>
    </div>
  );
}
```

## 인증

GraphQL API는 Bearer token 인증을 사용합니다. Access token은 `localStorage`에 저장되며, Apollo Client가 자동으로 헤더에 추가합니다.

## 프로젝트 구조

```
shoppins-console/
├── src/
│   ├── app/              # Next.js App Router
│   ├── lib/              # 유틸리티 및 설정
│   │   └── apollo-client.ts
│   ├── providers/        # React Provider 컴포넌트
│   │   └── apollo-provider.tsx
│   ├── queries/          # GraphQL 쿼리 파일
│   └── generated/        # CodeGen으로 생성된 파일
├── codegen.ts            # GraphQL CodeGen 설정
└── package.json
```

## GraphQL API 정보

- 엔드포인트: `http://localhost:3000/graphql`
- 인증: Bearer token (Authorization 헤더)
- 스키마 위치: `../api.shoppin.com/src/interface/graphql/schema.gql`
