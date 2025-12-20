import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "무료",
    price: "0",
    period: "영구 무료",
    description: "개인 프로젝트나 테스트에 적합",
    features: ["핀 5개 제한", "이미지 1개", "기본 핀 스타일", "커뮤니티 지원"],
    limitations: ["고급 스타일 제한", "SSR 설치 불가"],
    cta: "현재 플랜",
    color: "gray",
    current: true,
  },
  {
    name: "스타터",
    price: "19,000",
    period: "월",
    description: "소규모 쇼핑몰에 최적화",
    features: [
      "핀 무제한",
      "이미지 30개",
      "모든 핀 스타일",
      "우선 지원",
      "SSR 자동 설치",
      "월간 리포트",
    ],
    cta: "시작하기",
    color: "teal",
    popular: false,
  },
  {
    name: "프로",
    price: "39,000",
    period: "월",
    description: "전문 쇼핑몰을 위한 완벽한 솔루션",
    features: [
      "핀 무제한",
      "이미지 무제한",
      "모든 핀 스타일",
      "프리미엄 지원",
      "SSR 자동 설치",
      "주간 리포트",
      "고급 분석 도구",
      "커스텀 브랜딩",
    ],
    cta: "시작하기",
    color: "pink",
    popular: true,
  },
];

export function PricingConsole() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-gray-900 mb-2">요금제</h2>
        <p className="text-gray-600 text-sm">
          비즈니스 규모에 맞는 요금제를 선택하세요. 언제든지 변경 가능합니다.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition-all hover:shadow-md ${
              plan.popular
                ? "border-pink-400 ring-2 ring-pink-200"
                : plan.current
                ? "border-gray-300"
                : "border-gray-200"
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-2 px-4 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">가장 인기있는 플랜</span>
              </div>
            )}

            <div className="p-6">
              {/* Plan name */}
              <h3 className="text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl text-gray-900">
                    {plan.price === "0" ? "무료" : `₩${plan.price}`}
                  </span>
                  {plan.price !== "0" && (
                    <span className="text-gray-600">/{plan.period}</span>
                  )}
                </div>
                {plan.price === "0" && (
                  <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
                )}
              </div>

              {/* CTA Button */}
              <button
                disabled={plan.current}
                className={`w-full py-3 px-4 rounded-xl transition-colors mb-6 ${
                  plan.current
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : plan.color === "pink"
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : plan.color === "teal"
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.color === "pink"
                          ? "bg-pink-100"
                          : plan.color === "teal"
                          ? "bg-teal-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.color === "pink"
                            ? "text-pink-600"
                            : plan.color === "teal"
                            ? "text-teal-600"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}

                {plan.limitations && (
                  <>
                    {plan.limitations.map((limitation, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 opacity-50"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-gray-100">
                          <span className="text-xs text-gray-600">✕</span>
                        </div>
                        <span className="text-sm text-gray-600 line-through">
                          {limitation}
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">자주 묻는 질문</h3>
        <div className="space-y-4">
          <div>
            <div className="text-gray-900 mb-1">
              플랜 변경은 언제든지 가능한가요?
            </div>
            <p className="text-sm text-gray-600">
              네, 언제든지 업그레이드하거나 다운그레이드할 수 있습니다. 변경
              즉시 적용되며, 비용은 일할 계산됩니다.
            </p>
          </div>
          <div>
            <div className="text-gray-900 mb-1">
              무료 플랜으로 시작할 수 있나요?
            </div>
            <p className="text-sm text-gray-600">
              네, 무료 플랜으로 SShopPin의 기본 기능을 체험해보실 수 있습니다.
              필요에 따라 언제든지 유료 플랜으로 전환하실 수 있습니다.
            </p>
          </div>
          <div>
            <div className="text-gray-900 mb-1">환불 정책은 어떻게 되나요?</div>
            <p className="text-sm text-gray-600">
              결제 후 7일 이내 전액 환불이 가능합니다. 그 이후에는 남은 기간에
              대한 일할 환불이 제공됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-teal-50 to-pink-50 rounded-2xl p-6 border border-gray-200">
        <div className="text-center">
          <h3 className="text-gray-900 mb-2">더 많은 기능이 필요하신가요?</h3>
          <p className="text-gray-600 text-sm mb-4">
            엔터프라이즈 플랜에 대해 문의하시면 맞춤형 솔루션을 제공해드립니다.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl transition-colors">
            영업팀에 문의하기
          </button>
        </div>
      </div>
    </div>
  );
}
