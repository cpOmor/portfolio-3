// components/ProductCart.js
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

const ProductCart = () => {
  return (
    <>
      {[0, 0, 0].map((item, i) => (
        <div key={i}>
          <div className="group relative w-full max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className=" inset-0 transform transition-transform duration-300 ease-out group-hover:scale-105">
              <div className="p-6 bg-gray-500">
                <Image
                  src="https://cdn.dribbble.com/userupload/8240015/file/original-32d0389365bc3e08fc7263628ea34106.jpeg?resize=1024x768"
                  alt="Events App"
                  layout="responsive"
                  width={400}
                  height={300}
                  // className="object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-out opacity-10 group-hover:opacity-100 flex items-center justify-center">
              <div className="text-center p-4"></div>
            </div>
            <div className="absolute group-hover:bottom-4 -bottom-14 left-4 right-4 duration-100 translate-x-0 flex space-x-2">
              <div className="flex justify-between items-center w-full px-2 pb-2">
                <div>
                  <h1 className="text-white text-xl  font-bold mb-2">
                    Events App
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 bg-white rounded-full group-hover:bg-red-500 transition-colors duration-300">
                    <HiExternalLink />
                  </button>
                  <button className="p-2 bg-white rounded-full group-hover:bg-red-500 transition-colors duration-300">
                    <HiExternalLink />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCart;
