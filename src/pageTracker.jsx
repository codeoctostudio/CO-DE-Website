"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function TrackerComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtmInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_location: window.location.href,
      page_path: pathname + searchParams.toString(),
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

// ต้องครอบด้วย Suspense เสมอเมื่อใช้ useSearchParams ใน Next.js Client Component
const PageTracker = () => {
  return (
    <Suspense fallback={null}>
      <TrackerComponent />
    </Suspense>
  );
};

export default PageTracker;