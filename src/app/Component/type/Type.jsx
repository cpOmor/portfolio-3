"use client";
import { Typewriter } from "react-simple-typewriter";

// import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Typewriter
        words={[
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "PERN Stack Developer",
          "Open Source Contributor",
        ]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </>
  );
};

export default Type;
