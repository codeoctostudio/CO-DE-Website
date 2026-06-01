import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const RAW_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "/api";
const API_BASE = String(RAW_BASE).replace(/\/+$/, "");
import { useLangPath } from "../../guardlang";

const AnnouncementBar = ({ onVisibleChange, rewardRef }) => {
  const langPath = useLangPath();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [announcement, setAnnouncement] = useState(null);
  const router = useRouter();
  const [hideFreeTrial, setHideFreeTrial] = useState(false);

  const getMessage = () => {
    if (!announcement) {
      return "📢เริ่มต้นเรียน Coding สำหรับเด็ก 4–18 ปี พร้อมทดลองเรียนฟรี";
    }

    const now = new Date();
    const start = new Date(announcement.start_time);
    const end = new Date(announcement.end_time);

    // ถ้าหมดเวลาแล้ว → fallback
    if ((now > end) || (now < start)) {
      return "📢เริ่มต้นเรียน Coding สำหรับเด็ก 4–18 ปี พร้อมทดลองเรียนฟรี";
    }

    // ถ้ายังไม่หมด → ใช้จาก API
    return "📢" + announcement.info;
  };
  const getLink = () => {
    if (!announcement) {
      return langPath("/trialclass");
    }

    const now = new Date();
    const start = new Date(announcement.start_time);
    const end = new Date(announcement.end_time);

    // ถ้าหมดเวลาแล้ว → fallback
    if ((now > end) || (now < start)) {
      return langPath("/trialclass");
    }

    // ถ้า Priority ว่าง / null / undefined → fallback
    if (!announcement.Priority || announcement.Priority.trim() === "") {
      return langPath("/trialclass");
    }

    // ถ้ายังไม่หมด → ใช้จาก API
    return langPath(announcement.Priority);
  };

  const message = getMessage();
  const ctaText = "สมัครเลย";

  const scrollToEmail = () => {
    router.push(getLink());
  };

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch(`${API_BASE}/get_website_announcements.php`);
        const data = await res.json();

        if (data.success && Array.isArray(data.rows)) {
          // 1. filter เฉพาะ web approved
          const approved = data.rows.filter(
            (item) => item.recipient === "web approved"
          );

          if (approved.length > 0) {
            // 2. หา id ล่าสุด (มากสุด)
            const latest = approved.reduce((prev, current) =>
              current.id > prev.id ? current : prev
            );

            // 3. set name
            setAnnouncement(latest);
          }
        }
      } catch (err) {
        console.error("Fetch announcement error:", err);
      }
    };

    fetchAnnouncement();
  }, []);

  useEffect(() => {
    if (dismissed) {
      onVisibleChange?.(false);
      return;
    }

    const handleScroll = () => {
      const visible = window.scrollY > 100;
      setShow(visible);
      onVisibleChange?.(visible);

      if (!rewardRef?.current) return;

      const rect = rewardRef.current.getBoundingClientRect();

      setHideFreeTrial(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed, onVisibleChange, rewardRef]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
    onVisibleChange?.(false);
  };

  if (dismissed) return null;

  return (
    <>
      {!hideFreeTrial && (
        <div
          className={`fixed bottom-4 left-1/2 z-[99997] w-[90%] max-w-[700px] -translate-x-1/2 rounded-xl bg-[#F8E27A] px-4 py-3 text-[#0E2A47] shadow-xl transition-all duration-500 md:w-auto md:max-w-none
            ${show
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-10 opacity-0"
                }
            `}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close announcement"
            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black shadow hover:bg-black/10 active:scale-90 md:-right-3 md:-top-3"
          >
            ✕
          </button>

          {/* Content */}
          <div
            className="flex items-center justify-center gap-3 md:flex-row"
          >
            {/* Message */}
            <p
              className="whitespace-normal text-center text-xs leading-tight text-[#042451] sm:text-sm md:text-left md:text-base"
            >
              {message}
            </p>

            {/* CTA */}
            {ctaText && (
              <button
                onClick={scrollToEmail}
                className="shrink-0 whitespace-nowrap rounded-full bg-[#0E2A47] px-3 py-1.5 text-xs font-bold text-white hover:opacity-80 active:scale-95"
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementBar;
