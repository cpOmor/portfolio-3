"use client";
import Container from "../../../Container/Container";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./contact.css";

export const Contact = () => {
  const [isOn, setIsOn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      // Add form submission logic here
      console.log("Form submitted:", formData);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <div id="contact">
      <div className="mt-32">
        <Container>
          <div className="md:flex pt-4 items-center">
            <div className="relative md:w-1/2 bg-white rounded-lg ">
              {!isOn && (
                <div className=" md:p-10  p-6">
                  <h2 className="text-black text-[#72b43] md:text-[2.5rem] text-[1.5rem] font-bold">
                    Send Us a <span className="text-[#c55cee]">Message</span>
                  </h2>
                  <form onSubmit={onSubmit} className="md:mt-8 ">
                    <div className="mt-4">
                      <div className="flex md:flex-row flex-col  gap-4 items-center">
                        <div className="w-full">
                          <input
                            className="placeholder:text-md border hover:border-red-300 placeholder:text-base px-2 py-4 text-gray-500 focus:-[#f2849e]"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="w-full">
                          <input
                            className="placeholder:text-md border hover:border-red-300 placeholder:text-base  px-2 py-4 text-gray-500 focus:-[#f2849e]"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-row flex-col  gap-4 items-center mt-4">
                        <div className="w-full">
                          <input
                            className="placeholder:text-md border hover:border-red-300 placeholder:text-base  px-2 py-4 text-gray-500 focus:-[#f2849e]"
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            pattern="[0-9]+"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="w-full">
                          <input
                            className="placeholder:text-md border hover:border-red-300 placeholder:text-base  px-2 py-4 text-gray-500 focus:-[#f2849e]"
                            type="url"
                            name="website"
                            placeholder="Website"
                            value={formData.website}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-col">
                          <textarea
                            className="placeholder:text-md border hover:border-red-300 placeholder:text-base  px-2 py-4 text-gray-500 focus:-[#f2849e]"
                            name="message"
                            placeholder="Message"
                            rows="8"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex gap-4">
                      <input
                        type="submit"
                        value="Contact us"
                        className="md:w-1/2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-2 px-4 rounded-full mt-8 font-semibold uppercase text-[17px] text-white"
                      />
                    </div>
                  </form>
                </div>
              )}

              {isOn && (
                <div className="overflow-hidden">
                  <div className="w-full">
                    <iframe
                      width="720"
                      height="600"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=301%20Victoria%20Rd,%20Marrickville%20NSW%202204,+(Dot2Dot%20Printing%20Pty%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      {/* <a href="https://www.gps.ie/">gps trackers</a> */}
                    </iframe>
                  </div>
                </div>
              )}

              <div
                onClick={() => setIsOn(!isOn)}
                className="md:absolute md:bottom-6 md:right-6 md:w-1/2 flex gap-2 items-center md:justify-end justify-center text-gray-400  md:px-0 mx-6 -mt-2  rounded-full md:mt-8  font-semibold uppercase text-[17px]"
              >
                {!isOn ? (
                  <div className="flex items-center border w-full md:w-auto justify-center rounded-full gap-2  px-6 p-2  mb-4">
                    <p>VIEW MAP</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                ) : (
                  <span className="absolute md:flex bottom-4 flex items-center gap-2 bg-white rounded-full px-6 p-2 cursor-pointer">
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>

            <div className="md:w-1/2 md:pl-20 md:py-8 pb-12 h-[400px] flex flex-col justify-between text-white">
              <div className="md:mt-0 mt-6">
                <p>Give us a call</p>
                <div className="md:flex-col flex gap-2">
                  <h2 className=" text-[#c55cee] md:text-3xl text-xl md:font-extrabold font-bold">
                    +880 19702 99035
                  </h2> or
                  <h2 className=" text-[#c55cee] md:text-3xl text-xl md:font-extrabold font-bold">
                    +880 18373 91145
                  </h2>
                </div>
              </div>
              <div className="md:mt-0 mt-6">
                <p>SEND US AN EMAIL</p>
                <h2 className=" text-[#c55cee] md:text-3xl text-xl md:font-extrabold font-bold">
                  cpomar121@gmail.com
                </h2>
              </div>
              <div className="md:mt-0 mt-6">
                <p>FIND ME ON</p>
                <div className="md:flex-col flex gap-2">
                  <ul className="home-about-social-links ">
                    <li className="social-icons">
                      <a
                        href="https://github.com/omar-web-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>

                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/omar-web-dev"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons "
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="md:mt-0 mt-6">
                <p>Follow us on</p>

                <div className="flex gap-2">
                  {" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-8 w-8  p-2 rounded-sm bg-[#a6d1ed] text-[#172b43] hover:bg-[#0057ff]"
                      aria-hidden="true"
                      data-prefix="fab"
                      data-icon="behance"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-8 w-8  p-2 rounded-sm bg-[#a6d1ed] text-[#172b43] hover:bg-[#6245fe] hover:text-[#ffffff]"
                      aria-hidden="true"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-8 w-8  p-2 rounded-sm bg-[#a6d1ed] text-[#172b43] hover:bg-[#dd4b39] hover:text-[#ffffff]"
                      aria-hidden="true"
                      data-prefix="fab"
                      data-icon="google-plus-g"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.16 53.436 121.275 118.92 121.275 75.936 0 104.453-50.236 108.266-76.129H204.8v-60.952h181.261zM556.8 224h-51.2v-51.2h-51.2V224h-51.2v51.2h51.2v51.2h51.2V275.2h51.2V224z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg
                      className="h-8 w-8  p-2 rounded-sm bg-[#a6d1ed] text-[#172b43] hover:bg-[#3b5998] hover:text-[#ffffff]"
                      aria-hidden="true"
                      data-prefix="fab"
                      data-icon="facebook"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M240 272l16-80h-96v-64c0-17.673 14.327-32 32-32h64v-80h-64C96.327 16 64 48.327 64 80v352c0 31.673 32.327 64 64 64h160c35.29 0 64-28.71 64-64v-160h-80z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
