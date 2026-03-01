import { MapPin, Phone, Clock } from "lucide-react";

/**
 * Design Philosophy: Footer
 * - Comprehensive contact and business information
 * - Dark background with orange accents
 * - Clear organization of information
 * - Professional and trustworthy appearance
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#003366] to-[#001F3F] text-white">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-bold text-xl">Battery Phi Long</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Dịch vụ cứu hộ và thay thế ắc quy hỏa tốc 24/7 tại Đà Nẵng. Với phương châm "An toàn - Nhanh chóng - Có mặt tận nơi liền", chúng tôi cam kết mang đến sự an tâm cho mọi hành trình của bạn.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#FF8C00]">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Đánh Giá
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#FF8C00]">Thông Tin Liên Hệ</h4>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">856/3 Tôn Đức Thắng</p>
                  <p className="text-gray-300 text-sm">Liên Chiểu, Tp Đà Nẵng</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">0984 727 274</p>
                  <p className="text-gray-300 text-sm">Mr. Long</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-gray-300 text-sm">Cứu hộ không ngừng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Battery Phi Long. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              Điều Khoản Sử Dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
