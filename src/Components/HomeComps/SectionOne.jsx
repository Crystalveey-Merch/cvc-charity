import imgOne from "../../assets/Images/SecOne/one.jpg";
import imgTwo from "../../assets/Images/SecOne/two.jpg";
import imgThree from "../../assets/Images/SecOne/three.jpg";

export const SectionOne = () => {
  const supports = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Our mission at Cvc charity is to alleviate poverty and improve the quality of life by providing access to education, healthcare, and sustainable livelihood opportunities.",
      image: imgThree,
    },
    {
      id: 2,
      title: "Our focus",
      description:
        "Our unwavering focus is on improving the lives of individuals and communities in need. We work tirelessly to provide essential resources, support, and hope to those who require it the most.",
      image: imgTwo,
    },
    {
      id: 3,
      title: "Our impact",
      description:
        "Our impact can be measured in the smiles we bring, the lives we transform, and the communities we uplift. We're dedicated to leaving a positive, lasting mark on the world through our charitable initiatives.",
      image: imgOne,
    },
  ];

  return (
    <div className="py-20 px-32 2xl:px-20 xl:px-8 lg:px-4 md:py-16 sm:pb-8">
      <ul className="flex gap-0.5 w-full flex-nowrap justify-center md:flex-col">
        {supports.map((support) => (
          <li
            className="relative flex-1 h-[300px] group mb-28 xl:mb-36 md:flex-[unset] md:h-[280px] md:mb-52"
            key={support.id}
          >
            <img
              src={support.image}
              alt={support.title + "image"}
              className="w-full h-full"
            />
            <div className="hidden bg-blue-800 bg-opacity-40 absolute top-0 left-0 h-full w-full z-10 group-hover:inline-block duration-500 ease-in-out transition-all transform"></div>
            <div className="absolute z-10 w-[90%] min-h-full h-max top-56 left-[24px] bg-white flex flex-col gap-10 justify-center items-center text-center p-8 group-hover:top-44 duration-500 ease-in-out transition-all transform cursor-pointer 2xl:left-[21px] xl:p-4 xl:w-[92%] xl:left-[13px] lg:left-[10px] lg:min-h-max lg:p-4 md:w-[87%] md:left-[40px] sm:left-[34px] sm:w-[82%] sm:top-40 sm:group-hover:top-36">
              <div className="flex flex-col gap-6">
                <h2 className="capitalize text-green-800 font-bold text-[32px] lg:text-3xl">
                  {support.title}
                </h2>
                <p
                  className="text-base font-semibold lg:text-sm"
                  style={{ lineHeight: "1.5" }}
                >
                  {support.description}
                </p>
              </div>
              <button className="text-orange-700 font-bold text-xl uppercase hidden group-hover:block md:block">
                Learn More
              </button>
            </div>
            {/* <div className="absolute w-full z-10 bg-white h-14 -bottom-48 2xl:-bottom-[240px] xl:-bottom-[280px]"></div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
