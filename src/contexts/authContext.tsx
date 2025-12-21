"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  GetMeDocument,
  type GetMeQuery,
} from "@/apollo/generated/apollo-generated-graphql";
import { useRouter } from "next/navigation";
import { apolloClient } from "@/lib/apollo-client";

type User = GetMeQuery["me"];

type AuthContextType = {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;

  setAccessToken: (accessToken: string) => void;
  refreshUser: () => void;
  login: (accessToken: string, expiresAt?: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [accessToken, setAccessTokenState] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const setAccessToken = useCallback((token: string | null) => {
    if (token) {
      localStorage.setItem("access_token", token);
      setAccessTokenState(token);
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("token_expires_at");
      setAccessTokenState(null);
      setUser(null);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout API failed:", error);
    } finally {
      setAccessToken(null);
      router.push("/login");
    }
  }, [router, setAccessToken]);

  const login = useCallback(
    async (token: string, expiresAt?: string) => {
      try {
        localStorage.setItem("access_token", token);
        if (expiresAt) {
          localStorage.setItem("token_expires_at", expiresAt);
        }
        setAccessTokenState(token);
        await fetchUser(token);

        return Promise.resolve();
      } catch (error) {
        setAccessToken(null);
        return Promise.reject(error);
      }
    },
    [setAccessToken]
  );

  const fetchUser = async (token?: string) => {
    try {
      const { data } = await apolloClient.query({
        query: GetMeDocument,
        context: {
          headers: {
            authorization: `Bearer ${token || accessToken}`,
          },
        },
        fetchPolicy: "network-only",
      });

      setUser(data.me);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      await logout();
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("access_token");

      if (token) {
        setAccessTokenState(token);
        await fetchUser(token);
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const refreshUser = useCallback(async () => {
    if (!accessToken) return;
    await fetchUser();
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isAuthenticated: !!accessToken && !!user,
        isLoading,
        setAccessToken,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
