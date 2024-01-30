import { useState, useEffect } from "react";
import { Link as AnchorLink } from "react-scroll";
import { Element } from "react-scroll";
import { BrandButton } from "../../Components";
import { CheckOut } from "../CheckOut";
import bgImg from "../../assets/Images/Donate/index.jpg";
import { Link } from "react-router-dom";

export const Donate = () => {
  const [donateType, setDonateType] = useState("one-off");
  const [donateAmount, setDonateAmount] = useState("");
  const [otherAmount, setOtherAmount] = useState("");

  const handleOtherAmount = (e) => {
    // accept only numbers
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setOtherAmount(e.target.value);
    }
  };

  const handleSetDonateAmount = (amount) => {
    setDonateAmount(amount);
    setOtherAmount("");
  };

  useEffect(() => {
    if (otherAmount !== "") {
      setDonateAmount(otherAmount);
    } else if (otherAmount === "" && donateType === "one-off") {
      setDonateAmount(50);
    } else if (otherAmount === "" && donateType === "monthly") {
      setDonateAmount(10);
    }
  }, [donateType, otherAmount]);

  //  price in dollars
  const oneOFFOptions = [
    { id: 1, symbol: "₦", price: 1000 },
    { id: 2, symbol: "₦", price: 2000 },
    { id: 3, symbol: "₦", price: 5000 },
    { id: 4, symbol: "₦", price: 10000 },
    { id: 6, symbol: "₦", price: 50000 },
    { id: 7, symbol: "₦", price: 100000 },
    { id: 9, symbol: "₦", price: 500000 },
    { id: 10, symbol: "₦", price: 1000000 },
  ];

  //  price in dollars
  const monthlyOptions = [
    { id: 1, symbol: "₦", price: 1000 },
    { id: 2, symbol: "₦", price: 2000 },
    { id: 3, symbol: "₦", price: 5000 },
    { id: 4, symbol: "₦", price: 10000 },
    { id: 5, symbol: "₦", price: 20000 },
    { id: 6, symbol: "₦", price: 50000 },
    { id: 7, symbol: "₦", price: 100000 },
    { id: 8, symbol: "₦", price: 200000 },
  ];

  const [donateAnonymously, setDonateAnonymously] = useState(false);

  const purchaseData = {
    name: "donation",
    price: donateAmount,
    type: donateType,
    currency: "NGN",
    symbol: "₦",
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <img
          src={bgImg}
          alt="banner"
          className="w-full h-[calc(94vh)] object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 right-0 mt-32 w-max h-full flex flex-col gap-16 justify-center px-8 text-left z-10 xl:px-6 xl:mt-24 lg:px-5 lg:gap-8 md:w-full md:justify-end md:mt-0 md:pb-10">
          <h1
            className="max-w-2xl font-finger-paint text-white font-extrabold text-7xl 2xl:text-[4rem] 2xl:max-w-[38rem] xl:max-w-[31rem] xl:text-[3.2rem] lg:max-w-sm lg:text-[2.5rem] md:max-w-full sm:text-[2.3rem]"
            style={{ lineHeight: "1.3" }}
          >
            You have a chance to{" "}
            <u className="text-yellow-300 border-black underline-black">
              change
            </u>{" "}
            the world
          </h1>
          {/* go to id of donate section */}
          <AnchorLink
            to="donate"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            <BrandButton
              label={
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-white">Make a donation</p>
                  <p className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </p>
                </div>
              }
              className="rounded-none w-max bg-orange-300 py-5 px-5 xl:py-3"
            />
          </AnchorLink>
        </div>
      </div>

      <div className="py-14 px-24 w-full flex flex-col gap-10 items-center justify-center text-center xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div
          className="text-left text-lg font-normal w-[850px] inline-flex flex-col gap-3 lg:w-full md:text-base"
          style={{ lineHeight: "1.9" }}
        >
          <p>
            We&rsquo;ve been helping young people for over 9 years. But we
            can&rsquo;t do it alone. We need your support. Thank you for
            choosing to support us. Your donation will help us be there for
            children who feel they have no one else to turn to.
          </p>

          <p>
            If you&rsquo;re looking to donate items, please visit our{" "}
            <Link to="/support-us/donate-items" className="text-orange-600">
              donate items page
            </Link>{" "}
            for more information.
          </p>
        </div>
        <Element name="donate" className="flex flex-col justify-center">
          {/* <div className="flex place-self-center w-[80vw]">
            <div className="bg-orange-600 text-white flex flex-col gap-5 w-1/2 p-8">
              <h2 className="text-5xl font-bold">
                Make a <span className="text-yellow-300">donation</span>
              </h2>
            </div>
          </div> */}
          <div className="w-full max-w-2xl flex flex-col justify-center justify-items-center place-self-center gap-6 md:w-full">
            <p className="max-w-md font-shadows place-self-center text-orange-600 text-2xl font-bold sm:w-full">
              You can choose to make a one-off donation or set up a regular
              gift.
            </p>
            <div className="border flex flex-col gap-4 justify-center rounded-md p-3">
              <div className="flex gap-4 w-full">
                {/* default tab  */}
                <button
                  type="button"
                  onClick={() => setDonateType("one-off")}
                  className={`w-full py-2 text-sm border-b-[3px] transition duration-300 ease-in-out ${
                    donateType === "one-off"
                      ? "text-[#24bac3] border-[#FA5661] font-semibold"
                      : "border-transparent text-gray-600 font-normal"
                  }`}
                >
                  One-off
                </button>
                {/* end of default tab  */}
                {/* English(EN) tab  */}
                <button
                  type="button"
                  onClick={() => setDonateType("monthly")}
                  className={`w-full py-2 text-sm border-b-[3px] transition duration-300 ease-in-out ${
                    donateType === "monthly"
                      ? "text-[#24bac3] border-[#FA5661] font-semibold"
                      : "border-transparent text-gray-600 font-normal"
                  }`}
                >
                  Monthly
                </button>
                {/* end of English(EN) tab  */}
              </div>
              <div className="grid grid-cols-3 grid-flow-row gap-4 sm:grid-cols-2">
                {donateType === "one-off" && (
                  <>
                    {oneOFFOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSetDonateAmount(option.price)}
                        className={`flex flex-col items-center justify-center gap-2 border rounded-md p-2 transition duration-300 ease-in-out ${
                          donateAmount === option.price
                            ? "border-[#24bac3] text-[#24bac3]"
                            : "border-transparent text-gray-600"
                        }`}
                      >
                        <p className="font-bold text-2xl">
                          {option.symbol}
                          {option.price}
                        </p>
                        <p className="font-normal text-sm">One-off</p>
                      </button>
                    ))}
                    <div className="border rounded-md p-2">
                      <input
                        type="text"
                        placeholder="Other"
                        value={otherAmount}
                        onChange={handleOtherAmount}
                        className="w-full h-full py-2 px-2 bg-gray-50 rounded-md text-center font-semibold outline-none transition duration-300 ease-in-out focus:ring-2 focus:ring-[#24bac3]"
                      />
                    </div>
                  </>
                )}
                {donateType === "monthly" && (
                  <>
                    {monthlyOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSetDonateAmount(option.price)}
                        className={`flex flex-col items-center justify-center gap-2 border rounded-md p-2 transition duration-300 ease-in-out ${
                          donateAmount === option.price
                            ? "border-[#24bac3] text-[#24bac3]"
                            : "border-transparent text-gray-600"
                        }`}
                      >
                        <p className="font-bold text-2xl">
                          {option.symbol}
                          {option.price}
                        </p>
                        <p className="font-normal text-sm">Monthly</p>
                      </button>
                    ))}
                    <div className="border rounded-md p-2">
                      <input
                        type="text"
                        placeholder="Other"
                        value={otherAmount}
                        onChange={handleOtherAmount}
                        className="w-full h-full py-2 px-2 bg-gray-50 rounded-md text-center font-semibold outline-none transition duration-300 ease-in-out focus:ring-2 focus:ring-[#24bac3]"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2.5 items-center">
                <input
                  type="checkbox"
                  checked={donateAnonymously}
                  onChange={() => setDonateAnonymously(!donateAnonymously)}
                  className="w-4 h-4 cursor-pointer"
                />
                <p className="text-sm">I&rsquo;d like to donate anonymously</p>
              </div>
            </div>
            <CheckOut purchaseData={purchaseData} />
          </div>
        </Element>
      </div>
    </div>
  );
};
