import { Lock, ShoppingBag } from "lucide-react";

const SignInPage = () => {
  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
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
            <button className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Lock className="w-5 h-5" />
              <span>Cafe24로 로그인</span>
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

export default SignInPage;
