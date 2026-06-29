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
      canonical: `https://co-de.academy/${currentLang}`,
      languages: {
        th: "https://co-de.academy/th",
        en: "https://co-de.academy/en",
      },
    },

    openGraph: {
      title: isEn
        ? "CO-DE | Coding Academy for Kids"
        : "CO-DE | สอน Coding สำหรับเด็ก",
      description: isEn
        ? "Learn coding for kids with fun and creative courses."
        : "เรียนโค้ดดิ้งสำหรับเด็ก ด้วยหลักสูตรสนุกและสร้างสรรค์",
      url: `https://co-de.academy/${currentLang}`,
      siteName: "CO-DE Academy",
      images: [
        {
          url: "https://co-de.academy/og-image.png", // ใส่ path รูป OG จริง
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
      images: ["https://co-de.academy/og-image.png"],
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
      apple: "/apple-touch-icon.png",
    },

    metadataBase: new URL("https://co-de.academy"),
  };
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
