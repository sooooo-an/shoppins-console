"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Lock, ShoppingBag, Loader2, AlertCircle } from "lucide-react";
import { useGetCafe24AuthenticationUrlLazyQuery } from "@/apollo/generated/apollo-generated-graphql";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Signin = () => {
  const searchParams = useSearchParams();
  const [mallId, setMallId] = useState("");
  const [getAuthUrl, { loading, data, error }] =
    useGetCafe24AuthenticationUrlLazyQuery();

  const message = searchParams.get("message");
  const isInvalidAuth = message === "invalid_auth";
  const [showInvalidAuth, setShowInvalidAuth] = useState(isInvalidAuth);

  useEffect(() => {
    if (!isInvalidAuth) return;

    const timer = setTimeout(() => {
      setShowInvalidAuth(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isInvalidAuth]);

  useEffect(() => {
    if (data?.cafe24AuthenticationUrl) {
      window.location.href = data.cafe24AuthenticationUrl;
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error("인증 URL 가져오기 실패:", error);
      alert("인증 URL을 가져오는데 실패했습니다. 다시 시도해주세요.");
    }
  }, [error]);

  const handleLogin = () => {
    if (!mallId.trim()) {
      alert("Mall ID를 입력해주세요.");
      return;
    }
    getAuthUrl({ variables: { mallId: mallId.trim() } });
  };

  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full space-y-4">
        {/* Alert for invalid_auth */}
        {showInvalidAuth && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>인증 실패</AlertTitle>
            <AlertDescription>
              인증에 실패했습니다. 다시 시도해주세요.
            </AlertDescription>
          </Alert>
        )}

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-4">
              <ShoppingBag className="w-8 h-8 text-teal-600" />
            </div>
            <h2 className="text-gray-900 mb-2">카페24 스토어 연결</h2>
            <p className="text-gray-600 text-sm">
              Shoppins을 사용하려면 카페24 계정으로 로그인하세요
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="mallId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mall ID
              </label>
              <input
                id="mallId"
                type="text"
                value={mallId}
                onChange={(e) => setMallId(e.target.value)}
                placeholder="mall-id를 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                disabled={loading}
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading || !mallId.trim()}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>로딩 중...</span>
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>Cafe24로 로그인</span>
                </>
              )}
            </button>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                로그인하시면 Shoppins의 서비스 약관 및<br />
                개인정보 처리방침에 동의하는 것으로 간주됩니다
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-start gap-3 text-sm">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-600">
                카페24 OAuth 인증을 통해 안전하게 연결됩니다
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm mt-2">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-600">
                상품 정보에 대한 읽기 권한만 요청합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
