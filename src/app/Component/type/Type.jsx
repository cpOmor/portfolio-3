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
        loop={1000000000}
        cursor
        cursorStyle="_"
        typeSpeed={120}
        deleteSpeed={20}
        delaySpeed={2000}
      />
    </>
  );
};

export default Type;
