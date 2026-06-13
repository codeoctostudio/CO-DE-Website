import { Comfortaa, IBM_Plex_Sans_Thai, IBM_Plex_Sans_Thai_Looped } from "next/font/google";

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

// แบบไม่มีหัว (Modern)
export const ibmThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
  variable: "--font-ibm-plex-thai", 
});

// แบบมีหัว (Looped)
export const ibmThaiLooped = IBM_Plex_Sans_Thai_Looped({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai"],
  variable: "--font-ibm-plex-thai-looped",
});