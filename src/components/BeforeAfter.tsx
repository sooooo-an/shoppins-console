"use client";

import { useState } from "react";
import { Pin, ArrowRight } from "lucide-react";
import Image from "next/image";
import LandingLayout from "@/layouts/LandingLayout";

const pins = [
  {
    id: 1,
    x: 30,
    y: 35,
    product: {
      name: "버건디 니트 가디건",
      price: "₩89,000",
      material: "Wool Blend",
    },
  },
  {
    id: 2,
    x: 45,
    y: 60,
    product: {
      name: "베이지 와이드 팬츠",
      price: "₩69,000",
      material: "Cotton",
    },
  },
  {
    id: 3,
    x: 70,
    y: 45,
    product: {
      name: "크로스백 - 카키",
      price: "₩45,000",
      material: "Vegan Leather",
    },
  },
];

const BeforeAfter = () => {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <LandingLayout
      badge="Before → After"
      title="전통적인 상품 나열 방식에서 직관적인 핀 방식으로"
      description="전통적인 상품 나열 방식에서 직관적인 핀 방식으로"
      className="bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          {/* BEFORE */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm">
                Before
              </div>
              <span className="text-gray-700">전통적인 방식</span>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
              {/* Before Image - Slightly modified for copyright */}
              <div className="relative aspect-[3/4] bg-white overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2NjgwMjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Before - Traditional Layout"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "brightness(0.98) contrast(1.02) saturate(0.95)",
                  }}
                  width={1000}
                  height={1000}
                />
                {/* Subtle overlay for copyright modification */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-sm">문제점</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 이미지와 상품 정보가 분리되어 있음</li>
                  <li>• 고객이 스크롤을 많이 해야 함</li>
                  <li>• 룩북 이미지와 연관성이 명확하지 않음</li>
                  <li>• 페이지 길이가 늘어남</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow - Desktop only */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-teal-600 p-4 rounded-full shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center -my-6">
            <div className="bg-teal-600 p-3 rounded-full shadow-lg rotate-90">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* AFTER */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Pin className="w-4 h-4" fill="currentColor" />
                After
              </div>
              <span className="text-gray-700">Shoppins 방식</span>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-pink-400">
              <div className="relative aspect-[3/4] bg-white overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2NjgwMjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="After - With Interactive Pins"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "brightness(1.02) contrast(1.05) saturate(1.05)",
                  }}
                  width={1000}
                  height={1000}
                />

                {/* Subtle enhancement overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />

                {/* Pins */}
                {pins.map((pin) => (
                  <div key={pin.id}>
                    {/* Pin button */}
                    <button
                      onClick={() =>
                        setActivePin(activePin === pin.id ? null : pin.id)
                      }
                      className="absolute group z-20"
                      style={{
                        left: `${pin.x}%`,
                        top: `${pin.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="relative">
                        {/* Pulse animation */}
                        <div
                          className={`absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-75 ${
                            activePin === pin.id ? "opacity-100" : ""
                          }`}
                        />

                        {/* Pin icon */}
                        <div
                          className={`relative bg-pink-400 p-2.5 rounded-full shadow-lg transition-all ${
                            activePin === pin.id
                              ? "scale-110"
                              : "group-hover:scale-110"
                          }`}
                        >
                          <Pin
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </button>

                    {/* Info popup */}
                    {activePin === pin.id && (
                      <div
                        className="absolute z-30 animate-in fade-in zoom-in duration-200"
                        style={{
                          left: `${pin.x}%`,
                          top: `${pin.y}%`,
                          transform:
                            pin.y > 50
                              ? "translate(-50%, calc(-100% - 50px))"
                              : "translate(-50%, 50px)",
                        }}
                      >
                        <div className="bg-white border-2 border-pink-400 rounded-2xl p-4 shadow-xl min-w-[240px]">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="text-gray-900 mb-1 text-sm">
                                {pin.product.name}
                              </div>
                              <div className="text-pink-600">
                                {pin.product.price}
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-600 text-xs mb-3">
                            {pin.product.material}
                          </div>
                          <button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full transition-colors text-sm">
                            상세보기 →
                          </button>
                        </div>

                        {/* Arrow */}
                        <div
                          className="absolute left-1/2 w-0 h-0"
                          style={{
                            transform: "translateX(-50%)",
                            ...(pin.y > 50
                              ? {
                                  bottom: "-10px",
                                  borderLeft: "10px solid transparent",
                                  borderRight: "10px solid transparent",
                                  borderTop: "10px solid #f472b6",
                                }
                              : {
                                  top: "-10px",
                                  borderLeft: "10px solid transparent",
                                  borderRight: "10px solid transparent",
                                  borderBottom: "10px solid #f472b6",
                                }),
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-700 mb-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-sm">장점</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 이미지 위에 직접 상품 정보 표시</li>
                  <li>• 한눈에 전체 룩북과 상품 확인 가능</li>
                  <li>• 더 나은 사용자 경험 제공</li>
                  <li>• 페이지 간결화 및 전환율 향상</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default BeforeAfter;
