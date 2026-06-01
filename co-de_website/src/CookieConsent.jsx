"use client";

import { createContext, useState, useEffect } from "react";
import loadGTM from "./loadGTM";

export const CookieConsentContext = createContext();

const CookieConsentProvider = ({ children }) => {
  // 1. กำหนด Initial State เป็น "undecided" เสมอ เพื่อให้ฝั่ง Server และ Client ตรงกันตอนเริ่ม
  const [consentStatus, setConsentStatus] = useState("undecided");

  // 2. ใช้ useEffect ดึงข้อมูลจาก localStorage เมื่อ Component ติดตั้งบน Browser แล้ว (Client-side only)
  useEffect(() => {
    const savedStatus = localStorage.getItem("consentStatus");
    if (savedStatus) {
      setConsentStatus(savedStatus);
    }

    // เช็คเรื่อง GTM ด้วย
    let prefs = null;
    try {
      prefs = JSON.parse(localStorage.getItem("cookiePreferences"));
    } catch (e) {
      prefs = null;
    }
    if (prefs?.analytics) {
      initGTM();
    }
  }, []);

  // 3. บันทึกค่าลง localStorage เมื่อมีการเปลี่ยนสถานะ
  useEffect(() => {
    if (consentStatus !== "undecided") {
      localStorage.setItem("consentStatus", consentStatus);
    }
  }, [consentStatus]);

  const acceptConsent = (analyticsAllowed) => {
    setConsentStatus("accepted");

    const prefs = {
      essential: true,
      analytics: analyticsAllowed,
    };

    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));

    if (analyticsAllowed) {
      initGTM();
    }
  };

  const initGTM = () => {
    // ป้องกันการเรียกใช้ window บน Server
    if (typeof window === "undefined" || window.gtmInitialized) return;

    loadGTM();
    window.gtmInitialized = true;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_granted",
      analytics_storage: "granted",
    });

    console.log("GTM Initialized");
  };

  return (
    <CookieConsentContext.Provider value={[consentStatus, acceptConsent]}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;