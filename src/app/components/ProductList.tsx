import { useState } from "react";
import { Pin, Settings } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  pinsCount: number;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "베이직 크루넥 티셔츠",
    price: "49,000원",
    imageUrl:
      "https://images.unsplash.com/photo-1688111421202-bda886f5e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdHNoaXJ0JTIwd2hpdGV8ZW58MXx8fHwxNzY1ODA1NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    pinsCount: 3,
  },
  {
    id: "2",
    name: "스트레이트 데님 팬츠",
    price: "89,000원",
    imageUrl:
      "https://images.unsplash.com/photo-1609831190577-04538764f438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwYmx1ZXxlbnwxfHx8fDE3NjU4NjEyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    pinsCount: 2,
  },
  {
    id: "3",
    name: "화이트 스니커즈",
    price: "129,000원",
    imageUrl:
      "https://images.unsplash.com/photo-1651371409956-20e79c06a8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwd2hpdGV8ZW58MXx8fHwxNzY1ODYxMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    pinsCount: 0,
  },
];

interface ProductListProps {
  onEditProduct: (id: string) => void;
}

export function ProductList({ onEditProduct }: ProductListProps) {
  const [products] = useState<Product[]>(mockProducts);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-gray-900">상품 목록</h2>
        <p className="text-sm text-gray-600 mt-1">
          상품 이미지에 핀을 설정하여 상세 정보를 표시하세요
        </p>
      </div>

      {/* Product Grid */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Pin count badge */}
                {product.pinsCount > 0 && (
                  <div className="absolute top-3 right-3 bg-pink-400 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm shadow-lg">
                    <Pin className="w-3.5 h-3.5" fill="currentColor" />
                    <span>{product.pinsCount}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-gray-900 mb-1">{product.name}</h3>
                <p className="text-pink-600 mb-4">{product.price}</p>

                <button
                  onClick={() => onEditProduct(product.id)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>핀 설정</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
