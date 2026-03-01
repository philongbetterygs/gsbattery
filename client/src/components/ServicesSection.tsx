import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Clock, CheckCircle, Wrench } from "lucide-react";

/**
 * Design Philosophy: Service Cards Grid
 * - Clean, organized layout with visual hierarchy
 * - Icon-based visual communication for quick understanding
 * - Orange accent for emphasis and visual continuity
 * - Subtle shadows and hover effects for interactivity
 */

const services = [
  {
    icon: Zap,
    title: "Thay Ắc Quy Hỏa Tốc",
    description: "Cung cấp và lắp đặt ắc quy chính hãng (GS, Troy, Yamato) cho ô tô, xe máy điện, xe đạp điện tận nơi với giá tốt nhất.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663374889958/f5cHkBSMwsaFteba9x99bJ/service-card-1-9vNWSWdnAn64JpmBYQQnmF.webp",
  },
  {
    icon: Clock,
    title: "Cứu Hộ 24/7",
    description: "Hỗ trợ kích bình, xử lý sự cố ắc quy bất kể ngày đêm, giúp bạn tiếp tục hành trình nhanh chóng.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663374889958/f5cHkBSMwsaFteba9x99bJ/service-card-2-P5sPykKkK4CfNqGqJ9CrH4.webp",
  },
  {
    icon: CheckCircle,
    title: "Kiểm Tra Miễn Phí",
    description: "Dịch vụ kiểm tra tình trạng bình điện, rò điện và hệ thống sạc (diamo) hoàn toàn miễn phí cho khách hàng.",
    image: null,
  },
  {
    icon: Wrench,
    title: "Bảo Trì & Phục Hồi",
    description: "Phục hồi bình bể, chảy cọc, đổ cọc mới chuyên nghiệp, giúp kéo dài tuổi thọ cho ắc quy của bạn.",
    image: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FF8C00]/10 px-4 py-2 rounded-full border border-[#FF8C00]/30">
            <span className="text-sm font-semibold text-[#FF8C00]">Dịch Vụ Chính</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">
            Giải Pháp Ắc Quy Toàn Diện
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Từ thay thế nhanh chóng đến cứu hộ 24/7, chúng tôi cung cấp mọi dịch vụ mà bạn cần.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden group"
              >
                {/* Image if available */}
                {service.image && (
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#FF8C00]/10 to-[#003366]/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                <CardHeader className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#E67E00] flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <CardTitle className="text-lg font-bold text-[#003366]">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
