"use client";
import { useState } from "react";
import { Package, Settings, Code, CreditCard } from "lucide-react";
import { ProductList } from "../components/ProductList";
import { PinEditor } from "../components/PinEditor";
import { ScriptInstall } from "../components/ScriptInstall";
import { PricingConsole } from "../components/PricingConsole";

type Tab = "products" | "script" | "pricing";

const ConsolePage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("products");
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const tabs = [
    { id: "products" as Tab, label: "상품 관리", icon: Package },
    { id: "script" as Tab, label: "스크립트 적용", icon: Code },
    { id: "pricing" as Tab, label: "요금제", icon: CreditCard },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setEditingProductId(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 transition-colors ${
                activeTab === tab.id
                  ? "bg-teal-50 text-teal-700 border-b-2 border-teal-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {editingProductId ? (
        <PinEditor
          productId={editingProductId}
          onBack={() => setEditingProductId(null)}
        />
      ) : (
        <>
          {activeTab === "products" && (
            <ProductList onEditProduct={setEditingProductId} />
          )}
          {activeTab === "script" && <ScriptInstall />}
          {activeTab === "pricing" && <PricingConsole />}
        </>
      )}
    </div>
  );
};

export default ConsolePage;
