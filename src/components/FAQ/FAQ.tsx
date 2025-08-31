"use client";

import { Accordion } from "@mantine/core";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";
import { WrapSection } from "../Core/Section";
import { HeaderContent } from "../Core/Typography";

const groceries = [
  {
    value: "Xe bị ố kính lâu năm có xử lý được không?",
    description:
      "Có. Châu 47 sử dụng dung dịch và máy móc chuyên dụng, loại bỏ được hầu hết các vết ố, cặn nước, vết mờ lâu ngày",
  },
  {
    value: "Tẩy ố, đánh bóng kính có làm trầy hay mỏng kính không?",
    description:
      "Không. Quy trình được thực hiện bằng công nghệ chuyên nghiệp, đảm bảo an toàn cho bề mặt kính.",
  },
  {
    value: "Thời gian thực hiện dịch vụ mất bao lâu?",
    description:
      "Thông thường từ 1–2 giờ, tùy mức độ ố bẩn và tình trạng kính xe.",
  },
  {
    value: "Sau khi đánh kính thì hiệu quả giữ được bao lâu?",
    description:
      "Kính xe sẽ trong sáng lâu dài, đặc biệt nếu được chăm sóc đúng cách. Chúng tôi sẽ hướng dẫn cách vệ sinh và bảo quản để hạn chế bị ố lại.",
  },
  {
    value: "Chi phí dịch vụ là bao nhiêu?",
    description:
      "Giá cả cạnh tranh, tùy loại xe và tình trạng kính. Châu 47 luôn báo giá rõ ràng trước khi làm.",
  },
  {
    value: "Tôi có cần đặt lịch trước không?",
    description:
      "Đặt lịch trước sẽ giúp tiết kiệm thời gian và được phục vụ nhanh hơn.",
  },
];

export const FAQ = () => {
  const { ref } = useScrollActiveNavbar({ path: "#faq" });

  return (
    <WrapSection id="faq" ref={ref} className="container">
      <HeaderContent border title="Những câu hỏi thường gặp" />

      <div className="py-10">
        <Accordion variant="separated" radius="lg">
          {groceries.map((item) => (
            <Accordion.Item
              key={item.value}
              value={item.value}
              className="bg-white shadow-sm">
              <Accordion.Control className="text-lg font-bold">
                {item.value}
              </Accordion.Control>
              <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </WrapSection>
  );
};
