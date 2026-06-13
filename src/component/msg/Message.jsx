"use client";

import { useContext, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CookieConsentContext } from "../../CookieConsent";
import DEDE from "@/assets/others/messageUs.webp"
import Phone from "@/assets/logos/greenphone.webp"
import Line from "@/assets/logos/lineicon.webp"
import Messages from "@/assets/logos/messenger.webp"
import Map from "@/assets/logos/googlemap.webp"

const Message = ({ announcementVisible }) => {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [consentStatus] = useContext(CookieConsentContext);
  const [isMobile, setIsMobile] = useState(false);

  const iconStyle = () => ({
    width: isMobile ? "40px" : "50px",
    height: isMobile ? "40px" : "50px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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

  return (
    <>
      <div
        ref={wrapperRef}
        className={`
          fixed right-1 z-[99999]
          transition-all duration-300
          ${
            isMobile
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
            <a href="tel:0808300899" style={iconStyle()}>
              <Image
                src={Phone}
                alt="Phone"
                width={400}
                height={400}
                priority
                className="h-full w-full scale-[1.4] object-contain"
              />
            </a>

            <a
              href="line://ti/p/@191yifch"
              onClick={(e) => {
                setOpen(false);
                setTimeout(() => {
                  window.open(
                    "https://line.me/R/ti/p/@191yifch",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }, 10000);
              }}
              style={iconStyle()}
            >
              <Image
                src={Line}
                alt="Line"
                width={400}
                height={400}
                priority
                className="h-full w-full scale-[1.4] object-contain"
              />
            </a>

            <a
              href="https://www.facebook.com/messages/t/102949192458304"
              target="_blank"
              rel="noreferrer"
              style={iconStyle()}
            >
              {/* 🛠️ แก้ไขจุดที่ 1: เติม / นำหน้า assets เพื่อให้หา path เจอถูกต้อง */}
              <Image
                src={Messages}
                alt="Messenger"
                width={400}
                height={400}
                priority
                className="h-full w-full scale-[1.4] object-contain"
              />
            </a>

            {/* 🛠️ แก้ไขจุดที่ 2: เปลี่ยนลิงก์ Google Maps ให้เป็นรูปแบบสากลที่ถูกต้อง */}
            <a
              href="https://www.google.com/maps/dir//Mille+Malle,+66%2F4+Sukhumvit+20+Alley,+Khwaeng+Khlong+Toei,+Khlong+Toei,+Bangkok+10110/@13.76256,100.548608,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x30e29f032bf39a7d:0x564b0009c4c3366b!2m2!1d100.5635712!2d13.7300775?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" // ใส่ URL หมุดจริงของสถาบันคุณตรงนี้ได้เลยครับ เช่น https://maps.app.goo.gl/...
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle()}
            >
              <Image
                src={Map}
                alt="Location"
                width={400}
                height={400}
                priority
                className="h-full w-full scale-[1.4] object-contain"
              />
            </a>
          </div>
        )}

        {/* button */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-[80px] md:w-[110px] ${
            !open ? "origin-bottom animate-alarm" : ""
          }`}
        >
          <Image
            src={DEDE}
            alt="DEDE"
            width={400}
            height={400}
            priority
            className="h-full w-full scale-[1.6] object-contain"
          />
        </button>
      </div>
    </>
  );
};

export default Message;
