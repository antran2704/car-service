import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Metadata, Viewport } from "next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@mantine/core/styles.css";
import "~/app/globals.scss";
import "~/app/swiper.scss";

import configThemeMantine from "../../configs/ThemeMantine";
import Navbar from "~/components/Navbar";
import ScrollToTop from "~/components/ScrollToTop";
import { Footer } from "~/components/Footer";
import ActiveNavbar from "~/components/ActiveNavbar";
import { Social } from "~/components/Social/Social";
import { defaultMetaData, defaultViewport } from "~/configs/Metadata";

export const metadata: Metadata = defaultMetaData;
export const viewport: Viewport = defaultViewport;

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>

      <body id="body" className="bg-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider theme={configThemeMantine}>
            <ActiveNavbar>
              <Navbar />
              {children}
              <Social />
              <ScrollToTop />
              <Footer />
            </ActiveNavbar>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
