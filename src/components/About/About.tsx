"use client";

import { HeaderContent } from "../Core/Typography";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";
import { WrapSection } from "../Core/Section";

export const About = () => {
  const { ref } = useScrollActiveNavbar({ path: "#about" });

  return (
    <WrapSection id="about" ref={ref} className="container">
      <HeaderContent border title="Giới thiệu" />

      <div className="flex lg:flex-row flex-col items-center justify-between pt-5 gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-2">
          <p className="md:text-lg text-base">
            Tại <strong>Châu 47</strong>, chúng tôi hiểu rằng kính xe không chỉ
            ảnh hưởng đến thẩm mỹ mà còn quyết định trực tiếp đến tầm nhìn và sự
            an toàn khi lái xe. Vì vậy, dịch vụ tẩy ố – đánh bóng kính được ra
            đời với mục tiêu mang lại cho khách hàng trải nghiệm kính trong –
            lái xe an toàn – xe đẹp như mới.
          </p>
          <p className="md:text-lg text-base">
            Châu 47 tại <strong>Buôn Ma Thuột</strong>, giúp khách hàng tại khu
            vực <strong>Tây Nguyên</strong> dễ dàng tiếp cận dịch vụ chăm sóc và
            làm đẹp xe chất lượng cao.
          </p>
          <p className="md:text-lg text-base">
            Với đội ngũ kỹ thuật viên giàu kinh nghiệm, trang thiết bị hiện đại
            cùng dung dịch chuyên dụng an toàn cho bề mặt kính, chúng tôi cam
            kết:
          </p>
          <ul className="w-full flex flex-col list-disc gap-2">
            <li className="flex items-start lg:text-lg text-base">
              ✨ Loại bỏ hiệu quả các vết ố, mờ, cặn nước lâu ngày.
            </li>
            <li className="flex items-start lg:text-lg text-base">
              🔒 Giữ bề mặt kính an toàn, không gây trầy xước hay hư hại.
            </li>
            <li className="flex items-start lg:text-lg text-base">
              ⏱️ Quy trình nhanh chóng, tiết kiệm thời gian.
            </li>
            <li className="flex items-start lg:text-lg text-base">
              💰 Giá cả hợp lý, minh bạch và xứng đáng với chất lượng.
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            className="w-full aspect-square lg:max-h-[600px] md:max-h-[500px] max-h-[400px] object-center rounded-md"
            src="/images/about.png"
            width={100}
            height={100}
            alt="Châu 47"
            title="Châu 47"
            loading="lazy"
          />
        </div>
      </div>
    </WrapSection>
  );
};
