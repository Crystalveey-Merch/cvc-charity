import { Link } from "react-router-dom";
import bgImg from "../../assets/Images/fundraise-two.jpg";
import runImg from "../../assets/Images/run.jpg";
import trekImg from "../../assets/Images/trek.jpg";
import cycleImg from "../../assets/Images/cycling.jpg";
import swimImg from "../../assets/Images/swim.jpg";
import { BrandButton } from "../../Components";

export const FundRaise = () => {
  const events = [
    {
      name: "Run for CVC Charity",
      description:
        "Lace up for a mission that moves you! Conquer scenic trails or city streets and empower children to reach their full potential. Every stride fuels their future!",
      link: "/support-us/fundraise/run-for-cvc-charity",
      image: runImg,
      category: "running",
      intensity: "moderate",
      duration: "variable",
      location: "varies",
      minimum_age: "16",
    },
    {
      name: "Trek for CVC Charity",
      description:
        "Embark on an unforgettable adventure that transcends mountains or local parks and transforms lives. Witness firsthand the impact your steps make on children in need. Together, we climb towards a brighter tomorrow!",
      link: "/support-us/fundraise/trek-for-cvc-charity",
      image: trekImg,
      category: "hiking",
      intensity: "high",
      duration: "multiple days",
      location: "specific location/region",
      minimum_age: "18",
    },
    {
      name: "Cycle for CVC Charity",
      description:
        "Gear up for a journey on two wheels, fueled by a passion for change. Pedal your way through breathtaking landscapes or neighborhood routes, knowing every kilometer fuels programs that empower children to chase their dreams.",
      link: "/support-us/fundraise/cycle-for-cvc-charity",
      image: cycleImg,
      category: "cycling",
      intensity: "variable",
      duration: "variable",
      location: "varies",
      minimum_age: "12 (with adult guardian)",
    },
    {
      name: "Swim for CVC Charity",
      description:
        "Make waves for a cause! Dive into the exhilarating Swim for CVC Charity and feel the power of every stroke as it ripples into a brighter future for children. Make a splash for a purpose you believe in.",
      link: "/support-us/fundraise/swim-for-cvc-charity",
      image: swimImg,
      category: "swimming",
      intensity: "variable",
      duration: "variable",
      location: "varies",
      minimum_age: "6 (with adult guardian)",
    },
    // {
    //   name: "Other Events",
    //   description:
    //     "Discover your adventure, fuel their future! From bake sales to danceathons, find the perfect way to raise funds for CVC Charity. Unleash your creativity, connect with your community, and make a difference, one step or sip or spin at a time.",
    //   link: "/support-us/fundraise/other-events",
    //   category: "other",
    //   intensity: "variable",
    //   duration: "variable",
    //   location: "varies",
    //   minimum_age: "all ages",
    // },
  ];

  return (
    <div className="flex flex-col mt-6 sm:mt-16">
      <div className="relative w-full">
        <img
          src={bgImg}
          alt="banner"
          className="w-full h-[calc(90vh)] object-cover object-top md:h-[560px] sm:h-[400px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>{" "}
        <div className="absolute top-0 left-0 mt-44 w-full h-full flex flex-col gap-16 justify-center px-8 text-center z-10 md:mt-36">
          <div className="w-max mx-auto flex flex-col gap-4 items-center md:w-full md:gap-3">
            <h1
              className="text-white font-extrabold text-5xl whitespace-prewrap lg:text-4xl sm:text-2xl"
              style={{ lineHeight: "1.3" }}
            >
              Fuel hope. Fundraise with us.
            </h1>
            <hr className="w-[90vw] max-w-[700px] h-2.5 bg-white lg:max-w-[560px] lg:h-2 md:max-w-[520px] sm:max-w-[400px] sm:h-1.5" />
          </div>
        </div>
      </div>
      <div className="bg-white text-left py-14 px-24 w-full flex flex-col gap-10 items-center justify-center xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div className="flex flex-col gap-2 w-[1100px] xl:w-[980px] lg:w-full">
          <p
            className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
            style={{ lineHeight: "1.6" }}
          >
            <span className="font-medium">
              Let&rsquo;s ignite change for children—together.
            </span>
            <span>
              Every act of generosity fuels hope for a brighter future.
              Fundraise for CVC Charity and make a lasting impact on
              children&rsquo;s lives.
            </span>
          </p>
        </div>
        <div className="w-[1100px] flex flex-col justify-start gap-8 xl:w-[980px] lg:w-full mt-10 lg:mt-5 md:mt-2 md:gap-6 sm:gp-4">
          <h2 className="text-left text-2xl font-bold sm:text-xl">
            Why Fundraise for CVC Charity?
          </h2>
          <ul className="list-disc list-inside px-3 flex flex-col gap-4 text-left text-base font-normal sm:text-[0.9rem]">
            <li className="">
              <strong>Fuel change for children:</strong> Your fundraising
              efforts will directly support programs that create a kinder world
              for children in need.
            </li>
            <li className="">
              <strong>Empower lives, transform futures:</strong> Every dollar
              raised helps provide education, healthcare, nutrition, and other
              essential resources to vulnerable children.
            </li>
            <li className="">
              <strong>Join a passionate community:</strong> Connect with a
              network of dedicated individuals who are committed to making a
              difference in children&rsquo;s lives.
            </li>
            <li className="">
              <strong>Make a meaningful impact:</strong> Witness firsthand the
              positive change your fundraising creates for children and their
              communities.
            </li>
            <li className="">
              <strong>Inspire others to act:</strong> Your generosity can spark
              a ripple effect, motivating others to join the movement for
              children&rsquo;s well-being.
            </li>
            <li className="">
              <strong>Experience personal fulfillment:</strong> Discover the joy
              and satisfaction of using your time and talents to make a lasting
              difference in the world.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 w-[1100px] xl:w-[980px] lg:w-full md:gap-6 sm:gap-4">
          <h2 className="text-left text-2xl font-bold sm:text-xl">
            Find a fundraising event
          </h2>
          <p
            className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
            style={{ lineHeight: "1.6" }}
          >
            Push your limits, ignite their dreams: From exhilarating runs to
            scenic treks, join our challenges and empower children with every
            step.
          </p>
          <div className="grid grid-cols-3 grid-flow-row gap-4 lg:grid-cols-2 sm:grid-cols-1 sm:gap-5">
            {/* show first three */}
            {events.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="min-h[700px] flex flex-col gap-2.5 border border-gray-300 rounded-md p-4 sm:p-5 sm:gap-3.5"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-60 object-cover object-center rounded-md"
                />
                <div className="flex-grow flex flex-col justify-between gap-2.5">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-left text-xl font-bold sm:text-lg">
                      {event.name}
                    </h3>
                    <p
                      className="text-left text-base font-normal sm:text-sm"
                      style={{ lineHeight: "1.6" }}
                    >
                      {event.description}
                    </p>
                  </div>

                  <Link
                    to={event.link}
                    className="justify-self-end text-left text-base font-semibold text-[#FF4818] sm:text-sm hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <BrandButton
            label={
              <div className="flex items-center gap-2 justify-between">
                <p className="text-white">View All Events</p>
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
        </div>
        <div className="flex flex-col gap-8 w-[1100px] xl:w-[980px] lg:w-full md:gap-6 sm:gap-4">
          <h2 className="text-left text-2xl font-bold sm:text-xl mb-2 sm:mb-0">
            Host Your Own Fundraiser
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            <p className="text-left text-lg font-normal md:text-base sm:text-[0.9rem]">
              Make a difference, your way. CVC Charity is here to support you
              every step of the way as you plan and execute your own unique
              fundraiser. We&rsquo;ll provide you with:
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2">
                  A customized promotional toolkit to help you spread the word
                </li>
                <li className="mb-2">
                  A personal fundraising page on our website to track progress
                  and donations
                </li>
                <li className="mb-2">
                  Expert guidance and support from our dedicated fundraising
                  team
                </li>
              </ul>
            </p>
            <p className="text-left text-lg font-normal md:text-base sm:text-[0.9rem]">
              Ready to make an impact? Contact us today at{" "}
              <span className="text-[#FF4818] font-semibold">
                <a href="mailto:fundraising@crystalveey.com">
                  fundraising@crystalveey.com
                </a>
              </span>{" "}
              to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
