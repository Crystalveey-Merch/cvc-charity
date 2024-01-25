import { useEffect, useState } from "react";
import imgThree from "../../assets/Images/Donate/donate.jpg";

export const MakeADonationSection = () => {
  const [donateType, setDonateType] = useState("monthly");
  const [donateAmount, setDonateAmount] = useState("10");

  const monthlyDonateOption = [
    { id: 1, amount: "10" },
    { id: 2, amount: "20" },
    { id: 3, amount: "50" },
    { id: 4, amount: "100" },
  ];

  const singleDonateOption = [
    { id: 1, amount: "5" },
    { id: 2, amount: "10" },
    { id: 3, amount: "20" },
    { id: 4, amount: "50" },
  ];

  const [otherAmount, setOtherAmount] = useState("");

  const handleOtherAmount = (e) => {
    // accept only numbers
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setOtherAmount(e.target.value);
    }
  };

  const [selectedAmount, setSelectedAmount] = useState("10");

  const handleSetDonateAmount = (amount) => {
    setSelectedAmount(amount);
    setOtherAmount("");
  };

  useEffect(() => {
    if (otherAmount !== "") {
      setDonateAmount(otherAmount);
      setSelectedAmount(otherAmount);
    } else {
      setDonateAmount(selectedAmount);
    }
  }, [otherAmount, selectedAmount]);

  return (
    <div className="flex gap-10 py-14 pt-24 px-28 w-full justify-center items-center xl:px-10 lg:flex-col-reverse md:px-6 sm:py-7">
      <div className="w-1/2 flex flex-col gap-9 justify-center items-center text-center lg:w-full">
        <h3 className="text-4xl font-bold text-black md:text-3xl">Make a donation</h3>
        <div className="flex flex-col gap-7 justify-center">
          <div className="flex gap-5 items-center sm:flex-col sm:gap-3">
            <button
              className={`font-bold text-lg py-3 px-4 w-full max-w-72 sm:py-2.5 sm:text-base  ${
                donateType === "monthly"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setDonateType("monthly")}
            >
              Monthly Donation
            </button>
            <p>Or</p>
            <button
              className={`font-bold text-lg py-3 px-4 w-full max-w-72 sm:py-2.5 sm:text-base  ${
                donateType === "single"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setDonateType("single")}
            >
              Single Donation
            </button>
          </div>
          <div className="flex gap-5 items-center justify-center sm:flex-wrap sm:gap-4">
            {donateType === "monthly" ? (
              <>
                {monthlyDonateOption.map((option) => (
                  <button
                    className={`border border-black font-bold text-lg py-3 px-4 w-20 trasition duration-300 ease-in-out hover:bg-gray-700 hover:text-white sm:py-2.5 sm:text-base  ${
                      selectedAmount === option.amount
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                    }`}
                    key={option.id}
                    onClick={() => handleSetDonateAmount(option.amount)}
                  >
                    {"£" + option.amount}
                  </button>
                ))}
              </>
            ) : (
              <>
                {singleDonateOption.map((option) => (
                  <button
                    className={`border border-black font-bold text-lg py-3 px-4 w-20 trasition duration-300 ease-in-out hover:bg-gray-700 hover:text-white sm:py-2.5 sm:text-base ${
                      selectedAmount === option.amount
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                    }`}
                    key={option.id}
                    onClick={() => handleSetDonateAmount(option.amount)}
                  >
                    {"£" + option.amount}
                  </button>
                ))}
              </>
            )}
            <div className="relative">
              <p className="absolute top-0 left-2 text-black font-bold text-lg py-3 sm:text-base sm:font-semibold sm:py-2.5">
                £
              </p>
              <input
                type="text"
                value={otherAmount}
                onChange={handleOtherAmount}
                className="border border-black w-20 py-3 px-4 pl-7 text-black font-bold text-lg sm:text-base sm:font-semibold sm:py-2.5"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-100 p-8 flex flex-col gap-9 justify-center items-center sm:p-5">
          <h5 className="text-lg font-bold text-black md:text-base sm:font-semibold">
            {"£" + selectedAmount} could provide monthly personal hygiene
            products for a young person leaving care
          </h5>
          <button className="bg-orange-600 text-white font-bold text-lg py-3 px-4 w-72 rounded-full sm:text-base sm:font-semibold">
            {donateType === "monthly"
              ? `Donate £${donateAmount} monthly`
              : `Donate £${donateAmount} now`}
          </button>
        </div>
      </div>
      <img
        src={imgThree}
        alt="donation image"
        className="w-1/2 flex max-h-[500px] lg:w-full lg:max-h-[300px]"
      />
    </div>
  );
};
