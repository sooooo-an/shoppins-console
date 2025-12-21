import { Suspense } from "react";
import AuthCallbackClient from "@/components/AuthCallbackClient";
import { redirect } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { access_token, expires_at } = searchParams;
  if (!access_token || !expires_at) {
    redirect("/signin?message=invalid_auth");
  }

  return (
    <Suspense fallback={<div>로그인 중...</div>}>
      <AuthCallbackClient accessToken={access_token} expiresAt={expires_at} />
    </Suspense>
  );
}
