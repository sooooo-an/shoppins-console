import LandingLayout from "@/layouts/LandingLayout";
import { Sparkles, Check } from "lucide-react";

const Pricing = () => {
  return (
    <LandingLayout
      badge="요금제"
      title="비즈니스 규모에 맞는 플랜을 선택하세요"
      description="비즈니스 규모에 맞는 플랜을 선택하세요"
      className="bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden transition-all hover:scale-105 ${
                plan.popular ? "ring-2 ring-pink-400" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-2 px-4 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">인기</span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl text-gray-900">
                      {plan.price === "0" ? "무료" : `₩${plan.price}`}
                    </span>
                    {plan.price !== "0" && (
                      <span className="text-gray-600">/{plan.period}</span>
                    )}
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-full transition-colors mb-8 ${
                    plan.color === "pink"
                      ? "bg-pink-400 hover:bg-pink-500 text-white"
                      : plan.color === "teal"
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LandingLayout>
  );
};

export default Pricing;

const plans = [
  {
    name: "무료",
    price: "0",
    period: "영구 무료",
    description: "개인 프로젝트나 테스트에 적합",
    features: ["핀 5개 제한", "이미지 1개", "기본 핀 스타일", "커뮤니티 지원"],
    cta: "시작하기",
    color: "gray",
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
    ],
    cta: "시작하기",
    color: "teal",
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
      "고급 분석 도구",
    ],
    cta: "시작하기",
    color: "pink",
    popular: true,
  },
];
