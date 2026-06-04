"use client";

import { createContext, useState, useEffect } from "react";
import loadGTM from "./loadGTM";
import { getCookie, setCookie } from "@/lib/cookies";

export const CookieConsentContext = createContext();

const CookieConsentProvider = ({ children }) => {
  const [consentStatus, setConsentStatus] = useState("undecided");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedStatus = getCookie("consentStatus");

    if (savedStatus) {
      setConsentStatus(savedStatus);
    }

    let prefs = null;

    try {
      const savedPrefs = getCookie("cookiePreferences");

      if (savedPrefs) {
        prefs = JSON.parse(savedPrefs);
      }
    } catch {}

    if (prefs?.analytics) {
      initGTM();
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (consentStatus !== "undecided") {
      setCookie("consentStatus", consentStatus);
    }
  }, [consentStatus]);

  const acceptConsent = (analyticsAllowed) => {
    setConsentStatus("accepted");

    const prefs = {
      essential: true,
      analytics: analyticsAllowed,
    };

    setCookie("cookiePreferences", JSON.stringify(prefs));

    if (analyticsAllowed) {
      initGTM();
    }
  };

  const initGTM = () => {
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
    <CookieConsentContext.Provider
      value={[consentStatus, acceptConsent, loaded]}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;
