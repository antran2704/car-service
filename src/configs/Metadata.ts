import { Metadata } from "next";

export const defaultMetaData: Metadata = {
  title: "Châu 47 Tẩy Ố, Đánh Kính Xe Ô Tô Buôn Ma Thuột",
  description:
    "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.",
  icons: "/images/logo.png",
  openGraph: {
    title: "Châu 47 Tẩy Ố, Đánh Kính Xe Ô Tô Buôn Ma Thuột",
    description:
      "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.",
    images: "/images/logo.png",
    type: "website",
    locale: "vi_VN",
    url: "https://antrandev.id.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Châu 47 Tẩy Ố, Đánh Kính Xe Ô Tô Buôn Ma Thuột",
    description:
      "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.",
    images: "/images/logo.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  alternates: {
    canonical: "https://antrandev.id.vn",
  },
};
