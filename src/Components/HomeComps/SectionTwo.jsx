import { BrandButton } from "../BrandButton";
import childLineCallIMG from "../../assets/Images/SecTwo/childline-phone-icon.png";
import helpLineIMG from "../../assets/Images/SecTwo/helpline.png";
import mentalHealthIMG from "../../assets/Images/SecTwo/mental-health.png";

export const SectionTwo = () => {
  const howWeSupport = [
    {
      id: 1,
      title: "On average, two children a minute contact Childline.",
    },
    {
      id: 2,
      title:
        "Mental or emotional health was the top concern for young people contacting Childline in 2020/21.",
    },
    {
      id: 3,
      title: "47% of contacts answered by our Helpline resulted in a referral.",
    },
  ];

  return (
    <div className="py-20 px-6 flex flex-col gap-16 items-center lg:px-4 md:py-14 sm:px-7">
      <h2 className="text-4xl font-bold text-center uppercase md:text-3xl sm:text-2xl">
        How we&lsquo;re supporting children
      </h2>
      <ul className="flex gap-16 items-start 2xl:gap-10 lg:gap-5 lg:justify-between lg:w-full md:gap-4 sm:flex-col sm:items-center sm:gap-12">
        {howWeSupport.map((support) => (
        <li key={support.id} className="w-[400px] flex flex-col items-center text-center justify-center gap-6 2xl:w-[370px] xl:w-[300px] lg:w-[250px] sm:w-[300px]">
            <div className="w-max p-4 border border-gray-200 rounded-full">
              <div className="h-56 w-56 bg-orange-700 flex justify-center items-center rounded-full xl:h-48 xl:w-48 lg:w-36 lg:h-36 sm:w-52 sm:h-52">
                <img
                  src={support.id === 1 ? childLineCallIMG : support.id === 2 ? mentalHealthIMG : helpLineIMG}
                  alt="childline-phone image"
                  className=""
                />
              </div>
            </div>
            <p className="md:text-sm sm:text-base">{support.title}</p>
          </li>
        ))}
      </ul>
      <BrandButton
        className="px-8 py-2 rounded-none sm:text-sm"
        onClick={undefined}
        label="How we&lsquo;re supporting children"
      />
    </div>
  );
};
