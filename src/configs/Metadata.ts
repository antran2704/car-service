import { Metadata, Viewport } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const defaultMetaData: Metadata = {
  title: "Châu 47 Tẩy Ố, Đánh bóng, Hàn kính xe Ô Tô Buôn Ma Thuột",
  description:
    "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng, hàn kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.",
  icons: "/images/logo.png",
  openGraph: {
    title: "Châu 47 Tẩy Ố, Đánh bóng, Hàn kính xe Ô Tô Buôn Ma Thuột",
    description:
      "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng, hàn kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.",
    images: "/images/logo.png",
    type: "website",
    locale: "vi_VN",
    url: domain,
  },
  twitter: {
    card: "summary_large_image",
    title: "Châu 47 Tẩy Ố, Đánh bóng, Hàn kính xe Ô Tô Buôn Ma Thuột",
    description:
      "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng, hàn kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.",
    images: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: domain ? new URL(domain) : null,
  alternates: {
    canonical: domain,
    languages: {
      "en-US": "/en-US",
    },
  },
  keywords: [
    "chau 47",
    "Châu 47",
    "Đánh bóng kính",
    "Tẩy ố",
    "tay o",
    "đánh kính xe",
    "danh kinh xe",
    "han kinh",
    "hàn kính",
    "Tây Nguyên",
    "tay nguyen",
    "Dak Lak",
    "dak lak",
    "Buôn Ma Thuót",
    "buon ma thuot",
  ],
};

export const defaultViewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
  initialScale: 1,
  width: "device-width",
};
