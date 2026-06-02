import { Comfortaa } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/component/I18nProvider";

import CookieConsentProvider from "@/CookieConsent";
import Cookie from "@/Cookie";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comfortaa",
});

export const metadata = {
  title: "CO-DE | สอน Coding สำหรับเด็ก",
  description: "CO-DE Academy",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${comfortaa.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-[family-name:var(--font-comfortaa)]"
      >
        <CookieConsentProvider>
          <Cookie>
            <I18nProvider>
              {children}
            </I18nProvider>
          </Cookie>
        </CookieConsentProvider>
      </body>
    </html>
  );
}