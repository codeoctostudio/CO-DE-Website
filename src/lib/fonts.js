import { Comfortaa, IBM_Plex_Sans_Thai, IBM_Plex_Sans_Thai_Looped } from "next/font/google";

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap", // 👈 เพิ่มช่วย Performance
});

// แบบไม่มีหัว (Modern)
export const ibmThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
  variable: "--font-ibm-plex-thai", 
  display: "swap", // 👈 เพิ่มช่วย Performance
});

// แบบมีหัว (Looped)
export const ibmThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
  variable: "--font-ibm-plex-thai-looped",
  display: "swap", // 👈 เพิ่มช่วย Performance
});