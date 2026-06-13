import { useEffect } from "react";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message.jsx";

import BackToTop from "../msg/Backtotop.jsx";

const Trial = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    // ReactGA.send({ hitType: "pageview", title: "Trial Class Page" });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_name: "Trial Class Page",
    });
  }, []);
  return (
    <>
      <Footer />
      <Message />
      <BackToTop />
    </>
  );
};

export default Trial;
