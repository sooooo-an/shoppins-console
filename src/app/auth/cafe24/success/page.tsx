"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

export default function Cafe24SuccessPage() {
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);

    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");
    const expiresAt = params.get("expires_at");

    if (!accessToken || !refreshToken) {
      router.push("/auth/signin?message=invalid_auth");
      return;
    }

    const handleAuth = async () => {
      try {
        const res = await fetch("/api/auth/set-refresh-token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ refreshToken, expiresAt }),
        });

        if (!res.ok) throw new Error("Failed to set refresh token");

        await login(accessToken, expiresAt || undefined);

        router.replace("/");
      } catch (error) {
        console.error("Auth failed:", error);
        router.push("/auth/signin?message=auth_failed");
      }
    };

    handleAuth();
  }, [router, login]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">로그인 처리 중...</h1>
        <p className="text-gray-600">잠시만 기다려주세요.</p>
      </div>
    </div>
  );
}
