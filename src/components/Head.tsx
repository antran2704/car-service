"use client";

import { ColorSchemeScript } from "@mantine/core";
import { usePathname } from "next/navigation";
import NextHead from "next/head";

const titleContent: string = "Châu 47 Tẩy Ố, Đánh Kính Xe Ô Tô Buôn Ma Thuột";
const description: string =
  "Châu 47 chuyên dịch vụ tẩy ố, đánh bóng kính xe ô tô tại Buôn Ma Thuột. Giá hợp lý - Dịch vụ chuyên nghiệp - Khách hàng hài lòng 100%.";

const image: string = "https://antrandev.id.vn/images/imageHeadTag.png";
const urlWebsite: string = "https://antrandev.id.vn";

const Head = () => {
  const pathname = usePathname();

  return (
    <NextHead>
      {/* Primary Meta Tags */}
      <title>{titleContent}</title>
      <link rel="icon" href="/images/logo.png" />
      <meta name="theme-color" content="#0A0A0A" />
      <meta name="color-scheme" content="dark light" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
      <link rel="canonical" href={urlWebsite + pathname} />
      <link rel="shortcut icon" type="image/png" href="/images/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={titleContent} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="fb:app_id" content="1107560184366459" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlWebsite} />
      <meta property="og:title" content={titleContent} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlWebsite} />
      <meta property="twitter:title" content={titleContent} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* google site verification */}
      <meta
        name="google-site-verification"
        content="LbX2O1wn_arb_DSJ-CzEDjeE4eS9sC2wqPNUjs4MdUQ"
      />
      <ColorSchemeScript />
    </NextHead>
  );
};

export default Head;
