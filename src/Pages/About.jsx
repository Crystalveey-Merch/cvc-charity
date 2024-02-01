import bgImg from "../assets/Images/Donate/donate-2.jpg";

export const About = () => {
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
    <div className="flex flex-col">
      <div className="relative w-full">
        <img
          src={bgImg}
          alt="banner"
          className="w-full h-[calc(94vh)] object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 mt-24 w-max h-full flex flex-col gap-16 justify-center px-28 text-left z-10 xl:px-6 xl:mt-24 lg:px-5 lg:gap-8 md:w-full md:justify-end md:mt-0 md:pb-28">
          <h1
            className="max-w-2xl text-white font-extrabold text-5xl 2xl:text-[rem] 2xl:max-w-[38rem] xl:max-w-[31rem] xl:text-[2.8rem] lg:max-w-sm lg:text-[2.5rem] md:max-w-full sm:text-[2.3rem]"
            style={{ lineHeight: "1.3" }}
          >
            <span>Hope Ignites Here</span>
            <br />
            <span className="text-yellow-300 text-3xl xl:text-2xl lg:text-xl sm:text-lg">
              Where Potential Meets Opportunity.
            </span>
          </h1>
        </div>
      </div>
      <div className="bg-white text-left py-14 px-24 w-full flex flex-col gap-10 items-center justify-center xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div className="w-[1200px] flex flex-col gap-6 xl:w-[980px] lg:w-full">
          <h2 className="text-3xl font-bold text-left">Who we are</h2>
          <div className="flex gap-16 lg:flex-col lg:gap-10">
            <div className="w-1/2 flex flex-col gap-5 lg:w-full">
              <p
                className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
                style={{ lineHeight: "1.6" }}
              >
                <span className="font-medium">
                  At CVC Charity, compassion isn&rsquo;t just a word, it&rsquo;s
                  the driving force behind everything we do.
                </span>
                <span>
                  We&rsquo;re a team of passionate individuals dedicated to
                  empowering children and families facing challenges. <br /> We
                  believe every young person deserves a chance to thrive, and we
                  work tirelessly to create brighter futures through education,
                  support services, and community outreach. <br /> Join us in
                  building a world where hope blossoms and potential takes
                  flight.
                </span>
              </p>
            </div>
            <img src={bgImg} alt="about" className="w-1/2 h-[300px] lg:w-full lg:max-w-[600px] sm:h-[280px]" />
          </div>
        </div>
        <div className="w-[1200px] flex flex-col gap-3 xl:w-[980px] lg:w-full">
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
      </div>
    </div>
  );
};
