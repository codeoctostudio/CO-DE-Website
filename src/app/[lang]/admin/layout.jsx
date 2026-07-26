"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);

      try {
        const res = await fetch("https://admin.co-deacademy.com/api/me.php", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store", // ไม่ใช้ cache
        });

        const data = await res.json();

        if (!res.ok || !data.ok) {
          window.location.href = "https://admin.co-deacademy.com/manage/login";
          return;
        }

        setIsAuthenticated(true);
      } catch (err) {
        window.location.href = "https://admin.co-deacademy.com/manage/login";
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700 font-semibold text-sm">
        🔒 กำลังตรวจสอบสิทธิ์การใช้งาน...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
