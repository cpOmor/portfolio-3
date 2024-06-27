import Container from "../../../Container/Container";
import {
  BsAndroid2,
  BsCodeSlash,
  BsFillMenuButtonWideFill,
  BsGlobe2,
  BsTextareaResize,
} from "react-icons/bs";
import { DiCss3Full, DiW3C } from "react-icons/di";
import { FaDocker, FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

// const services = [
//   {
//     id: 1,
//     title: "Figma to HTML, CSS3",
//     content:
//       "I can convert a Figma or PSD design into a fully functional HTML and CSS (or Tailwind CSS) website. This guide provides a structured approach, but feel free to adapt it to your specific needs and workflow.",
//     icon: <DiCss3Full className="size-6" />,
//   },

//   {
//     id: 2,
//     title: "Figma to React, NextJS",
//     content:
//       "I can convert a Figma or PSD design into a fully functional React and Next.js website. Let’s dive into the process and explore the best practices for converting your Figma or PSD designs into a polished React and Next.js website.",
//     icon: <FaReact className="size-6" />,
//   },

//   {
//     id: 3,
//     title: "Responsive Design",
//     content:
//       "With our knowledge in responsive design, you can improve the user experience on all devices. With our solutions, you can be sure that your website will adjust to any screen size and yet have a consistent and appealing experience.",
//     icon: <BsTextareaResize className="size-6" />,
//   },
//   {
//     id: 4,
//     title: "Web Design",
//     content:
//       "Using a minimalistic layout with lots of white space, making sure the website is responsive on all devices, and adding eye-catching graphics to provide an immersive experience are all essential components of creating a modern website design.",
//     icon: <BsCodeSlash className="size-6" />,
//   },
//   {
//     id: 5,
//     title: "Web Development",
//     content: "",
//     icon: <BsTextareaResize className="size-6" />,
//   },
//   {
//     id: 6,
//     title: "Native APP",
//     content: "",
//     icon: <BsAndroid2 className="size-6" />,
//   },
//   {
//     id: 7,
//     title: "Web Application",
//     content: "",
//     icon: <BsGlobe2 className="size-6" />,
//   },
//   {
//     id: 8,
//     title: "W3C Validation",
//     content: "",
//     icon: <DiW3C className="size-8" />,
//   },
//   {
//     id: 9,
//     title: "Backend Development",
//     content: "",
//     icon: <BsFillMenuButtonWideFill className="size-6" />,
//   },
//   {
//     id: 9,
//     title: "Docker",
//     content: "",
//     icon: <FaDocker className="size-6" />,
//   },
// ];


const services = [
  {
    id: 1,
    title: "Figma to HTML, CSS3",
    content:
      "I can convert a Figma or PSD design into a fully functional HTML and CSS (or Tailwind CSS) website. This guide provides a structured approach, but feel free to adapt it to your specific needs and workflow.",
    icon: <DiCss3Full className="size-6" />,
  },
  {
    id: 2,
    title: "Figma to React, NextJS",
    content:
      "I can convert a Figma or PSD design into a fully functional React and Next.js website. Let’s dive into the process and explore the best practices for converting your Figma or PSD designs into a polished React and Next.js website.",
    icon: <FaReact className="size-6" />,
  },
  {
    id: 3,
    title: "Responsive Design",
    content:
      "With our knowledge in responsive design, you can improve the user experience on all devices. With our solutions, you can be sure that your website will adjust to any screen size and yet have a consistent and appealing experience.",
    icon: <BsTextareaResize className="size-6" />,
  },
  {
    id: 4,
    title: "Web Design",
    content:
      "Using a minimalistic layout with lots of white space, making sure the website is responsive on all devices, and adding eye-catching graphics to provide an immersive experience are all essential components of creating a modern website design.",
    icon: <BsCodeSlash className="size-6" />,
  },
  {
    id: 5,
    title: "Web Development",
    content:
      "From developing static websites to dynamic web applications, I provide comprehensive web development services that cater to your business needs. I ensure your website is robust, scalable, and highly performant.",
    icon: <BsTextareaResize className="size-6" />,
  },
  {
    id: 6,
    title: "Native APP",
    content:
      "I specialize in developing native applications for both Android and iOS platforms. My focus is on delivering high-quality apps that provide a seamless user experience, leveraging the full capabilities of each platform.",
    icon: <BsAndroid2 className="size-6" />,
  },
  {
    id: 7,
    title: "Web Application",
    content:
      "I build web applications that are fast, secure, and scalable. Whether you need a single-page application or a complex web platform, I have the expertise to deliver solutions that meet your requirements.",
    icon: <BsGlobe2 className="size-6" />,
  },
  {
    id: 8,
    title: "W3C Validation",
    content:
      "Ensuring that your website adheres to W3C standards is crucial for accessibility and performance. I provide W3C validation services to ensure your site is fully compliant with web standards.",
    icon: <DiW3C className="size-8" />,
  },
  {
    id: 9,
    title: "Backend Development",
    content:
      "I offer backend development services to build the server-side logic and database management for your web applications. From RESTful APIs to microservices, I ensure your backend is efficient and scalable.",
    icon: <BsFillMenuButtonWideFill className="size-6" />,
  },
  {
    id: 10,
    title: "Docker",
    content:
      "Leveraging Docker for containerization, I help streamline your development and deployment processes. Docker ensures your applications are portable, scalable, and run consistently across different environments.",
    icon: <FaDocker className="size-6" />,
  },
];


// I will convert psd to react or figma to react or next js using tailwind css

const Services = () => {
  return (
    <Container>
      <div className="mt-32 items-center">
        <div className=" mb-10 w-1/2">
          <div>
            <p>SERVICES</p>
          </div>
          <h1 className="font-normal">
            How I Assist
            <span className="text-[#c55cee]  font-semibold">
              {" "}
              My Clients
            </span>{" "}
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {services.map((item, i) => (
            <div key={i}>
              <div style={{ opacity: 1, transform: "none" }} className=" mt-10">
                <div className="relative group hover:cursor-pointer">
                  <div className="size-16 absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#c55cee] group-hover:translate-x-10 duration-300 ease-out bg-[#c55cee] !group-hover:bg-[#0f0d0f] ">
                    {item.icon}
                  </div>
                  <div className=" bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#c55cee] duration-300 p-4">
                    <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
                      {item?.title}
                    </h1>
                    <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Services;
