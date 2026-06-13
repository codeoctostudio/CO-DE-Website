import "./globals.css";
import I18nProvider from "@/component/I18nProvider";
import CookieConsentProvider from "@/CookieConsent";
import Cookie from "@/Cookie";
import { comfortaa, ibmThai, ibmThaiLooped } from "@/lib/fonts";
import { useLanguage } from "@/hook/useLanguage";

export const metadata = {
  title: "CO-DE | สอน Coding สำหรับเด็ก",
  description: "CO-DE Academy",
};

export default async function RootLayout({ children, params }) {
  // const {lang} = useLanguage
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${comfortaa.variable} ${ibmThai.variable} ${ibmThaiLooped.variable}`}
    >
      <body className="min-h-full flex flex-col font-site">
        <CookieConsentProvider>
          <Cookie>
            <I18nProvider>{children}</I18nProvider>
          </Cookie>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
