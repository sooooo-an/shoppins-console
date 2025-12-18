import Logo from "@/components/Logo";
import { Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="large" />
            </div>
            <p className="text-teal-100 text-sm">
              카페24 스토어를 위한 스마트한 상품 정보 표시 솔루션
            </p>
          </div>

          <div>
            <h3 className="mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-teal-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  기능 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  가격 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  설치 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  고객 지원
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">문의하기</h3>
            <ul className="space-y-3 text-teal-100 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@sshoppin.app</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>www.sshoppin.app</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-600 pt-8 text-center text-teal-200 text-sm">
          <p>© 2024 SShopPin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
