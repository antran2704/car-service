import { v4 as uuidv4 } from "uuid";

import { IFeedbackItem } from "../interfaces";

export const feedbackItems: IFeedbackItem[] = [
  {
    id: uuidv4(),
    title: "Anh Hùng",
    subtitle: "Chủ xe Mazda 3",
    description:
      "Xe tôi bị ố kính lâu ngày, chạy mưa đêm rất khó chịu. May nhờ Châu 47 xử lý, kính sáng trong như mới, nhìn rõ ràng, lái an toàn hơn hẳn. Rất hài lòng!",
    avatar: "/images/feedback/customer_2.png",
  },
  {
    id: uuidv4(),
    title: "Chị Lan",
    subtitle: "Chủ xe Honda CR-V",
    description:
      "Dịch vụ ở đây chuyên nghiệp, nhân viên nhiệt tình, làm nhanh mà cẩn thận. Giá cả hợp lý, xứng đáng với chất lượng. Tôi sẽ giới thiệu cho bạn bè.",
    avatar: "/images/feedback/customer_1.png",
  },
  {
    id: uuidv4(),
    title: "Anh Nam",
    subtitle: "Chủ xe Ford Ranger",
    description:
      "Ấn tượng nhất là thái độ phục vụ. Nhân viên giải thích kỹ càng, cho xem từng bước xử lý. Làm xong thấy rõ sự khác biệt. Quá yên tâm.",
    avatar: "/images/feedback/customer_4.png",
  },
  {
    id: uuidv4(),
    title: "Chị Hạnh",
    subtitle: "Chủ xe Kia Seltos",
    description:
      "Không chỉ làm kính sạch, trong, mà còn hướng dẫn mình cách chăm sóc để hạn chế ố lại. Rất tận tâm và chuyên nghiệp.",
    avatar: "/images/feedback/customer_3.png",
  },
];
