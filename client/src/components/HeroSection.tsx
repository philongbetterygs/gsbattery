import { Button } from "@/components/ui/button";
import { Phone, Zap } from "lucide-react";

/**
 * Design Philosophy: Modern Emergency Service Hero
 * - Bold, high-contrast design with neon-inspired elements
 * - Dark blue background with orange accents for urgency
 * - Large, readable typography for quick scanning
 * - Clear call-to-action for emergency contact
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#003366] via-[#0052A3] to-[#003366]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8C00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8C00] rounded-full blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FF8C00]/30">
              <Zap className="w-4 h-4 text-[#FF8C00]" />
              <span className="text-sm font-semibold text-[#FF8C00]">Dịch vụ 24/7 - Cứu hộ tận nơi</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ắc Quy Phi Long
              <span className="block text-[#FF8C00] mt-2">Cứu Hộ Hỏa Tốc</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed max-w-md">
              Với phương châm <span className="font-semibold text-white">"An toàn - Nhanh chóng - Có mặt tận nơi liền"</span>, chúng tôi là đơn vị hàng đầu cung cấp dịch vụ cứu hộ và thay thế ắc quy tại Đà Nẵng.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Gọi Ngay: 0984 727 274
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg"
            >
              Xem Dịch Vụ
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-[#FF8C00]">6.8K+</div>
              <p className="text-sm text-gray-300">Khách hàng tin tưởng</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF8C00]">24/7</div>
              <p className="text-sm text-gray-300">Hỗ trợ không ngừng</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF8C00]">15+</div>
              <p className="text-sm text-gray-300">Năm kinh nghiệm</p>
            </div>
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="relative h-96 lg:h-full min-h-96">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663374889958/f5cHkBSMwsaFteba9x99bJ/hero-banner-QETCmHiFBycgJCGzg7xok5.webp"
            alt="Battery Rescue Service"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}
