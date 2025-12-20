import { useState } from "react";
import { Code, Copy, Check, Zap, FileCode } from "lucide-react";

export function ScriptInstall() {
  const [copiedSSR, setCopiedSSR] = useState(false);
  const [copiedManual, setCopiedManual] = useState(false);

  const ssrScript = `<!-- SShopPin SSR Script -->
<script src="https://cdn.sshoppin.app/v1/sshoppin.js" 
        data-store-id="YOUR_STORE_ID"></script>`;

  const manualScript = `<!-- SShopPin Manual Script -->
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.sshoppin.app/v1/sshoppin.js';
    script.setAttribute('data-store-id', 'YOUR_STORE_ID');
    document.head.appendChild(script);
  })();
</script>`;

  const handleCopy = async (text: string, type: "ssr" | "manual") => {
    await navigator.clipboard.writeText(text);
    if (type === "ssr") {
      setCopiedSSR(true);
      setTimeout(() => setCopiedSSR(false), 2000);
    } else {
      setCopiedManual(true);
      setTimeout(() => setCopiedManual(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-teal-100 p-3 rounded-xl">
            <Code className="w-6 h-6 text-teal-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-gray-900 mb-2">스크립트 적용</h2>
            <p className="text-gray-600 text-sm">
              카페24 스토어에 SShopPin을 설치하는 두 가지 방법을 제공합니다.
              <br />
              아래 방법 중 하나를 선택하여 진행하세요.
            </p>
          </div>
        </div>
      </div>

      {/* SSR Option */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">옵션 1: SSR 자동 설치 (권장)</h3>
                <p className="text-sm text-gray-600 mt-1">
                  서버 사이드에서 자동으로 스크립트가 삽입됩니다
                </p>
              </div>
            </div>
            <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
              권장
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {/* Pros/Cons */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="text-sm text-green-900 mb-2">✓ 장점</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 설치 즉시 모든 페이지 적용</li>
                  <li>• 자동 업데이트 지원</li>
                  <li>• 별도 관리 불필요</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="text-sm text-amber-900 mb-2">! 참고사항</div>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• 트래픽 비용 발생</li>
                  <li>• 월 사용량에 따라 과금</li>
                  <li>• 무료 플랜 제한 있음</li>
                </ul>
              </div>
            </div>

            {/* Script */}
            <div className="bg-gray-900 rounded-xl p-4 relative">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{ssrScript}</code>
              </pre>
              <button
                onClick={() => handleCopy(ssrScript, "ssr")}
                className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                {copiedSSR ? (
                  <>
                    <Check className="w-4 h-4" />
                    복사됨
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    복사
                  </>
                )}
              </button>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-sm text-blue-900 mb-2">📝 설치 방법</div>
              <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
                <li>카페24 관리자 페이지 접속</li>
                <li>쇼핑몰 설정 → 스크립트 관리</li>
                <li>위 코드를 &lt;head&gt; 영역에 붙여넣기</li>
                <li>저장 후 스토어 새로고침</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Option */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <FileCode className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900">옵션 2: 수동 설치</h3>
              <p className="text-sm text-gray-600 mt-1">
                디자인 페이지에서 직접 스크립트를 삽입합니다
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {/* Pros/Cons */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="text-sm text-green-900 mb-2">✓ 장점</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 트래픽 비용 저렴</li>
                  <li>• 원하는 페이지만 선택 적용</li>
                  <li>• 세밀한 제어 가능</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="text-sm text-amber-900 mb-2">! 참고사항</div>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• 페이지마다 수동 삽입 필요</li>
                  <li>• 업데이트 시 재설치 필요</li>
                  <li>• HTML 지식 필요</li>
                </ul>
              </div>
            </div>

            {/* Script */}
            <div className="bg-gray-900 rounded-xl p-4 relative">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{manualScript}</code>
              </pre>
              <button
                onClick={() => handleCopy(manualScript, "manual")}
                className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                {copiedManual ? (
                  <>
                    <Check className="w-4 h-4" />
                    복사됨
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    복사
                  </>
                )}
              </button>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="text-sm text-purple-900 mb-2">📝 설치 방법</div>
              <ol className="text-sm text-purple-700 space-y-2 list-decimal list-inside">
                <li>카페24 관리자 페이지 접속</li>
                <li>디자인 관리 → HTML 편집</li>
                <li>원하는 페이지 템플릿 선택</li>
                <li>위 코드를 &lt;/body&gt; 태그 직전에 붙여넣기</li>
                <li>저장 후 페이지 확인</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Help */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-gray-900 mb-3">💡 도움이 필요하신가요?</h3>
        <p className="text-gray-600 text-sm mb-4">
          설치 중 문제가 발생하거나 질문이 있으시면 언제든지 문의해주세요.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm">
            설치 가이드 보기
          </button>
          <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-colors text-sm">
            고객 지원 문의
          </button>
        </div>
      </div>
    </div>
  );
}
