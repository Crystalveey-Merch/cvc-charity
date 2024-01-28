/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const SupportUs = ({ handleMenu, setCurrentTab }) => {
  return (
    <div className="h-full bg-white flex flex-col gap-2.5 py-3.5 px-3">
      <button
        onClick={() => setCurrentTab("default")}
        className="text-orange-800 flex gap-1.5 items-center pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-3 h-3 pb-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p className="text-[#000] font-semibold text-sm capitalize">Go Back</p>
      </button>
      <Link
        onClick={handleMenu}
        to="/support-us"
        className="flex justify-between pb-2 py-2 border-b-2 border-gray-300"
      >
        <p className="text-black font-bold text-base capitalize">Support Us</p>
      </Link>
      <Link
        onClick={handleMenu}
        to="/support-us/donate"
        className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <p className="text-black font-semibold text-sm capitalize">
          Make a donation
        </p>
      </Link>
      <Link
        onClick={handleMenu}
        to="/support-us/volunteer"
        className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <p className="text-black font-semibold text-sm capitalize">
          Volunteer with us
        </p>
      </Link>
      <Link
        onClick={handleMenu}
        to="/fundraise"
        className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <p className="text-black font-semibold text-sm capitalize">Fundraise</p>
      </Link>
      <Link
        onClick={handleMenu}
        to="/partnerships"
        className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <p className="text-black font-semibold text-sm capitalize">
          Patner with us
        </p>
      </Link>
      <Link
        onClick={handleMenu}
        to="/trusts"
        className="flex justify-between pb-2 py-1.5 border-b-2 border-gray-300"
      >
        <p className="text-black font-semibold text-sm capitalize">Trusts</p>
      </Link>
    </div>
  );
};
