import "./globals.css";
import CookieConsentProvider from "@/CookieConsent";
import PageTracker from "@/pageTracker";
import Cookie from "@/Cookie";
import { comfortaa, ibmThai, ibmThaiLooped } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const currentLang = resolvedParams?.lang;
  const isEn = currentLang === "en";

  return {
    title: {
      default: isEn
        ? "CO-DE | Coding Academy for Kids"
        : "CO-DE | สอน Coding สำหรับเด็ก",
      template: "%s | CO-DE Academy",
    },

    description: isEn
      ? "CO-DE Academy – Learn coding for kids with fun and creative courses."
      : "CO-DE Academy – เรียนโค้ดดิ้งสำหรับเด็ก ด้วยหลักสูตรสนุกและสร้างสรรค์",

    alternates: {
      canonical: `https://www.co-deacademy.com/${currentLang}`,
      languages: {
        th: "https://www.co-deacademy.com/th",
        en: "https://www.co-deacademy.com/en",
      },
    },

    openGraph: {
      title: isEn
        ? "CO-DE | Coding Academy for Kids"
        : "CO-DE | สอน Coding สำหรับเด็ก",
      description: isEn
        ? "Learn coding for kids with fun and creative courses."
        : "เรียนโค้ดดิ้งสำหรับเด็ก ด้วยหลักสูตรสนุกและสร้างสรรค์",
      url: `https://www.co-deacademy.com/${currentLang}`,
      siteName: "CO-DE Academy",
      images: [
        {
          url: "https://www.co-deacademy.com/og-image.webp",
          width: 1200,
          height: 630,
          alt: "CO-DE Academy",
        },
      ],
      locale: isEn ? "en_US" : "th_TH",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "CO-DE | Coding Academy for Kids"
        : "CO-DE | สอน Coding สำหรับเด็ก",
      description: isEn
        ? "Learn coding for kids with fun and creative courses."
        : "เรียนโค้ดดิ้งสำหรับเด็ก ด้วยหลักสูตรสนุกและสร้างสรรค์",
      images: ["https://www.co-deacademy.com/og-image.webp"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.webp",
    },

    metadataBase: new URL("https://www.co-deacademy.com"),
  };
}

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const currentLang = resolvedParams?.lang;
  const supportedLocales = ["th", "en"];
  const locale = supportedLocales.includes(currentLang) ? currentLang : "th";

  return (
    <html
      lang={locale}
      className={`${comfortaa.variable} ${ibmThai.variable} ${ibmThaiLooped.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="min-h-full flex flex-col font-site">
        <CookieConsentProvider>
          <PageTracker />
          <Cookie />
          {children}
          <SpeedInsights />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
