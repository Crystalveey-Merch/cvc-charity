import { Link } from "react-router-dom";
import { BrandButton } from "../Components";
import bgImg from "../assets/Images/ourWork/work-and-impact-kids.jpg";

export const OurWorkAndImpact = () => {
  const outComes = [
    {
      title: "300+",
      subTitle: "children supported",
    },
    {
      title: "9",
      subTitle: "years of impact",
    },
    {
      title: "5",
      subTitle: "schools supported",
    },
    {
      title: "3",
      subTitle: "countries supported",
    },
    {
      title: "10",
      subTitle: "projects supported",
    },
    {
      title: "100%",
      subTitle: "of your donation goes to the cause",
    },
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
              Our work and impact
            </h1>
            <hr className="w-[90vw] max-w-[700px] h-2.5 bg-white lg:max-w-[560px] lg:h-2 md:max-w-[520px] sm:max-w-[400px] sm:h-1.5" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1300px] mx-auto py-14 px-12 flex flex-col gap-6 xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div className="flex flex-col gap-10 items-center justify-center text-center">
          <p
            className="text-left text-[1.4rem] font-semibold  inline-flex flex-col gap-3 lg:text-xl sm:text-base"
            style={{ lineHeight: "1.6" }}
          >
            Over the last 9 years, CVC Charity has improved millions of
            children’s lives by supporting meaningful change where it stands to
            do the most good: in the heart of the community.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-left text-2xl font-bold text-black uppercase sm:text-xl">
            Our work
          </h4>
          {/* short escription */}
          <p className="text-left text-lg font-normal leading-relaxed text-gray-700 md:text-base">
            <span>
              At CVC charity, our mission is to create lasting positive impact
              in communities. We collaborate closely with local partners to
              design and implement sustainable, community-led projects that
              address the unique challenges faced by children and young people
              living in poverty.
            </span>
            <br />
            <br />
            <span>
              Our approach goes beyond immediate aid, focusing on long-term
              solutions that empower individuals and transform lives. By
              actively involving community members in the planning and execution
              of projects, we ensure that the initiatives are not only effective
              but also reflective of the community&rsquos needs and aspirations.
            </span>
            <br />
            <br />
            <span>
              We believe in the power of education, healthcare, and
              socio-economic development to break the cycle of poverty. Through
              our partnerships, we strive to create a brighter future for the
              next generation, fostering resilience, self-sufficiency, and a
              sense of community pride.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-left text-2xl font-bold text-black uppercase sm:text-xl">
            Our impact in numbers
          </h4>
          {/* short escription */}
          <p className="text-left text-lg font-normal leading-relaxed text-gray-700 md:text-base">
            <span>
              At CVC Charity, we are committed to delivering impactful results
              that make a difference. We are passionate about helping children
              and young people to reach their full potential and live a life
              free from poverty, abuse and discrimination.
            </span>
            <br />
            <br />
            <span>
              Our dedicated team works tirelessly to achieve the following
              outcomes:
            </span>
          </p>
          <ul className="mt-4 grid grid-cols-2 grid-flow-row gap-4">
            {outComes.map((item, index) => (
              <li
                key={index}
                className="flex flex-col gap-1 items-start text-left text-lg font-normal leading-relaxed text-gray-700 md:text-base"
              >
                <span className="text-4xl font-bold text-orange-700">
                  {item.title}
                </span>
                <span>{item.subTitle}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-3 flex flex-col gap-3">
          <p className="text-left text-lg font-normal leading-relaxed text-gray-700 md:text-base">
            <span>
              We are proud of our achievements to date and are committed to
              continuing to make a positive impact in the communities we serve.
            </span>
            <br />
            <br />
            <span>
              We are grateful to our donors and partners for their continued
              support. Together, we can create a better future for children and
              young people around the world.
            </span>
          </p>
          <p className="text-left text-lg font-normal leading-relaxed text-gray-700 md:text-base">
            Help us to make a difference. Donate today.
          </p>
          <Link to={"/support-us/donate"} onClick={() => window.scrollTo(0, 0)}>
            <BrandButton
              label={
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-white">Donate now</p>
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
      </div>
    </div>
  );
};
