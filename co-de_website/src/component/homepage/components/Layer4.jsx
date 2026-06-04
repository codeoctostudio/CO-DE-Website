import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/about/classroom.webp"
import img2 from "@/assets/about/team.webp"
import img3 from "@/assets/about/stage.webp"
import img4 from "@/assets/about/kidsproject.webp"
import { useLanguage } from "@/hook/useLanguage";

const Layer4 = () => {
  const {dict, langPath} = useLanguage();

  return (
    <section>
      <div className="flex h-full w-full flex-col items-center justify-between bg-[#cce6e4] py-[70px] font-comfortaa text-white">
        
        {/* Row 1 */}
        <div className="flex w-[85%] flex-col items-center bg-transparent md:flex-row md:justify-around">
          <Link
            href={langPath("/playground")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src={img1}
              alt="Classroom"
              width={600} // ระบุความกว้างโดยประมาณ
              height={400} // ระบุความสูงโดยประมาณ
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {dict.layer4_1}
            </p>
          </Link>

          <Link
            href={langPath("/aboutUs")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src={img2}
              alt="Team Teachers"
              width={600}
              height={400}
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {dict.layer4_2}<br />
              {dict.layer4_2_1}
            </p>
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex w-[85%] flex-col items-center bg-transparent md:flex-row md:justify-around">
          <Link
            href={langPath("/pitchingStage")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src={img3}
              alt="Pitching Stage"
              width={600}
              height={400}
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {dict.layer4_3}<br />
              {dict.layer4_3_1}
            </p>
          </Link>

          <Link
            href={langPath("/kidsproject")}
            className="relative my-5 flex w-[90%] cursor-pointer items-center justify-center drop-shadow-xl transition-transform duration-500 hover:scale-105 active:opacity-[0.9] md:w-[45%]"
          >
            <Image
              src={img4}
              alt="Kids Project"
              width={600}
              height={400}
              className="rounded-3xl opacity-[0.95] brightness-75 w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="absolute w-[80%] text-center text-xl leading-relaxed underline underline-offset-[5px] md:text-2xl md:underline-offset-[7px] md:leading-relaxed">
              {dict.layer4_4}
            </p>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Layer4;