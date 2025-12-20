import LandingLayout from "@/layouts/LandingLayout";
import { MousePointer, ShoppingBag, Sparkles, Zap } from "lucide-react";

const Features = () => {
  return (
    <LandingLayout
      badge="Features"
      title="주요 기능"
      description="Shoppins으로 고객에게 더 나은 쇼핑 경험을 제공하세요"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div
                className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </LandingLayout>
  );
};

export default Features;

const features = [
  {
    icon: MousePointer,
    title: "간편한 핀 설정",
    description: "상품 이미지 위 원하는 위치에 클릭만으로 핀을 추가하세요",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: ShoppingBag,
    title: "상세 정보 표시",
    description: "가격, 소재, 사이즈 등 상품 정보를 핀 위에 깔끔하게 표시",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Sparkles,
    title: "플랫 디자인",
    description: "모던하고 깔끔한 일러스트 스타일로 브랜드 이미지 향상",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Zap,
    title: "쉬운 설치",
    description: "카페24 스토어에 몇 번의 클릭만으로 바로 적용",
    color: "bg-amber-100 text-amber-600",
  },
];
