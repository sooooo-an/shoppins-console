import Signin from "@/components/Signin";
import { Suspense } from "react";

const SigninPage = ({
  searchParams,
}: {
  searchParams: { message?: string };
}) => {
  const { message } = searchParams;
  return (
    <Suspense>
      <Signin message={message} />
    </Suspense>
  );
};

export default SigninPage;
