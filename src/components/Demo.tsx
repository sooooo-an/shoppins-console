"use client";

import { useState } from "react";
import { Pin, X } from "lucide-react";
import Image from "next/image";
import LandingLayout from "@/layouts/LandingLayout";

interface PinData {
  id: number;
  x: number;
  y: number;
  product: {
    name: string;
    price: string;
    material: string;
  };
}

const Demo = () => {
  const [pins, setPins] = useState<PinData[]>([
    {
      id: 1,
      x: 35,
      y: 40,
      product: {
        name: "베이직 크루넥 티셔츠",
        price: "$49.99",
        material: "Cotton Blend",
      },
    },
    {
      id: 2,
      x: 65,
      y: 60,
      product: {
        name: "스트레이트 데님 팬츠",
        price: "$89.99",
        material: "100% Cotton",
      },
    },
  ]);
  const [activePin, setActivePin] = useState<number | null>(1);
  return (
    <LandingLayout
      badge="실제 작동 방식"
      title="핀을 클릭하여 상품 정보를 확인해보세요"
      description="핀을 클릭하여 상품 정보를 확인해보세요"
      className="bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] bg-teal-50">
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1759229874914-c1ffdb3ebd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2NTgwMjc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fashion lookbook"
              className="w-full h-full object-cover"
            />

            {/* Decorative dashed circles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-dashed border-white/40 rounded-full" />
              <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border-2 border-dashed border-white/40 rounded-full" />
            </div>

            {/* Pins */}
            {pins.map((pin) => (
              <div key={pin.id}>
                {/* Pin button */}
                <button
                  onClick={() =>
                    setActivePin(activePin === pin.id ? null : pin.id)
                  }
                  className="absolute group"
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
                      className={`relative bg-pink-400 p-2 rounded-full shadow-lg transition-all ${
                        activePin === pin.id
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <Pin className="w-5 h-5 text-white" fill="currentColor" />
                    </div>
                  </div>
                </button>

                {/* Info popup */}
                {activePin === pin.id && (
                  <div
                    className="absolute z-10 animate-in fade-in zoom-in duration-200"
                    style={{
                      left: `${pin.x}%`,
                      top: `${pin.y}%`,
                      transform:
                        pin.y > 50
                          ? "translate(-50%, calc(-100% - 50px))"
                          : "translate(-50%, 50px)",
                    }}
                  >
                    <div className="bg-pink-50 border-2 border-pink-400 rounded-3xl p-5 shadow-xl min-w-[280px]">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1">
                            {pin.product.name}
                          </div>
                          <div className="text-pink-600">
                            {pin.product.price}
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePin(null);
                          }}
                          className="text-gray-400 hover:text-gray-600 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-gray-600 text-sm mb-4">
                        Material: {pin.product.material}
                      </div>
                      <button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full transition-colors">
                        View Details →
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
                              borderTop: "10px solid #fda4af",
                            }
                          : {
                              top: "-10px",
                              borderLeft: "10px solid transparent",
                              borderRight: "10px solid transparent",
                              borderBottom: "10px solid #fda4af",
                            }),
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-teal-50 to-pink-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-pink-400 p-2 rounded-xl">
                  <Pin className="w-4 h-4 text-white" fill="currentColor" />
                </div>
                <span className="text-gray-700">인터랙티브 쇼핑 경험</span>
              </div>
              <span className="text-gray-500 text-sm">
                {pins.length}개의 상품 핀
              </span>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Demo;
