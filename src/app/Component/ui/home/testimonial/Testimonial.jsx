import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
// import testimonialImage from './path-to-your-image.png'; // Adjust the path to your uploaded image
// import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="mt-52 overflow-hidden bg-indigo-900 text-white p-8  shadow-xl mx-auto my-10 relative">
      <h2 className="text-2xl font-bold text-center mb-4">
        Your feedback and review are important to us!
      </h2>

      <div className="grid grid-cols-3 gap-4 ">
        {[0, 0, 0].map((item, i) => (
          <div key={i}>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg relative">
              <Image
                src="https://thumbs.dreamstime.com/b/vector-web-site-design-template-customer-review-rating-client-satisfaction-management-survey-landing-page-concepts-website-141939119.jpg?w=1200"
                alt="Profile"
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white"
                width={400}
                height={500}
              />
              <h3 className="text-xl font-semibold text-center">Fantastic!</h3>
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="text-center text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 h-14 w-14 rounded-full"></div>
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 h-16 w-16 rounded-full"></div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 h-10 w-10 rounded-full"></div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-gray-500 h-8 w-8 rounded-full"></div>
    </div>
  );
};

export default Testimonial;
