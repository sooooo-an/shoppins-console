import { useState } from "react";
import { ArrowLeft, Plus, Pin, Eye, Trash2, Save } from "lucide-react";
import Image from "next/image";
import { PinSettings } from "./PinSettings";
import { PreviewModal } from "./PreviewModal";

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

interface PinEditorProps {
  productId: string;
  onBack: () => void;
}

const productImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1688111421202-bda886f5e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdHNoaXJ0JTIwd2hpdGV8ZW58MXx8fHwxNzY1ODA1NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "2": "https://images.unsplash.com/photo-1609831190577-04538764f438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwYmx1ZXxlbnwxfHx8fDE3NjU4NjEyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "3": "https://images.unsplash.com/photo-1651371409956-20e79c06a8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwd2hpdGV8ZW58MXx8fHwxNzY1ODYxMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

export function PinEditor({ productId, onBack }: PinEditorProps) {
  const [pins, setPins] = useState<PinData[]>([]);
  const [selectedPin, setSelectedPin] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [pinSettings, setPinSettings] = useState({
    color: "#f472b6",
    size: "medium" as "small" | "medium" | "large",
    activeMode: "click" as "click" | "hover",
  });

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newPin: PinData = {
      id: Date.now().toString(),
      x,
      y,
      type: "comment",
      content: {
        comment: "여기에 설명을 입력하세요",
      },
    };

    setPins([...pins, newPin]);
    setSelectedPin(newPin.id);
  };

  const handleDeletePin = (id: string) => {
    setPins(pins.filter((pin) => pin.id !== id));
    if (selectedPin === id) {
      setSelectedPin(null);
    }
  };

  const handleUpdatePin = (id: string, updates: Partial<PinData>) => {
    setPins(pins.map((pin) => (pin.id === id ? { ...pin, ...updates } : pin)));
  };

  const selectedPinData = pins.find((pin) => pin.id === selectedPin);

  const pinSizeMap = {
    small: "w-4 h-4 p-1.5",
    medium: "w-5 h-5 p-2",
    large: "w-6 h-6 p-2.5",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-gray-900">핀 에디터</h2>
            <p className="text-sm text-gray-600">
              이미지를 클릭하여 핀을 추가하세요 ({pins.length}개)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPreview(true)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            미리보기
          </button>
          <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            저장
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {/* Left: Image Editor */}
        <div className="lg:col-span-2 space-y-4">
          <PinSettings settings={pinSettings} onChange={setPinSettings} />

          <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <div
              className="relative aspect-square bg-white rounded-xl overflow-hidden cursor-crosshair"
              onClick={handleImageClick}
            >
              <Image
                src={productImages[productId] || productImages["1"]}
                alt="Product"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />

              {/* Pins */}
              {pins.map((pin) => (
                <button
                  key={pin.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPin(pin.id);
                  }}
                  className="absolute group"
                  style={{
                    left: `${pin.x}%`,
                    top: `${pin.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    {selectedPin === pin.id && (
                      <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-75" />
                    )}
                    <div
                      className={`relative rounded-full shadow-lg transition-all ${
                        selectedPin === pin.id
                          ? "scale-110"
                          : "group-hover:scale-110"
                      } ${pinSizeMap[pinSettings.size]}`}
                      style={{ backgroundColor: pinSettings.color }}
                    >
                      <Pin className="text-white" fill="currentColor" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <Plus className="w-4 h-4" />
              <span>이미지를 클릭하여 핀 추가</span>
            </div>
          </div>
        </div>

        {/* Right: Pin Details */}
        <div className="space-y-4">
          {selectedPinData ? (
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900">핀 설정</h3>
                <button
                  onClick={() => handleDeletePin(selectedPinData.id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Pin Type */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  핀 유형
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() =>
                      handleUpdatePin(selectedPinData.id, {
                        type: "comment",
                        content: { comment: "여기에 설명을 입력하세요" },
                      })
                    }
                    className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                      selectedPinData.type === "comment"
                        ? "bg-teal-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    코멘트
                  </button>
                  <button
                    onClick={() =>
                      handleUpdatePin(selectedPinData.id, {
                        type: "product",
                        content: { productName: "", productUrl: "" },
                      })
                    }
                    className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                      selectedPinData.type === "product"
                        ? "bg-teal-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    연관 상품
                  </button>
                </div>
              </div>

              {/* Content */}
              {selectedPinData.type === "comment" ? (
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    코멘트
                  </label>
                  <textarea
                    value={selectedPinData.content.comment || ""}
                    onChange={(e) =>
                      handleUpdatePin(selectedPinData.id, {
                        content: { comment: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    rows={4}
                    placeholder="핀에 대한 설명을 입력하세요"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      상품명
                    </label>
                    <input
                      type="text"
                      value={selectedPinData.content.productName || ""}
                      onChange={(e) =>
                        handleUpdatePin(selectedPinData.id, {
                          content: {
                            ...selectedPinData.content,
                            productName: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                      placeholder="연관 상품명"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      상품 URL
                    </label>
                    <input
                      type="url"
                      value={selectedPinData.content.productUrl || ""}
                      onChange={(e) =>
                        handleUpdatePin(selectedPinData.id, {
                          content: {
                            ...selectedPinData.content,
                            productUrl: e.target.value,
                          },
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
              <Pin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 text-sm">
                핀을 선택하거나
                <br />
                이미지를 클릭하여 새 핀을 추가하세요
              </p>
            </div>
          )}
        </div>
      </div>

      {showPreview && (
        <PreviewModal
          imageUrl={productImages[productId] || productImages["1"]}
          pins={pins}
          settings={pinSettings}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}
