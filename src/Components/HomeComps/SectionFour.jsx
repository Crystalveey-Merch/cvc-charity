import donateHeartSVG from "../../assets/SVG/donate-heart.svg";
//import showKindnessSVG from "../../assets/SVG/volunteer-kindness-care-heart-love.svg";
import volunteerSVG from "../../assets/SVG/hand-yes-volunteer-fingers.svg";
import partnershipSVG from "../../assets/SVG/business-partnership.svg";
import trustSVG from "../../assets/SVG/real-estate-investment.svg";
import fundRaiseSVG from "../../assets/SVG/bank.svg";
import { BrandButton } from "../BrandButton";
import { Link } from "react-router-dom";

export const SectionFour = () => {
  const waysToSupport = [
    {
      id: 1,
      title: "Donate",
    },
    {
      id: 2,
      title: "Volunteer",
    },
    {
      id: 3,
      title: "Fundraise",
    },
    {
      id: 4,
      title: "Partnerships",
    },
    {
      id: 5,
      title: "Trusts",
    },
  ];
  return (
    <div className="py-10 px-6 w-full bg-emerald-700 flex flex-col items-center justify-center gap-10 lg:py-6 sm:px-4">
      <div className="w-full flex gap-16 justify-center items-center lg:flex-col lg:gap-10 sm:gap-8">
        <h4 className="text-white text-3xl font-bold font-serif sm:text-2xl">
          More ways to support us
        </h4>
        <ul className="flex gap-5 items-center sm:w-full sm:overflow-x-scroll sm:overflow-y-hidden">
          {waysToSupport.map((support) => (
            <li
              key={support.id}
              className="flex flex-col gap-2 items-center w-[120px] text-center xl:w-[110px]"
            >
              <div className="bg-orange-300 w-20 h-20 rounded-full flex justify-center items-center shadow-xl xl:w-16 xl:h-16">
                <img
                  src={
                    support.id === 1
                      ? donateHeartSVG
                      : support.id === 2
                      ? volunteerSVG
                      : support.id === 3
                      ? fundRaiseSVG
                      : support.id === 4
                      ? partnershipSVG
                      : trustSVG
                  }
                  alt="support"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-white text-base font-semibold capitalize sm:text-sm">
                {support.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Link to={"/support-us"} onClick={() => window.scrollTo(0, 0)}>
        <BrandButton
          label={
            <div className="flex items-center gap-2 justify-between">
              <p className="text-white">Get involved</p>
              <p className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </div>
          }
          className="rounded-none w-max bg-orange-600 py-3 px-6 xl:py-2"
        />
      </Link>
    </div>
  );
};
