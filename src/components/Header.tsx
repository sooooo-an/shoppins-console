"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { useAuth } from "@/contexts/authContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo size="medium" color="black" />
        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link href="/console">콘솔로 바로가기</Link>
              <Link
                href="/auth/signin"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                카페24 로그인
              </Link>
            </>
          ) : (
            <>
              <Link href="/products">내 상품</Link>
              <Link href="/settings">설정</Link>
              <button onClick={logout}>로그아웃</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
