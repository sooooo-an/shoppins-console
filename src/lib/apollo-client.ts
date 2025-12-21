import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";

const httpLink = createHttpLink({
  uri:
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:3000/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  // 클라이언트에서 access token을 가져오는 로직 (예: localStorage, cookies 등)
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 3000,
    jitter: true,
  },
  attempts: {
    max: 2,
    retryIf: async (error) => {
      // 인증 에러인지 체크
      const hasAuthError = error.result?.errors?.some(
        (err: unknown) =>
          (err as { extensions?: { code?: string } }).extensions?.code ===
            "UNAUTHENTICATED" ||
          (err as { extensions?: { code?: string } }).extensions?.code ===
            "UNAUTHORIZED"
      );

      if (hasAuthError) {
        try {
          // 토큰 갱신
          const res = await fetch("/api/auth/refresh", {
            method: "POST",
            credentials: "include",
          });

          if (!res.ok) throw new Error("Refresh failed");

          const { accessToken, expiresAt } = await res.json();

          localStorage.setItem("access_token", accessToken);
          if (expiresAt) {
            localStorage.setItem("token_expires_at", expiresAt);
          }

          window.dispatchEvent(
            new CustomEvent("token-refreshed", {
              detail: { accessToken, expiresAt },
            })
          );

          return true; // 재시도
        } catch {
          localStorage.removeItem("access_token");
          localStorage.removeItem("token_expires_at");
          window.location.href = "/auth/signin";
          return false;
        }
      }

      return false; // 재시도 안 함
    },
  },
});

export const apolloClient = new ApolloClient({
  link: from([retryLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cafe24ProductsConnection: {
            keyArgs: ["filter"],
            merge(existing, incoming) {
              if (!existing) {
                return incoming;
              }
              return {
                ...incoming,
                edges: [...existing.edges, ...incoming.edges],
              };
            },
          },
        },
      },
    },
  }),
});

export const graphqlRequest = async <T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> => {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors[0]?.message || "GraphQL Error");
  }

  return data;
};
