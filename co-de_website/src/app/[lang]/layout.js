import { Comfortaa, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/component/I18nProvider";
import CookieConsentProvider from "@/CookieConsent";
import Cookie from "@/Cookie";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comfortaa",
});

const ibmPlexThaiLooped = IBM_Plex_Sans_Thai_Looped({
  subsets: ["thai"],
  weight: ["300", "400", "700"],
  variable: "--font-ibm-plex-thai",
});

export const metadata = {
  title: "CO-DE | สอน Coding สำหรับเด็ก",
  description: "CO-DE Academy",
};

export default async function RootLayout({ children, params }) {
  // แกะค่า lang ออกมาจาก params อย่างปลอดภัยตามกฎ Next.js 15/16
  const resolvedParams = await params;
  const currentLang = resolvedParams?.lang || "th";

  const fontStyle =
    currentLang === "th"
      ? {
          fontFamily:
            "var(--font-ibm-plex-thai), var(--font-comfortaa), sans-serif",
        }
      : {
          fontFamily:
            "var(--font-comfortaa), var(--font-ibm-plex-thai), sans-serif",
        };

  return (
    <html
      lang={currentLang}
      className={`${comfortaa.variable} ${ibmPlexThaiLooped.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={fontStyle}>
        <CookieConsentProvider>
          <Cookie>
            <I18nProvider>{children}</I18nProvider>
          </Cookie>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
