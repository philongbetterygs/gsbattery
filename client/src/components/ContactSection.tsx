import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

/**
 * Design Philosophy: Contact Section
 * - Clear, organized layout with contact information and form
 * - Visual separation between info and form
 * - Professional form styling with validation feedback
 * - Trust-building through multiple contact methods
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    issue: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.vehicleType || !formData.issue) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Yêu cầu của bạn đã được gửi! Chúng tôi sẽ liên hệ sớm.");
      setFormData({ name: "", phone: "", vehicleType: "", issue: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FF8C00]/10 px-4 py-2 rounded-full border border-[#FF8C00]/30">
            <span className="text-sm font-semibold text-[#FF8C00]">Liên Hệ Ngay</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">
            Gửi Yêu Cầu Cứu Hộ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Điền thông tin dưới đây hoặc gọi trực tiếp để được hỗ trợ ngay lập tức.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="border-0 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Địa Chỉ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">856/3 Tôn Đức Thắng</p>
                <p className="text-gray-600">Liên Chiểu, Tp Đà Nẵng</p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-0 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Hotline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium text-lg">0984 727 274</p>
                <p className="text-gray-600 text-sm">Mr. Long</p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-0 shadow-md bg-white rounded-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Giờ Làm Việc</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">24/7 - Cứu Hộ Không Ngừng</p>
                <p className="text-gray-600 text-sm">Hỗ trợ tận nơi tại Đà Nẵng</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Gửi Yêu Cầu</CardTitle>
                <CardDescription>
                  Điền thông tin để chúng tôi liên hệ và hỗ trợ bạn sớm nhất.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#003366]">Họ Tên</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên của bạn"
                      className="rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#003366]">Số Điện Thoại</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0xxx xxx xxx"
                      className="rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#003366]">Loại Xe</label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00] focus:outline-none"
                    >
                      <option value="">-- Chọn loại xe --</option>
                      <option value="oto">Ô Tô</option>
                      <option value="xemay">Xe Máy Điện</option>
                      <option value="xedap">Xe Đạp Điện</option>
                      <option value="khac">Khác</option>
                    </select>
                  </div>

                  {/* Issue */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#003366]">Vấn Đề Gặp Phải</label>
                    <Textarea
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      placeholder="Mô tả vấn đề của bạn..."
                      className="rounded-lg border-gray-300 focus:border-[#FF8C00] focus:ring-[#FF8C00] resize-none"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF8C00] hover:bg-[#E67E00] text-white font-semibold rounded-lg py-3 transition-all duration-300"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi Yêu Cầu Cứu Hộ"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
