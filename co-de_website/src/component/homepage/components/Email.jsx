/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Email = (props) => {
  const googleEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "register_submit",
      form_type: props.pageName,
    });
  };

  const form = useRef();

  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentSchool, setStudentSchool] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [lineId, setLineId] = useState("");

  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  });

  const resetCheckboxes = () => {
    setCheckboxes({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
      option6: false,
      option7: false,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const atLeastOneChecked = Object.values(checkboxes).some(
      (checked) => checked,
    );

    if (!atLeastOneChecked) {
      alert("Please select at least one option.");
      return;
    }

    emailjs
      .sendForm(
        "service_codeacademy",
        "template_uaoq44h",
        form.current,
        "Dwq3JqPF8Lx4j4ZBG",
      )
      .then(
        (result) => {
          console.log(result.text);
          resetCheckboxes();
          setStudentName("");
          setStudentAge("");
          setStudentSchool("");
          setParentName("");
          setParentNumber("");
          setLineId("");
          googleEvent();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div
      id="email"
      className="text-bold bg-[#EA5880] p-14  font-comfortaa text-white"
    >
      <h1 className="mb-14 text-3xl font-bold md:text-4xl">
        {props.pageName == "Student Registration"
          ? "Student Registration Form"
          : "Join our free Trial Class now!"}
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-[100%] flex-col md:w-[70%]"
      >
        <h1 className="mb-5 text-2xl">Information</h1>
        <input type="hidden" name="page_name" value={props.pageName} />
        <label>Student's Name</label>
        <input
          type="text"
          name="student_name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4  text-black"
          required
        />
        <label>Student's Age</label>
        <input
          type="number"
          min="1"
          max="90"
          name="student_age"
          value={studentAge}
          onChange={(e) => setStudentAge(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <label>Student's School</label>
        <input
          type="text"
          name="student_school"
          value={studentSchool}
          onChange={(e) => setStudentSchool(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <label>Parent's Name</label>
        <input
          type="text"
          name="parent_name"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="w-full md:w-[45%]">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="parent_number"
              value={parentNumber}
              onChange={(e) => setParentNumber(e.target.value)}
              className="mb-5 w-full rounded-xl px-4 py-3 text-black"
              pattern="[0-9]+"
              title="Please Enter A Valid Number"
              required
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label>LINE ID</label>
            <input
              type="text"
              name="line_id"
              value={lineId}
              onChange={(e) => setLineId(e.target.value)}
              className="mb-5 w-full rounded-xl px-4 py-3 text-black"
            />
          </div>
        </div>
        <h1 className="my-5 text-2xl font-bold">Available Time to study</h1>
        <label htmlFor="option1" className="text-lg">
          <input
            type="checkbox"
            id="option1"
            name="options[]"
            value="Weekdays"
            className="mb-5 mr-3"
            checked={checkboxes.option1}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option1: !checkboxes.option1 })
            }
          />
          Weekdays
        </label>

        <label htmlFor="option2" className="text-lg">
          <input
            type="checkbox"
            id="option2"
            name="options[]"
            value="Weekdays After School"
            className="mb-5 mr-3"
            checked={checkboxes.option2}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option2: !checkboxes.option2 })
            }
          />
          Weekdays After School
        </label>

        <label htmlFor="option3" className="text-lg">
          <input
            type="checkbox"
            id="option3"
            name="options[]"
            value="Saturday Morning"
            className="mb-5 mr-3"
            checked={checkboxes.option3}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option3: !checkboxes.option3 })
            }
          />
          Saturday Morning
        </label>
        <label htmlFor="option4" className="text-lg">
          <input
            type="checkbox"
            id="option4"
            name="options[]"
            value="Saturday Afternoon"
            className="mb-5 mr-3"
            checked={checkboxes.option4}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option4: !checkboxes.option4 })
            }
          />
          Saturday Afternoon
        </label>

        <label htmlFor="option5" className="text-lg">
          <input
            type="checkbox"
            id="option5"
            name="options[]"
            value="Sunday Morning"
            className="mb-5 mr-3"
            checked={checkboxes.option5}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option5: !checkboxes.option5 })
            }
          />
          Sunday Morning
        </label>

        <label htmlFor="option6" className="text-lg">
          <input
            type="checkbox"
            id="option6"
            name="options[]"
            value="Sunday Afternoon"
            className="mb-5 mr-3"
            checked={checkboxes.option6}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option6: !checkboxes.option6 })
            }
          />
          Sunday Afternoon
        </label>

        <label htmlFor="option7" className="text-lg">
          <input
            type="checkbox"
            id="option7"
            name="options[]"
            value="Anytime"
            className="mb-5 mr-3"
            checked={checkboxes.option7}
            onChange={() =>
              setCheckboxes({ ...checkboxes, option7: !checkboxes.option7 })
            }
          />
          Anytime
        </label>

        <div className="flex items-center">
          <input
            type="submit"
            value="Submit"
            className="mt-4 w-[200px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-3 hover:opacity-90 active:opacity-50"
          />
        </div>
      </form>
    </div>
  );
};

export default Email;
