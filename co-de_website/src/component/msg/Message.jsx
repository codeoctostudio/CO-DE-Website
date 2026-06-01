import { useContext } from "react";
import { useState, useEffect, useRef } from "react";
// import Phone from "../../assets/logos/greenphone.webp";
// import Line from "../../assets/logos/lineicon.webp";
// import location from "../../assets/logos/googlemap.webp";
// import Messenger from "../../assets/logos/messenger.webp";
import { CookieConsentContext } from "../../CookieConsent";
import Image from "next/image";
const Message = ({ announcementVisible }) => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [consentStatus] = useContext(CookieConsentContext);
  const [isMobile, setIsMobile] = useState(false);
  const iconStyle = () => ({
    width: isMobile ? "40px" : "50px",
    height: isMobile ? "40px" : "50px",
    borderRadius: "50%",
    backgroundColor: "blur(10px) rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "22px",
    textDecoration: "none",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    transition: "0.3s",
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // useEffect(() => {
  //   const images = [Phone, Line, Messenger, location];
  //   images.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className={`fixed right-1 z-[99999] transition-all duration-300
          ${isMobile
            ? consentStatus === "undecided"
              ? "bottom-72"
              : announcementVisible
                ? "bottom-[115px]"
                : "bottom-6"
            : "bottom-6"
          }
        `}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* popup */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="absolute bottom-full left-5 z-[100000] mb-[-5%] flex flex-col items-center gap-[5px] md:left-8"
          >
            {[
              { href: "tel:0808300899", src: "/assets/logos/greenphone.webp", alt: "Phone" },
              {
                href: "line://ti/p/@191yifch",
                src: "/assets/logos/lineicon.webp",
                alt: "Line",
                onClick: () => {
                  setOpen(false);
                  setTimeout(() => {
                    window.open("https://line.me/R/ti/p/@191yifch", "_blank", "noopener,noreferrer");
                  }, 100); // ปรับลดเวลาลงเพื่อให้ UX ดีขึ้น
                }
              },
              { href: "https://www.facebook.com/messages/t/102949192458304", src: "/assets/logos/messenger.webp", alt: "Messenger" },
              { href: "https://www.google.com/maps/dir//Mille+Malle+Mall", src: "/assets/logos/googlemap.webp", alt: "Location" },
            ].map((icon, idx) => (
              <a
                key={idx}
                href={icon.href}
                onClick={icon.onClick}
                target={icon.href.startsWith('http') ? "_blank" : undefined}
                rel={icon.href.startsWith('http') ? "noreferrer" : undefined}
                style={iconStyle()}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={isMobile ? 40 : 50} // กำหนดขนาดตามสถานะ Mobile
                  height={isMobile ? 40 : 50}
                  className="scale-[1.4] object-contain"
                  loading="eager" // ไอคอนใน popup ควรพร้อมแสดงทันทีที่กดเปิด
                />
              </a>
            ))}
          </div>
        )}

        {/* main button */}
        <button
          onClick={() => setOpen(!open)}
          className={`relative w-[80px] h-[80px] md:w-[110px] md:h-[110px] ${!open ? "origin-bottom animate-alarm" : ""
            }`}
        >
          <Image
            src="/assets/others/messageUs.webp"
            alt="Message Us"
            width={110}
            height={110}
            priority // สำคัญ: ให้ปุ่ม Floating โหลดเป็นอันดับแรกๆ
            className="h-full w-full scale-[1.6] object-contain"
          />
        </button>
      </div>
    </>
  );
};

export default Message;
