import bgImg from "../../assets/Images/volunteer-three.jpg";

export const PatnerWithUs = () => {
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
              Partner for a kinder world
            </h1>
            <hr className="w-[90vw] max-w-[700px] h-2.5 bg-white lg:max-w-[560px] lg:h-2 md:max-w-[520px] sm:max-w-[400px] sm:h-1.5" />
          </div>
        </div>
      </div>
      <div className="bg-white text-left py-14 px-24 w-full flex flex-col gap-10 items-center justify-center xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div className="flex flex-col gap-2 w-[1100px] lg:w-full">
          <p
            className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
            style={{ lineHeight: "1.6" }}
          >
            <span className="font-medium">
              Are you passionate about creating a kinder world for children?. We
              are always looking for new partners to help us achieve our mission
              of creating a kinder world for children.
            </span>
            <span>
              We&rsquo;re seeking passionate organizations across the globe to
              join us in this journey. Whether you bring expertise, resources,
              or unwavering dedication, there&rsquo;s a place for you in our
              network of changemakers. Together, we can amplify our impact and
              build a brighter future for every child
            </span>
          </p>
        </div>
        <div className="w-[1100px] flex flex-col justify-start gap-8 lg:w-full mt-10">
          {" "}
          {/* Added top margin */}
          <h2 className="text-left text-2xl font-bold">
            Why partner with us?
          </h2>{" "}
          {/* Added bottom margin */}
          <ul className="list-disc list-inside px-3 flex flex-col gap-4 text-left text-base font-normal sm:text-[0.9rem]">
            {" "}
            {/* Increased gap between list items */}
            <li className="">
              <strong>Access a diverse network:</strong> Expand your reach and
              tap into new markets through our extensive connections.
            </li>
            <li className="">
              <strong>Promote your brand:</strong> Benefit from exclusive
              opportunities to showcase your expertise and engage with our loyal
              audience.
            </li>
            <li className="">
              <strong>Drive innovation:</strong> Collaborate on groundbreaking
              projects that address real-world challenges and push the
              boundaries of your industry.
            </li>
            <li className="">
              <strong>Achieve your goals:</strong> Get personalized support and
              tailored solutions to meet your unique business objectives.
            </li>
            <li className="">
              <strong>Boost visibility:</strong> Elevate your brand awareness
              and reputation through strategic partnerships with a respected
              organization.
            </li>
            <li className="">
              <strong>Stay ahead of the curve:</strong> Gain access to
              cutting-edge insights and trends that keep you at the forefront of
              your field.
            </li>
            <li className="">
              <strong>Amplify your impact:</strong> Launch joint marketing
              campaigns that leverage our combined strengths and deliver mutual
              benefits.
            </li>
            <li className="">
              <strong>Unlock exclusive benefits:</strong> Enjoy priority access
              to new products, services, and opportunities, positioning you at
              the leading edge.
            </li>
            <li className="">
              <strong>Make a difference:</strong> Align your brand with
              meaningful social impact initiatives and contribute to a better
              world.
            </li>
            <li className="">
              <strong>Partnership on your terms:</strong> Discover flexible
              collaboration models that align perfectly with your needs and
              preferences.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
