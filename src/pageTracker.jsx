import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtmInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",   // ✅ ใช้ของ Google
      page_location: window.location.href,
      page_path: location.pathname,
      page_title: document.title,
    });

    console.log("page_view:", location.pathname);
  }, [location]);

  return null;
};

export default PageTracker;
