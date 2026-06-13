"use client";

import { useContext, useState } from "react";
import { CookieConsentContext } from "./CookieConsent";

const Cookie = ({ children }) => {
  const [consentStatus, acceptConsent, loaded] =
    useContext(CookieConsentContext);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  const handleAccept = () => {
    acceptConsent(analyticsAllowed);
  };

  if (!loaded) {
    return children;
  }

  return (
    <>
      {children}

      {consentStatus === "undecided" && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-[99998] bg-black/40" />

          {/* Cookie Card */}
          <div className="fixed bottom-0 z-[99999] flex w-full justify-center px-4 pb-6">
            <div className="animate-slide-up w-full max-w-sm rounded-xl bg-[#29446A] p-2 font-comfortaa text-white shadow-2xl sm:max-w-md sm:p-2 md:max-w-lg md:p-3 lg:max-w-lg lg:p-4">
              {/* Icon */}
              <div className="mb-0 flex justify-center text-xl sm:text-2xl md:text-3xl lg:mb-1 lg:text-4xl">
                🍪
              </div>

              {/* Title */}
              <h2 className="mb-0 text-center text-xs font-bold sm:text-sm md:text-lg lg:mb-1 lg:text-2xl">
                We value your privacy
              </h2>

              {/* Description */}
              <p className="mb-0 text-center text-[0.6rem] opacity-90 sm:text-xs md:text-sm lg:mb-0 lg:text-base">
                We use cookies to enhance your experience.
              </p>
              <p className="mb-1 text-center text-[0.6rem] opacity-90 sm:text-xs md:text-sm lg:mb-2 lg:text-base">
                You can review your preferences below.
              </p>

              {/* Cookie Options */}
              <div className="mb-1 space-y-2 rounded-lg bg-white/10 p-2 sm:p-2 md:p-3 lg:mb-3 lg:space-y-2 lg:rounded-xl lg:max-w-md lg:mx-auto">
                {/* Essential */}
                <label className="flex items-start gap-2 text-[0.65rem] sm:text-xs md:text-sm lg:gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    disabled
                    className="mt-0 cursor-not-allowed accent-[#F7C94B]"
                  />

                  <div>
                    <p className="font-semibold">Essential cookies</p>
                    <p className="text-[0.55rem] opacity-80">
                      Required for the website to function properly.
                    </p>
                  </div>
                </label>

                {/* Analytics */}
                <label className="flex items-start gap-2 text-[0.6rem] sm:gap-3 sm:text-sm">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="mt-0 accent-[#F7C94B]"
                  />

                  <div>
                    <p className="font-semibold">Analytics cookies</p>
                    <p className="text-[0.55rem] opacity-80">
                      Help us understand how visitors interact with the site.
                    </p>
                  </div>
                </label>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-center">
                <button
                  onClick={handleAccept}
                  className="rounded-full bg-[#F7C94B] px-4 py-1.5 text-xs font-semibold text-[#042451] transition hover:scale-105 hover:bg-[#f1cb61] active:scale-95 sm:px-5 sm:py-2 md:px-6 md:py-2.5 md:text-sm lg:px-6 lg:py-3 lg:text-base"
                >
                  Continue to site
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cookie;
