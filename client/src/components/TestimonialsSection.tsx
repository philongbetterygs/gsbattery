import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

/**
 * Design Philosophy: Social Proof Section
 * - Authentic customer testimonials with ratings
 * - Visual hierarchy with star ratings
 * - Subtle background pattern for visual interest
 * - Trust-building through real feedback
 */

const testimonials = [
  {
    name: "Thuong Nguyen",
    role: "Chủ xe Xpander",
    content: "Giá cả rất cạnh tranh, thay bình 45 cho xe Xpander chỉ 1.150k (đổi cũ lấy mới), phục vụ rất nhanh!",
    rating: 5,
  },
  {
    name: "Khách hàng tại Đà Nẵng",
    role: "Người sử dụng dịch vụ",
    content: "Đội ngũ nhiệt tình, có mặt ngay khi gọi cứu hộ, rất an tâm khi sử dụng dịch vụ của Phi Long.",
    rating: 5,
  },
  {
    name: "Anh Minh",
    role: "Chủ xe tải",
    content: "Dịch vụ chuyên nghiệp, kỹ thuật viên giàu kinh nghiệm. Tôi sẽ giới thiệu cho bạn bè của mình.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663374889958/f5cHkBSMwsaFteba9x99bJ/testimonial-bg-oAcaiCaBWf53pxNuwzaYGJ.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FF8C00]/10 px-4 py-2 rounded-full border border-[#FF8C00]/30">
            <span className="text-sm font-semibold text-[#FF8C00]">Bằng Chứng Xã Hội</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">
            Khách Hàng Tin Tưởng Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hơn 6.800 khách hàng đã tin tưởng và sử dụng dịch vụ của Battery Phi Long.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden"
            >
              <CardContent className="p-8 space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#003366]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF8C00]">6.8K+</div>
            <p className="text-gray-600 mt-2">Khách hàng hài lòng</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF8C00]">15+</div>
            <p className="text-gray-600 mt-2">Năm kinh nghiệm</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF8C00]">24/7</div>
            <p className="text-gray-600 mt-2">Hỗ trợ không ngừng</p>
          </div>
        </div>
      </div>
    </section>
  );
}
