import bgImg from "../../assets/Images/Donate/donate-2.jpg";

export const DonateItems = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <img
          src={bgImg}
          alt="banner"
          className="w-full h-[calc(94vh)] object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 mt-24 w-max h-full flex flex-col gap-16 justify-center px-8 text-left z-10 xl:px-6 xl:mt-24 lg:px-5 lg:gap-8 md:w-full md:justify-end md:mt-0 md:pb-28">
          <h1
            className="max-w-2xl font-finger-paint text-white font-extrabold text-7xl 2xl:text-[4rem] 2xl:max-w-[38rem] xl:max-w-[31rem] xl:text-[3.2rem] lg:max-w-sm lg:text-[2.5rem] md:max-w-full sm:text-[2.3rem]"
            style={{ lineHeight: "1.3" }}
          >
            Your pen&rsquo;s poised to{" "}
            <u className="text-yellow-300 border-black underline-black">
              rewrite
            </u>{" "}
            a child&rsquo;s future
          </h1>
        </div>
      </div>
      <div className="bg-white text-left py-14 px-24 w-full flex flex-col gap-10 items-center justify-center xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div className="flex flex-col gap-2 w-[1100px] xl:w-[980px] lg:w-full">
          <p
            className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
            style={{ lineHeight: "1.6" }}
          >
            <span className="font-medium">
              Donate your pre-loved items to our charity shops
            </span>
            <span>
              Share your gently used clothing, books, and household items with
              our charity shops and help support CVC Charity. Together, we can
              reimagine what it means to give back and make a real difference in
              the lives of children and families in need.
            </span>
          </p>
        </div>
        <div className="w-[1100px] flex flex-col justify-start gap-7 xl:w-[980px] lg:w-full mt-10 lg:mt-5 md:mt-2 md:gap-6 sm:gp-4">
          <h2 className="text-left text-2xl font-bold sm:text-xl">
            Why donate to CVC Charity?
          </h2>
          <p
            className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
            style={{ lineHeight: "1.6" }}
          >
            Your generous donations play a crucial role in supporting our
            mission to assist young people in need. By contributing your
            gently-used items, you contribute to environmental sustainability
            and provide new opportunities for your items. Your support also
            helps fund our programs and services dedicated to assisting children
            and families facing challenges.
          </p>
        </div>
        <div className="w-[1100px] flex flex-col justify-start gap-8 xl:w-[980px] lg:w-full mt-10 lg:mt-5 md:mt-2 md:gap-6 sm:gp-4">
          <h2 className="text-left text-2xl font-bold sm:text-xl">
           What we can accept
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-3 text-left text-base font-normal sm:gap-2.5 sm:text-[0.9rem]">
          <li>Gently used and good quality clothing, shoes, and accessories</li>
            <li>Books, CDs, DVDs, and vinyl records</li>
            <li>Jewellery</li>
            <li>Music, movies, and video games</li>
            <li>Technology, including computers, laptops, tablets, and phones</li>
            <li>Household items, including kitchenware, home decor, and small appliances</li>
            <li>Furniture</li>
            <li>Antiques and collectibles</li>
        </ul>
        </div>
      </div>
    </div>
  );
};
