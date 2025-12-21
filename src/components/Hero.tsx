import Logo from "@/components/Logo";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-dashed border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-dashed border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-dashed border-white rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          옷 이미지 위에 핀을 올려 상세 정보를 보여주는 스마트한 쇼핑 경험
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            콘솔 시작하기
          </Link>
          <Link
            href="/demo"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-colors backdrop-blur-sm border border-white/30"
          >
            데모 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
