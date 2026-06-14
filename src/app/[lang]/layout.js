import "./globals.css";
import CookieConsentProvider from "@/CookieConsent";
import PageTracker from "@/pageTracker";
import Cookie from "@/Cookie";
import { comfortaa, ibmThai, ibmThaiLooped } from "@/lib/fonts";

export const metadata = {
  title: "CO-DE | สอน Coding สำหรับเด็ก",
  description: "CO-DE Academy",
};

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
        </CookieConsentProvider>
      </body>
    </html>
  );
}
