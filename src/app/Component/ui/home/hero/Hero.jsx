import Container from "../../../Container/Container";
import "./hero.css";
import Image from "next/image";
import homeSvg from "../../../../../assists/omar.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Type from "../../../type/Type";

const Hero = () => {
  return (
    <>
      <Container className="!max-w-[1100px]">
        <div className="flex justify-between !items-center h-screen">
          <div className=" text-white">
            {" "}
            <duv md={7} className="home-header">
              <h1 className="text-[2.4rem]">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-[2.4rem]">
                {`I'M`}
                <strong className="text-[#c55cee]"> Omar Faruk</strong>
              </h1>

              <div className="text-[#c55cee] text-[2rem] font-bold">
                <Type />
              </div>
              <div>
                <button className="mt-4 flex items-center gap-2 bg-[#934cce5e] px-4 py-1 hover:outline hover:outline-1 hover:outline-[#623686]">
                  <span> Resume</span> <BsFillArrowRightCircleFill />
                </button>
              </div>
            </duv>
          </div>
          <div className=" text-white mt-0">
            <Image
              className="w-[380px] outline outline-gray-500 hover:outline-[#c55cee] rounded-[30px] -mt-10  rotate-3 hover:rotate-0  duration-300 ease-out"
              src={homeSvg}
              width={1000}
              height={1200}
              alt="omar faruk web designer web developer MARN stack developer"
            ></Image>
          </div>
        </div>
      </Container>
      <div className="heroBg"> </div>
    </>
  );
};
export default Hero;
