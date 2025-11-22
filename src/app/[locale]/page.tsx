import { About } from "~/components/About";
import { FAQ } from "~/components/FAQ";
import { Feedback } from "~/components/Feedback";
import { Hero } from "~/components/Hero";
import { Service } from "~/components/Service";
import { WhyChoose } from "~/components/WhyChoose";

export default function HomePage() {
  return (
    <div>
      <h1 className="opacity-0 fixed top-0">
        Châu 47 - Tẩy ố - Đánh bóng kính - đánh kính xe - danh kinh xe - Hàn
        kính xe - han kinh xe - Tây Nguyên - Đắk Lắk - Dak Lak - dak lak - Buôn
        Ma Thuột - buon ma thuot
      </h1>
      <Hero />
      <About />
      <Service />
      <WhyChoose />
      <Feedback />
      <FAQ />
    </div>
  );
}
