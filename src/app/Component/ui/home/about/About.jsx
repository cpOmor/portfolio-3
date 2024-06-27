import Container from "../../../Container/Container";
import { HiOutlineSun } from "react-icons/hi";
import about from "../../../../../assists/about.png";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div id="about" className="flex  justify-between mt-32 items-center">
        <div className=" mb-10 w-1/2">
          <div>
            <p>ABOUT ME</p>
          </div>
          <h1 className=" text-justify">
            LET ME{" "}
            <span className="text-[#c55cee]  font-semibold">{`INTRODUCE`}</span>{" "}
            MYSELF
          </h1>
          <div className="mt-10">
            <h3>
              Hi Everyone, I am{" "}
              <span className="text-[#c55cee]">Omar Faruk </span>
            </h3>
            <h3>
              I am a passionate
              <span className="text-[#c55cee]"> full stack developer </span>
              specializing in the
              <span className="text-[#c55cee]"> MREN </span>
              (MongoDB, React, Express.js, Node.js) and
              <span className="text-[#c55cee]"> PREN </span>
              (PostgreSQL, React, Express.js, Node.js) stacks. Additionally,{" "}
              {`I'm`} an
              <span className="text-[#c55cee]"> SEO expert </span> (keyword
              recharge & setup, image, h1, h2 and more), adept at crafting web
              applications with strategic SEO optimization using
              <span className="text-[#c55cee]">
                {" "}
                React, Next.js, TypeScript, NodeJS, Express, Mongoose{" "}
              </span>
              and
              <span className="text-[#c55cee]"> Firebase </span>. With a knack
              for contemporary frameworks like
              <span className="text-[#c55cee]">
                {" "}
                Tailwind CSS, Bootstrap, Material UI, and Ant Design
              </span>
              .
            </h3>
            <h3>
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <span className="text-[#c55cee]">
                {" "}
                <i>express.js</i>{" "}
              </span>{" "}
              and Modern Javascript Library and Frameworks.
            </h3>

            <div id="skills " className="grid grid-cols-2 mt-6">
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Tailwind css</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Bootstrap</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Shadcn Ui</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Ant Design</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Material UI</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>JavaScript (ES6+)</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>React.js</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Next js</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Next Auth</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Firebase</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Redux</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Node.js</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Express.js</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>MongoDB</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>Mongoose</p>
              </div>

              <div className="flex gap-3 items-center">
                <HiOutlineSun className=" sun-loader" />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] ">
          <Image
            className="w-[400px]"
            src={about}
            width={500}
            height={500}
            alt="about-us"
          ></Image>
        </div>
      </div>
    </Container>
  );
};
export default About;
