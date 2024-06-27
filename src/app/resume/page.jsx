"use client";
import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import Container from "../Component/Container/Container";
import omarPDF from "../../assists/omar-pdf.png";
import Image from "next/image";


const Resume = () => {
  const fileName = "omar.png";
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = omarPDF;
  //   link.download = "omar-faruk.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <Container>
      <div className="mt-20 ">
        <a download={fileName}>
          <button
            // onClick={handleDownload}jn 
            className="mx-auto  mt-4 flex items-center gap-2 bg-[#934cce5e] py-1 hover:outline hover:outline-1 hover:outline-[#623686] px-8"
          >
            <span> Download CV</span> <FaDownload className="ml-4" />
          </button>
        </a>
      </div>
      <div className="mt-20">
        <Image src={omarPDF} alt="omar PDF" />
      </div>
    </Container>
  );
};
export default Resume;
