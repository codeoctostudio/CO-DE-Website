import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 left-3 z-[100001]
        flex h-6 w-6
        items-center justify-center rounded-full bg-white/65
        text-gray-600/80
        shadow-lg backdrop-blur
        transition-all
        duration-300
        hover:scale-110 hover:bg-white/90
        hover:text-gray-800 active:scale-95 md:h-10
        md:w-10
        ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}
      `}
    >
      {/* ลูกศรขึ้น */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
