import imgOne from "../assets/Images/SecThree/image-one.jpg";
import imgTwo from "../assets/Images/SecThree/image-two.jpg";
import imgThree from "../assets/Images/SecThree/image-three.jpg";
import imgFour from "../assets/Images/SecThree/image-four.jpg";
import { Link } from "react-router-dom";

export const SupportUs = () => {
  const support = [
    {
      id: 1,
      title: "Donate",
      //   short description
      description:
        "Join us in our mission to help young people. We rely on your donations to help us support young people. ",
      img: imgOne,
      url: "/support-us/donate",
    },
    {
      id: 2,
      title: "Volunteer",
      description:
        "Volunteers are the lifeblood of our organisation. Join us in our mission to help young people.",
      img: imgTwo,
      url: "/support-us/volunteer",
    },
    {
      id: 3,
      title: "Fundraise",
      description:
        "From bake sales to sponsored runs, there are many ways to raise money for our charity.",
      img: imgThree,
      url: "/support-us/fundraise",
    },
    {
      id: 4,
      title: "Partnerships",
      description:
        "Your business can help us make a difference. Become a corporate partner today.",
      img: imgFour,
      url: "/support-us/partnerships",
    },
    {
      id: 5,
      title: "Trusts",
      description:
        "We work with trusts and foundations to help young people in need.",
      img: imgOne,
      url: "/support-us/trusts",
    },
  ];

  return (
    <div className="mt-24 py-20 flex flex-col gap-20 sm:px-6">
      <div className="flex flex-col justify-center items-center gap-7">
        <h1 className="text-7xl font-extrabold text-center lg:text-[3.5rem] sm:text-5xl">Support us</h1>
        <p className="text-center text-lg font-normal w-[600px] md:text-base sm:max-w-[430px] sm:w-full">
          We&rsquo;ve been helping young people for over 15 years. But we
          can&rsquo;t do it alone. We need your support.
        </p>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center">
        {/* first support */}
        <div className="flex gap-12 sm:hidden">
          <Link to={support[0].url}>
            <div className="group relative flex w-[750px] h-[450px] rounded-xl bg-[#fdd97d] overflow-hidden xl:w-[600px] xl:h-[380px] lg:w-[660px] lg:h-[330px] md:w-[600px] sm:w-full">
              <div
                className="w-full flex justify-center items-center flex-grow bg-[#fdd97d] rounded-l-xl z-10 lg:w-[300px]"
                //   clippath to cut a circular part of right
              >
                <div className="flex flex-col gap-4 px-6 w-[300px] xl:w-[280px]">
                  <h4 className="text-2xl font-bold text-center pt-10">
                    {support[0].title}
                  </h4>
                  <p
                    className="text-center text-sm font-medium capitalize"
                    style={{ lineHeight: "1.9" }}
                  >
                    {support[0].description}
                  </p>
                </div>
              </div>
              <img
                src={support[0].img}
                alt="support"
                className="w-[560px] h-full rounded-r-xl rounded-l-[10%] group-hover:scale-110 transition-all transform duration-300 ease-in-out xl:w-[300px] lg:w-[315px] md:w-[300px]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)", // Adjust the points as needed
                }}
              />
            </div>
          </Link>
          {/* 2nd support */}
          <Link to={support[1].url} className="block lg:hidden">
            <div className="group w-[350px] h-[450px] bg-gray-50 rounded-xl overflow-hidden xl:w-[280px] xl:h-[380px]">
              <img
                src={support[1].img}
                alt="support"
                className="w-full h-[250px] rounded-t-xl rounded-b-xl group-hover:scale-110 transition-all transform duration-300 ease-in-out xl:h-[180px]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", // Adjust the points as needed
                }}
              />
              <div className="flex flex-col gap-4 p-6 z-10">
                <h4 className="text-2xl font-bold text-center">
                  {support[1].title}
                </h4>
                <p
                  className="text-center text-sm font-medium capitalize"
                  style={{ lineHeight: "1.9" }}
                >
                  {support[1].description}
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* Exclude first and second support */}
        <ul className="flex gap-12 lg:grid lg:grid-cols-2 lg:grid-flow-row sm:flex sm:flex-col">
          {support.map((support) => (
            <Link
              to={support.url}
              key={support.id}
              className={`
             ${support.id === 2 ? "hidden lg:block" : support.id === 1 ? "hidden sm:block" : "block"}`}
            >
              <li className="group flex flex-col gap-4 w-[350px] h-[450px] bg-gray-50 rounded-xl overflow-hidden xl:w-[280px] xl:h-[380px] lg:w-[306px] md:w-[280px] sm:max-w-[350px] sm:w-full">
                <img
                  src={support.img}
                  alt="support"
                  className="w-full h-[250px] rounded-t-xl rounded-b-xl group-hover:scale-110 transition-all transform duration-300 ease-in-out xl:h-[180px]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)", // Adjust the points as needed
                  }}
                />
                <div className="flex flex-col gap-4 p-6 z-10">
                  <h4 className="text-2xl font-bold text-center">
                    {support.title}
                  </h4>
                  <p
                    className="text-center text-sm font-medium capitalize"
                    style={{ lineHeight: "1.9" }}
                  >
                    {support.description}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
