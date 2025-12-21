"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

type Props = {
  accessToken: string;
  expiresAt: string;
};

function AuthCallbackClient({ accessToken, expiresAt }: Props) {
  const router = useRouter();
  const { login } = useAuth();

  login(accessToken, expiresAt ?? undefined)
    .then(() => {
      router.replace("/console");
    })
    .catch(() => {
      router.replace("/signin?message=invalid_auth");
    });

  return null;
}

export default AuthCallbackClient;
