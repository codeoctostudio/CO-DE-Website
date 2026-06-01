import { useEffect, useState } from "react";
import { useNavigate } from "next/navigation";

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#042451] font-comfortaa text-white">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold">Thank You 🎉</h1>

        <p className="mb-4 text-lg">
          CO-DE has received your submitted information and will arrange a class
          for you as soon as possible.
        </p>

        <p className="text-sm opacity-80">
          You will be redirected to the homepage in{" "}
          <span className="font-bold text-yellow-300">{countdown}</span>{" "}
          seconds...
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
