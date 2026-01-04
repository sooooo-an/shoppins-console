import Signin from "@/components/Signin";
import { Suspense } from "react";

const SigninPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) => {
  const { message } = await searchParams;
  return (
    <Suspense>
      <Signin message={message} />
    </Suspense>
  );
};

export default SigninPage;
