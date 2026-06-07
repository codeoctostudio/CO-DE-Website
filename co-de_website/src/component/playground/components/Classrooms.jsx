import alpha from "../../../assets/playground/alpha.webp";
import bravo from "../../../assets/playground/bravo.webp";
import code from "../../../assets/playground/code.webp";
import dede from "../../../assets/playground/dede.webp";
import echo from "../../../assets/playground/echo.webp";
import foxtrot from "../../../assets/playground/foxtrot.webp";
const Classrooms = () => {
  // Classroom Lists
  const classrooms = [
    {
      image: alpha,
      name: "Design Thinking Classroom",
      count: "1-3 Students",
      id: "c1",
      color: "bg-[#EA5880]",
      sidename: "Alpha",
    },
    {
      image: bravo,
      name: "All type Classroom",
      count: "1-5 Students",
      id: "c2",
      color: "bg-[#00B0E6]",
      sidename: "Bravo",
    },
    {
      image: code,
      name: "All type Classroom",
      count: "1-5 Students",
      id: "c3",
      color: "bg-[#FFAC1C]",
      sidename: "CO-DE",
    },
    {
      image: dede,
      name: "All type Classroom",
      count: "1-5 Students",
      id: "c4",
      color: "bg-[#F7C94B]",
      sidename: "DE-DE",
    },
    {
      image: echo,
      name: "All type Classroom",
      count: "1-5 Students",
      id: "c5",
      color: "bg-[#6FBC87]",
      sidename: "Echo",
    },
    {
      image: foxtrot,
      name: "Private class / Online Class",
      count: "1-2 Students",
      id: "c6",
      color: "bg-[#EA5880]",
      sidename: "Foxtrot",
    },
  ];
  // Rendering Classroom
  const classroomContainers = classrooms.map((classroom) => (
    <div
      key={classroom.id}
      className="relative mb-10 flex  w-[90%]  flex-col rounded-[30px]  bg-white  drop-shadow-xl  transition-transform duration-500  hover:scale-105   md:w-[45%]   "
    >
      <div
        className={`absolute left-0 top-0 rounded-br-[30px] rounded-tl-[30px] p-3 text-white ${classroom.color}`}
      >
        <p className="font-bold">{classroom.sidename}</p>
      </div>
      <img src={classroom.image} className="rounded-t-[30px]" loading="lazy" alt="Classroom" />
      <div className="p-4 ">
        <p className="h-[70px] text-xl font-bold lg:text-2xl ">
          {classroom.name}
        </p>
        <p className=" text-xl font-bold">{classroom.count}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div className="flex h-full w-full flex-col items-center bg-[#042451] py-[150px] font-comfortaa   ">
        <p className="mb-10 text-center text-3xl text-white">Our Classrooms</p>
        <div className="flex w-[85%] flex-col flex-wrap items-center md:flex-row md:justify-between">
          {classroomContainers}
        </div>
      </div>
    </>
  );
};

export default Classrooms;
