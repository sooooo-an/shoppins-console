"use client";

import Image from "next/image";
import PinIcon from "./PinIcon";
import LandingLayout from "@/layouts/LandingLayout";

const showcaseImages = [
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1656504450814-398cf348c038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBvdXRmaXR8ZW58MXx8fHwxNzY2MDIxNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    pins: [
      { x: 40, y: 35 },
      { x: 55, y: 60 },
    ],
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1650092058245-659227057eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbG9va2Jvb2slMjBzdHlsZXxlbnwxfHx8fDE3NjU5Nzk0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pins: [
      { x: 38, y: 40 },
      { x: 62, y: 55 },
    ],
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1622021211530-7d31fd86862d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNhc3VhbCUyMHdlYXJ8ZW58MXx8fHwxNzY1OTY3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    pins: [
      { x: 42, y: 32 },
      { x: 58, y: 58 },
    ],
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1653875842174-429c1b467548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcG9ydHJhaXQlMjBtaW5pbWFsfGVufDF8fHx8MTc2NTk1NjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    pins: [
      { x: 36, y: 38 },
      { x: 64, y: 52 },
    ],
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1562055268-5a0a241bdfa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBjbG90aGluZyUyMG1vZGVsfGVufDF8fHx8MTc2NjAzMDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    pins: [
      { x: 45, y: 42 },
      { x: 55, y: 65 },
    ],
  },
];

const PinShowcase = () => {
  const duplicatedImages = [...showcaseImages, ...showcaseImages];

  return (
    <LandingLayout
      title="룩북에 생동감을 더하세요"
      description="상품 이미지 위 핀으로 고객의 시선을 사로잡으세요"
      className="bg-gradient-to-b from-white to-teal-50"
    >
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll will-change-transform">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-[400px] h-[500px] relative group"
            >
              <div className="relative h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={image.url}
                  alt={`Fashion lookbook ${image.id}`}
                  className="w-full h-full object-cover"
                  width={400}
                  height={500}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {image.pins.map((pin, pinIndex) => (
                  <div
                    key={pinIndex}
                    className="absolute"
                    style={{
                      left: `${pin.x}%`,
                      top: `${pin.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <PinIcon />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal-50 to-transparent pointer-events-none z-10" />
      </div>
    </LandingLayout>
  );
};

export default PinShowcase;
