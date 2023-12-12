/* eslint-disable react/prop-types */
//import { Link } from "react-router-dom";

export const Default = ({ setCurrentTab }) => {
  return (
    <div className="h-full bg-white flex flex-col gap-2.5 py-3.5 px-3">
      <div className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300">
        <p className="text-black font-semibold text-sm capitalize">
          Our work and impact
        </p>
      </div>
      <div className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300">
        <p className="text-black font-semibold text-sm capitalize">
          How we can help
        </p>
      </div>
      <button
        onClick={() => setCurrentTab("support")}
        className="text-orange-800 flex justify-between pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <p className="text-black font-semibold text-sm capitalize">
          Support us
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="w-4 h-4 transition duration-100 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300">
        <p className="text-black font-semibold text-sm capitalize">about us</p>
      </div>
    </div>
  );
};
