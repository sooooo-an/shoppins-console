"use client";

import { GetCafe24ProductsConnectionQuery } from "@/apollo/generated/apollo-generated-graphql";
import { PinEditorModal } from "./PinEditorModal";
import { useState } from "react";

interface ProductListProps {
  products: GetCafe24ProductsConnectionQuery["cafe24ProductsConnection"]["edges"];
}

const ProductList = ({ products }: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<
    | GetCafe24ProductsConnectionQuery["cafe24ProductsConnection"]["edges"][0]["node"]
    | null
  >(null);

  const onSelected = (
    product: GetCafe24ProductsConnectionQuery["cafe24ProductsConnection"]["edges"][0]["node"]
  ) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {products.map((product) => (
            <button
              key={product.node.productNo}
              onClick={() => onSelected(product.node)}
              className="w-full px-6 py-4 hover:bg-gray-50 transition-colors flex items-center gap-4 text-left"
            >
              {/* Product Image */}
              <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.node.listImageUrl || ""}
                  alt={product.node.productName}
                  className="w-full h-full object-cover"
                />
                {/* {product.node.pinsCount > 0 && (
                <div className="absolute top-1 right-1 bg-pink-400 text-white px-1.5 py-0.5 rounded-full flex items-center gap-0.5 text-xs">
                  <Pin className="w-2.5 h-2.5" fill="currentColor" />
                  <span>{product.node.pinsCount}</span>
                </div>
              )} */}
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-gray-900 truncate">
                    {product.node.productName}
                  </h3>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                    {product.node.productCode}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{product.node.price}</p>
              </div>

              {/* Pin Status */}
              {/* <div className="flex-shrink-0">
              {product.node.pinsCount > 0 ? (
                <div className="text-teal-600 text-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />핀 설정됨
                </div>
              ) : (
                <div className="text-gray-400 text-sm">핀 없음</div>
              )}
            </div> */}

              {/* Arrow */}
              <div className="flex-shrink-0 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedProduct && selectedProduct.listImageUrl && (
        <PinEditorModal
          imageUrl={selectedProduct.detailImageUrl || selectedProduct.listImageUrl}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductList;
