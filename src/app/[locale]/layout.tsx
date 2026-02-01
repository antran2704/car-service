import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";

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
import clsx from "clsx";

export const metadata: Metadata = defaultMetaData;
export const viewport: Viewport = defaultViewport;

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

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
        <meta
          name="google-site-verification"
          content="Pr-EDGBjjT2ukF8NsH_cGtND_7kJo0bHny_YQjVuPR8"
        />
      </head>
      <body
        id="body"
        className={clsx(
          "min-h-screen w-full relative bg-white",
          spaceGrotesk.className,
        )}
      >
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
        {/* Your Content/Components */}
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
