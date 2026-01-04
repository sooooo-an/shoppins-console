import { useState } from "react";
import { X, Plus, Pin, Eye, Trash2, Save, Loader2 } from "lucide-react";
import { PinSettings } from "./PinSettings";
import { PreviewModal } from "./PreviewModal";
import {
  useGetPinsQuery,
  useUpsertPinsMutation,
  Pin as PinType,
  PinType as PinTypeEnum,
} from "@/apollo/generated/apollo-generated-graphql";
import ModalPortal from "./ModalPortal";

interface PinEditorModalProps {
  imageUrl: string;
  onClose: () => void;
  onSave?: () => void;
}

export function PinEditorModal({
  imageUrl,
  onClose,
  onSave,
}: PinEditorModalProps) {
  const [pins, setPins] = useState<PinType[]>([]);
  const [selectedPin, setSelectedPin] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [pinSettings, setPinSettings] = useState({
    color: "#f472b6",
    size: "medium" as "small" | "medium" | "large",
    activeMode: "click" as "click" | "hover",
  });

  useGetPinsQuery({
    variables: {
      connectingImageUrl: imageUrl,
    },
    onCompleted: (data) => {
      setPins(data.pins);
    },
  });

  const [upsertPinsMutation, { loading: saving }] = useUpsertPinsMutation();

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width; // 0-1 사이 값
    const yRatio = (e.clientY - rect.top) / rect.height; // 0-1 사이 값

    const newPin: Partial<PinType> & {
      id: string;
      xRatio: number;
      yRatio: number;
      type: PinTypeEnum;
      color: string;
      size: number;
      connectingImageUrl: string;
      mallId: string;
      createdAt: Date;
      updatedAt: Date;
    } = {
      __typename: "Pin",
      id: Date.now().toString(),
      xRatio,
      yRatio,
      type: PinTypeEnum.Basic,
      color: pinSettings.color,
      size:
        pinSettings.size === "small"
          ? 1
          : pinSettings.size === "medium"
          ? 2
          : 3,
      comment: "여기에 설명을 입력하세요",
      connectingImageUrl: imageUrl,
      mallId: "", // TODO: 실제 mallId 가져오기
      createdAt: new Date() as unknown as PinType["createdAt"],
      updatedAt: new Date() as unknown as PinType["updatedAt"],
    };

    setPins([...pins, newPin as PinType]);
    setSelectedPin(newPin.id);
  };

  const handleDeletePin = (id: string) => {
    setPins(pins.filter((pin) => pin.id !== id));
    if (selectedPin === id) {
      setSelectedPin(null);
    }
  };

  const handleUpdatePin = (id: string, updates: Partial<PinType>) => {
    setPins(pins.map((pin) => (pin.id === id ? { ...pin, ...updates } : pin)));
  };

  const handleSave = async () => {
    try {
      await upsertPinsMutation({
        variables: {
          input: {
            connectingImageUrl: imageUrl,
            pins: pins.map((pin) => ({
              xRatio: pin.xRatio,
              yRatio: pin.yRatio,
              comment: pin.comment,
              linkUrl: pin.linkUrl,
              title: pin.title,
              type: pin.type,
            })),
            productNo: 0,
          },
        },
      });
      onSave?.();
    } catch (error) {
      console.error("Failed to save pins:", error);
    }
  };

  const selectedPinData = pins.find((pin) => pin.id === selectedPin);

  return (
    <>
      <ModalPortal onClose={onClose}>
        <div
          className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-gray-900">핀 에디터</h2>
              <p className="text-sm text-gray-600">
                이미지를 클릭하여 핀을 추가하세요 ({pins.length}개)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPreview(true)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                미리보기
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed text-white rounded-xl transition-colors flex items-center gap-2"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                저장
              </button>
              <button
                onClick={onClose}
                className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid lg:grid-cols-3 gap-6 p-6">
              {/* Left: Image Editor */}
              <div className="lg:col-span-2 space-y-4">
                <PinSettings settings={pinSettings} onChange={setPinSettings} />

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <div
                    className="relative aspect-square bg-white rounded-xl overflow-hidden cursor-crosshair"
                    onClick={handleImageClick}
                  >
                    <img
                      src={imageUrl}
                      alt="Product"
                      className="w-full h-full object-cover"
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
                          left: `${pin.xRatio * 100}%`, // 0-1을 0-100%로 변환
                          top: `${pin.yRatio * 100}%`, // 0-1을 0-100%로 변환
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
                            } ${
                              pin.size === 1
                                ? "w-4 h-4 p-1.5"
                                : pin.size === 2
                                ? "w-5 h-5 p-2"
                                : "w-6 h-6 p-2.5"
                            }`}
                            style={{
                              backgroundColor: pin.color || pinSettings.color,
                            }}
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

                    {/* Comment */}
                    <div className="mb-4">
                      <label className="block text-sm text-gray-700 mb-2">
                        코멘트
                      </label>
                      <textarea
                        value={selectedPinData.comment || ""}
                        onChange={(e) =>
                          handleUpdatePin(selectedPinData.id, {
                            comment: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        rows={4}
                        placeholder="핀에 대한 설명을 입력하세요"
                      />
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                      <label className="block text-sm text-gray-700 mb-2">
                        제목
                      </label>
                      <input
                        type="text"
                        value={selectedPinData.title || ""}
                        onChange={(e) =>
                          handleUpdatePin(selectedPinData.id, {
                            title: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        placeholder="핀 제목"
                      />
                    </div>

                    {/* Link URL */}
                    <div className="mb-4">
                      <label className="block text-sm text-gray-700 mb-2">
                        링크 URL
                      </label>
                      <input
                        type="url"
                        value={selectedPinData.linkUrl || ""}
                        onChange={(e) =>
                          handleUpdatePin(selectedPinData.id, {
                            linkUrl: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                        placeholder="https://..."
                      />
                    </div>
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
          </div>
        </div>
      </ModalPortal>

      {showPreview && (
        <PreviewModal
          imageUrl={imageUrl}
          pins={pins}
          settings={pinSettings}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}
