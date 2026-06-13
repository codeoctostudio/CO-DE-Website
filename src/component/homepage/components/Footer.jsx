import Image from "next/image";
import img1 from "@/assets/logos/facebook2.webp"
import img2 from "@/assets/logos/line2.webp"
import img3 from "@/assets/logos/phone2.webp"
import img4 from "@/assets/logos/email.webp"
import img5 from "@/assets/logos/location.webp"
import img6 from "@/assets/others/code_logo.webp"

const Footer = () => {
  const contacts = [
    {
      portal: "https://www.facebook.com/codeacademy.thailand",
      logo: img1,
      text: "CO-DE academy",
      key: "logo1",
    },
    {
      portal: "https://line.me/R/ti/p/@191yifch",
      logo: img2,
      text: "@CO-DE",
      key: "logo2",
    },
    {
      portal: "tel:+66808300899",
      logo: img3,
      text: "0808300899",
      key: "logo3",
    },
    {
      portal: "mailto:codeacademy.ad@gmail.com",
      logo: img4,
      text: "codeacademy.ad@gmail.com",
      key: "logo4",
    },
    {
      portal:
        "https://www.google.com/maps/dir//Mille+Malle+Mall,+Sukhumvit+20+Alley,+Khlong+Toei,+Bangkok+10110/@13.730056,100.4810962,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x30e29ff6f10ee8f3:0x76076b242bf23d09!2m2!1d100.5634996!2d13.7301107?entry=ttu",
      logo: img5,
      text: "CO-DE academy ",
      text2: "Floor 3. Mille Malle , Sukhumvit 20",
      key: "logo5",
    },
  ];

  const contactList = contacts.map((contact) => (
    <div key={contact.key} className="my-1 flex items-center text-white">
      {/* แก้ไขจุดที่ 1: ใส่ width/height และถอด className h/w บางส่วนออก */}
      <Image
        src={contact.logo}
        alt={`${contact.text} logo`}
        width={35}
        height={35}
        className="mr-3 shrink-0" // ปล่อยให้ความกว้างคุมโดย props แทน
        loading="lazy"
      />

      <a
        href={contact.portal}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-center text-xs font-bold [overflow-wrap:anywhere] sm:text-base md:flex-row md:items-center md:gap-1"
      >
        <span>{contact.text}</span>
        {contact.text2 && (
          <span className="text-sm font-normal sm:text-base md:whitespace-nowrap md:text-base">
            {contact.text2}
          </span>
        )}
      </a>
    </div>
  ));

  return (
    <footer className="h-full w-full font-comfortaa">
      <section className=" flex  flex-col items-center bg-[#042451]  md:flex-row">
        <div className="relative h-[300px] w-[300px]">
          <Image
            src={img6}
            alt="CO-DE Academy Logo"
            fill // ใช้ fill เพื่อให้รูปขยายเต็ม div container
            className="object-contain" // ป้องกันรูปเบี้ยว
            sizes="300px"
            loading="lazy"
          />
        </div>
        <div className="auto mb-10 flex w-[80%] flex-col justify-center  md:mb-0">
          {contactList}
        </div>
      </section>
      <div className="flex w-full items-center justify-center  bg-[#29446A]  p-3 font-bold text-white md:justify-between md:px-10">
        <p className="mr-10 text-base sm:text-xl  md:mr-0">
          Copyright © CO-DE Academy
        </p>

        <a
          href="mailto:codeonline.charlie@gmail.com"
          className="text-base text-[#FFAC1C] sm:text-xl "
        >
          Work with Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
