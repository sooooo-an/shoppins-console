'use client';

import { useState } from 'react';
import { useGetCafe24AuthenticationUrlQuery } from '@/generated/graphql';

/**
 * GraphQL 쿼리 with 변수 사용 예시
 * 
 * 사용 방법:
 * 1. src/queries/get-cafe24-auth-url.graphql 파일 확인
 * 2. pnpm run codegen 실행
 * 3. variables로 mallId 전달
 */
export default function Cafe24AuthPage() {
  const [mallId, setMallId] = useState('');
  const [getUrl, { data, loading, error }] = useGetCafe24AuthenticationUrlQuery({
    // skip: true를 사용하면 자동 실행 안 함
    skip: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mallId.trim()) {
      getUrl({ variables: { mallId: mallId.trim() } });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cafe24 인증</h1>
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label htmlFor="mallId" className="block text-sm font-medium mb-2">
            Mall ID
          </label>
          <input
            id="mallId"
            type="text"
            value={mallId}
            onChange={(e) => setMallId(e.target.value)}
            placeholder="mall-id를 입력하세요"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !mallId.trim()}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? '로딩 중...' : '인증 URL 가져오기'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">에러 발생</h3>
          <p className="text-red-600 dark:text-red-300">{error.message}</p>
        </div>
      )}

      {data?.cafe24AuthenticationUrl && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
            인증 URL이 생성되었습니다!
          </h3>
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">URL:</p>
            <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded break-all">
              {data.cafe24AuthenticationUrl}
            </code>
          </div>
          <a
            href={data.cafe24AuthenticationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            인증 페이지로 이동 →
          </a>
        </div>
      )}
    </div>
  );
}

