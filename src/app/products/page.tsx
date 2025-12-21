"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { SearchBar, type SearchFilter } from "@/components/SearchBar";
import { useGetCafe24ProductsConnectionQuery } from "@/apollo/generated/apollo-generated-graphql";
import type { Cafe24ProductsConnectionFilterInput } from "@/apollo/generated/apollo-generated-graphql";
import { NetworkStatus } from "@apollo/client";
import ProductList from "@/components/ProductList";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState<SearchFilter>("productName");
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filter: Cafe24ProductsConnectionFilterInput | undefined = useMemo(
    () =>
      searchQuery
        ? searchFilter === "productName"
          ? { productName: searchQuery }
          : { productCode: searchQuery }
        : undefined,
    [searchQuery, searchFilter]
  );

  const { data, loading, error, refetch, fetchMore, networkStatus } =
    useGetCafe24ProductsConnectionQuery({
      variables: {
        first: 20,
        filter,
      },
      notifyOnNetworkStatusChange: true,
    });

  const isLoadingMore = networkStatus === NetworkStatus.fetchMore;
  const isInitialLoading = loading && !data;

  const handleSearch = (query: string, filter: SearchFilter) => {
    setSearchQuery(query);
    setSearchFilter(filter);
    refetch({
      first: 20,
      filter: query
        ? filter === "productName"
          ? { productName: query }
          : { productCode: query }
        : undefined,
    });
  };

  const pageInfo = data?.cafe24ProductsConnection?.pageInfo;
  const hasNextPage = pageInfo?.hasNextPage ?? false;
  const endCursor = pageInfo?.endCursor;

  // 인피니티 스크롤 구현
  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && endCursor) {
          fetchMore({
            variables: {
              first: 20,
              after: endCursor,
              filter,
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, endCursor, loading, filter, fetchMore]);

  const products = data?.cafe24ProductsConnection?.edges || [];

  return (
    <section className="p-6">
      <section className="mb-6">
        <h3 className="text-2xl font-bold mb-4">상품 관리</h3>
        <SearchBar onSearch={handleSearch} />
      </section>
      <section>
        {isInitialLoading && (
          <div className="text-center py-12 text-gray-500">로딩 중...</div>
        )}
        {error && (
          <div className="text-center py-12 text-red-500">
            에러가 발생했습니다: {error.message}
          </div>
        )}
        {!isInitialLoading && !error && products.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            상품이 없습니다.
          </div>
        )}
        {!isInitialLoading && !error && products.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-gray-900">상품 목록</h2>
              <p className="text-sm text-gray-600 mt-1">
                총 {products.length}개의 상품
              </p>
            </div>

            <div className="p-6">
              <ProductList products={products} />

              {/* 인피니티 스크롤 트리거 */}
              {hasNextPage && (
                <div ref={loadMoreRef} className="py-8 text-center">
                  {isLoadingMore && (
                    <div className="text-gray-500">
                      더 많은 상품을 불러오는 중...
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default ProductsPage;
