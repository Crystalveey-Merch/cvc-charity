import imgOne from "../../assets/Images/Patners/one.png";
import imgTwo from "../../assets/Images/Patners/two.png";
import imgThree from "../../assets/Images/Patners/three.png";
import imgFour from "../../assets/Images/Patners/four.png";
import imgFive from "../../assets/Images/Patners/five.png";


export const Patners = () => {
  return (
    <div className="py-16 w-full flex flex-col gap-10 justify-center items-center px-10 sm:px-8 sm:py-12">
      <h4 className="support-font text-4xl font-bold text-orange-900 text-center md:text-3xl sm:text-2xl"
        style={{ lineHeight: "1.4" }}
      >
        THANK YOU TO OUR CORPORATE SUPPORTERS
      </h4>
      <div className="flex gap-24 items-center justify-center 2xl:gap-16 xl:gap-10 lg:grid lg:grid-flow-col lg:grid-rows-2 lg:justify-between lg:gap-y-1">
        <img src={imgOne} alt="imgOne" />
        <img src={imgTwo} alt="imgTwo"  />
        <img src={imgThree} alt="imgThree"  />
        <img src={imgFour} alt="imgFour" />
        <img src={imgFive} alt="imgFive"  />
    </div>
    </div>
  );
};
