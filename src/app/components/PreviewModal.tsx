import { useState } from "react";
import { X, Pin, ExternalLink } from "lucide-react";
import Image from "next/image";

interface PinData {
  id: string;
  x: number;
  y: number;
  type: "comment" | "product";
  content: {
    comment?: string;
    productName?: string;
    productUrl?: string;
  };
}

interface PreviewModalProps {
  imageUrl: string;
  pins: PinData[];
  settings: {
    color: string;
    size: "small" | "medium" | "large";
    activeMode: "click" | "hover";
  };
  onClose: () => void;
}

export function PreviewModal({
  imageUrl,
  pins,
  settings,
  onClose,
}: PreviewModalProps) {
  const [activePin, setActivePin] = useState<string | null>(null);

  const pinSizeMap = {
    small: "w-4 h-4 p-1.5",
    medium: "w-5 h-5 p-2",
    large: "w-6 h-6 p-2.5",
  };

  const handlePinInteraction = (pinId: string) => {
    if (settings.activeMode === "click") {
      setActivePin(activePin === pinId ? null : pinId);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-gray-900">미리보기</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-73px)]">
          <div className="relative aspect-square max-w-3xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt="Preview"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />

            {/* Pins */}
            {pins.map((pin) => (
              <div key={pin.id}>
                {/* Pin button */}
                <button
                  onClick={() => handlePinInteraction(pin.id)}
                  onMouseEnter={() => {
                    if (settings.activeMode === "hover") {
                      setActivePin(pin.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (settings.activeMode === "hover") {
                      setActivePin(null);
                    }
                  }}
                  className="absolute group"
                  style={{
                    left: `${pin.x}%`,
                    top: `${pin.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    {activePin === pin.id && (
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-75"
                        style={{ backgroundColor: settings.color }}
                      />
                    )}
                    <div
                      className={`relative rounded-full shadow-lg transition-all ${
                        activePin === pin.id
                          ? "scale-110"
                          : "group-hover:scale-110"
                      } ${pinSizeMap[settings.size]}`}
                      style={{ backgroundColor: settings.color }}
                    >
                      <Pin className="text-white" fill="currentColor" />
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
                    <div
                      className="rounded-2xl p-4 shadow-xl min-w-[250px] border-2"
                      style={{
                        backgroundColor: `${settings.color}20`,
                        borderColor: settings.color,
                      }}
                    >
                      {pin.type === "comment" ? (
                        <p className="text-gray-900 text-sm">
                          {pin.content.comment}
                        </p>
                      ) : (
                        <div>
                          <div className="text-gray-900 mb-2">
                            {pin.content.productName || "상품명"}
                          </div>
                          {pin.content.productUrl && (
                            <a
                              href={pin.content.productUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm hover:underline"
                              style={{ color: settings.color }}
                            >
                              상세보기
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      )}
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
                              borderTop: `10px solid ${settings.color}`,
                            }
                          : {
                              top: "-10px",
                              borderLeft: "10px solid transparent",
                              borderRight: "10px solid transparent",
                              borderBottom: `10px solid ${settings.color}`,
                            }),
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600">
              {settings.activeMode === "click"
                ? "핀을 클릭"
                : "핀에 마우스를 올려"}
              하여 정보를 확인하세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
