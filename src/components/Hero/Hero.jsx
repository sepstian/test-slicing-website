import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="text-center md:text-left p-6 sm:p-10 bg-gray-100 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        We are creative agency.
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
        We build digital work that
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        you will love!
      </h2>
      <div>
        <button className="bg-yellow-500 w-auto text-white px-6 py-3 rounded flex items-center gap-2 mx-auto md:mx-0">
          Explore our portfolio
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
