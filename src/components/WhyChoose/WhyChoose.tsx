"use client";

import { CiCircleCheck } from "react-icons/ci";

import { HeaderContent } from "../Core/Typography";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";
import { WrapSection } from "../Core/Section";

export const WhyChoose = () => {
  const { ref } = useScrollActiveNavbar({ path: "#why" });

  return (
    <WrapSection id="why" ref={ref} className="container">
      <HeaderContent border title="Tại sao lựa chọn chúng tôi" />

      <div className="flex md:flex-row flex-col items-center justify-between pt-5 gap-10">
        <ul className="md:w-1/2 w-full flex flex-col list-disc gap-5">
          <li className="flex items-start lg:text-lg text-base gap-5">
            <CiCircleCheck className="min-w-6 size-6" />
            <p>
              <strong>Kinh nghiệm & tay nghề cao</strong>: Đội ngũ kỹ thuật viên
              nhiều năm kinh nghiệm, am hiểu các dòng xe và sử dụng phương pháp
              đánh kính chuyên nghiệp.
            </p>
          </li>
          <li className="flex items-start lg:text-lg text-base gap-5">
            <CiCircleCheck className="min-w-6 size-6" />
            <p>
              <strong>Công nghệ & dung dịch chuyên dụng</strong>: Sử dụng máy
              móc, dung dịch an toàn cho bề mặt kính, không gây trầy xước, giúp
              kính sáng trong lâu dài.
            </p>
          </li>
          <li className="flex items-start lg:text-lg text-base gap-5">
            <CiCircleCheck className="min-w-6 size-6" />
            <p>
              <strong>Chất lượng cam kết</strong>: Loại bỏ hiệu quả các vết ố,
              mờ, cặn nước, trả lại tầm nhìn rõ ràng và tăng tính thẩm mỹ cho
              xe.
            </p>
          </li>
          <li className="flex items-start md:text-lg text-base gap-5">
            <CiCircleCheck className="min-w-6 size-6" />
            <p>
              <strong>Dịch vụ tận tâm</strong>: Quy trình làm việc minh bạch,
              chăm sóc khách hàng chu đáo, tư vấn giải pháp phù hợp cho từng
              tình trạng kính.
            </p>
          </li>
          <li className="flex items-start lg:text-lg text-base gap-5">
            <CiCircleCheck className="min-w-6 size-6" />
            <p>
              <strong>Giá cả hợp lý</strong>: Cạnh tranh so với thị trường, đi
              kèm chất lượng dịch vụ xứng đáng.
            </p>
          </li>
        </ul>

        <div className="md:w-1/2 w-full">
          <img
            className="w-full object-contain object-center rounded-md"
            src="/images/why_choose.webp"
            width={100}
            height={100}
            alt="whyChoose"
            title="why choose"
            loading="lazy"
          />
        </div>
      </div>
    </WrapSection>
  );
};
