import chula from "@/assets/universities/chula.webp";
import kaset from "@/assets/universities/kaset.webp";
import kmitl from "@/assets/universities/kmitl.webp";
import palo from "@/assets/universities/palo.webp";
import siit from "@/assets/universities/siit.webp";
import web from "@/assets/universities/webster.webp";
import teacher1 from "@/assets/teachers/teacher1.webp";
import teacher2 from "@/assets/teachers/teacher2.webp";
import { useLanguage } from "@/hook/useLanguage";
import Image from "next/image";

const Detail = () => {
  const {dict } = useLanguage();
  return (
    <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white ">
      <p className="mb-8 w-[80%] text-center text-xl md:text-3xl">
        {dict.aboutUs_1}
      </p>
      <p className="mb-16 w-[80%] text-center text-sm sm:text-base md:text-lg  ">
        {dict.aboutUs_2}
      </p>
      <p className="mb-8 w-[80%]  text-center text-xl md:mb-8 md:text-3xl">
        {dict.aboutUs_3}
      </p>
      <div className="mb-16 flex w-[80%] flex-wrap justify-around rounded-2xl border-4 border-black bg-[#F5D785] p-3 drop-shadow-2xl lg:w-[60%]">
        <Image
          src={chula}
          alt="Chulalongkorn University"
          className="mx-1 w-[40%] object-contain"
        />
        <Image
          src={kaset}
          alt="Kasetsart University"
          className="mx-1 w-[40%] object-contain"
        />
        <Image
          src={kmitl}
          alt="King Mongkut's Institute of Technology"
          className="mx-1 w-[40%] object-contain"
        />
        <Image
          src={palo}
          alt="Palo Alto University"
          className="mx-1 w-[40%] object-contain"
        />
        <Image
          src={siit}
          alt="Srinakharinwirot University"
          className="mx-1 w-[40%] object-contain"
        />
        <Image
          src={web}
          alt="Webster University"
          className="mx-1 w-[40%] object-contain"
        />
      </div>
      <section className="mb-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          {dict.aboutUs_4}
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          {dict.aboutUs_5}
        </p>
      </section>

      <Image src={teacher1} alt="teacher" className="w-[80%] rounded-2xl" />

      <section className="my-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          {dict.aboutUs_6}
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          {dict.aboutUs_7}
        </p>
      </section>

      <Image src={teacher2} alt="teacher" className="w-[80%] rounded-2xl" />

      <section className="my-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          {dict.aboutUs_8}
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          {dict.aboutUs_9}
        </p>
      </section>
    </main>
  );
};

export default Detail;
