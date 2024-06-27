const Cart = () => {
  return (
    <> 
      <div style={{ opacity: 1, transform: "none" }} className=" mt-10">
        <div className="relative group hover:cursor-pointer">
          <div className="size-16 bg-[#c55cee] absolute top-[-32px] left-10 rounded-full flex justify-center items-center group-hover:bg-transparent group-hover:ring-[2px] group-hover:ring-[#c55cee] group-hover:translate-x-10 duration-300 ease-out">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="size-6 text-white group-hover:text-[#c55cee]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
            </svg>
          </div>
          <div className=" bg-[#162033] flex flex-col justify-center items-center rounded-sm border-[0.5px] border-[#2C304A] group-hover:border-[#c55cee] duration-300 p-4">
            <h1 className="md:text-[30px] text-[24px] text-white font-Exo font-bold leading-6 mt-6">
              Web Development
            </h1>
            <p className="text-[16px] text-center text-textDark pt-7 font-Montserrat font-normal leading-6">
              Transform your online vision into reality with our expert Web
              Development services. Elevate your digital presence and captivate
              your audience with our innovative and tailored solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
