import { Check, ChevronDown, ChevronUp, Code, Copy, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/authContext";

const Cafe24ScriptBanner = () => {
  const [scriptBannerOpen, setScriptBannerOpen] = useState(true);
  const [scriptExpanded, setScriptExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const user = useAuth();

  const handleCopyScript = () => {
    navigator.clipboard.writeText(
      document.getElementById("script-code")?.textContent || ""
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {scriptBannerOpen && (
        <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-2xl border-2 border-teal-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600 p-3 rounded-xl flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">
                    스크립트를 추가해주세요
                  </h3>
                  <p className="text-sm text-gray-600">
                    카페24 쇼핑몰의 &lt;head&gt; 태그 안에 아래 스크립트를
                    추가하여 SShopPin을 활성화하세요
                  </p>
                </div>
              </div>
              <button
                onClick={() => setScriptBannerOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Code className="w-4 h-4" />
                  <span>설치 스크립트</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setScriptExpanded(!scriptExpanded)}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm"
                  >
                    {scriptExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        접기
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        펼치기
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleCopyScript}
                    className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        복사됨!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        복사하기
                      </>
                    )}
                  </button>
                </div>
              </div>

              {scriptExpanded && (
                <div className="p-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code id="script-code">{`<!-- ShopPins Script -->
                            <shoppins mallId="${user.user?.mallId}"></shoppins>
                            <script src="https://cdn.shop-pins.com/shop-pins.min.js"></script>`}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
              <p>
                <span className="text-gray-900">설치 방법:</span> 카페24 관리자
                &gt; 쇼핑몰 설정 &gt; 기본 설정 &gt; HTML 추가설정에서
                &lt;head&gt; 태그 영역에 스크립트를 추가하세요
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cafe24ScriptBanner;
