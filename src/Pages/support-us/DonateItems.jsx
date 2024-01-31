import { useState, useRef } from "react";
import bgImg from "../../assets/Images/Donate/donate-2.jpg";
import { BrandButton, Countries, Countrycodes } from "../../Components";

export const DonateItems = () => {
  // const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handleCustomPhoneNumberChange = (e, setPhoneNumber) => {
    // accept only numbers
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleAcceptNumberOnly = (e, setNumber) => {
    // accept only numbers
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setNumber(value);
    }
  };

  // item states
  const [itemType, setItemType] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const [howWillYouDeliver, setHowWillYouDeliver] = useState("");

  const [imageFiles, setImageFiles] = useState([]);
  const [mediaPreviewUrls, setMediaPreviewUrls] = useState([]);
  const imageInputRef = useRef(null);
  const openImagePicker = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const urls = [...mediaPreviewUrls]; // Copy the existing array
    for (let i = 0; i < files.length; i++) {
      urls.push(URL.createObjectURL(files[i]));
    }
    setImageFiles(files);
    setMediaPreviewUrls(urls);
  };

  const cancleImage = (index) => {
    const files = [...imageFiles];
    const urls = [...mediaPreviewUrls];
    files.splice(index, 1);
    urls.splice(index, 1);
    setImageFiles(files);
    setMediaPreviewUrls(urls);
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
            <li>
              Gently used and good quality clothing, shoes, and accessories
            </li>
            <li>Books, CDs, DVDs, and vinyl records</li>
            <li>Jewellery</li>
            <li>Music, movies, and video games</li>
            <li>
              Technology, including computers, laptops, tablets, and phones
            </li>
            <li>
              Household items, including kitchenware, home decor, and small
              appliances
            </li>
            <li>Furniture</li>
            <li>Antiques and collectibles</li>
          </ul>
        </div>
        <form className="flex flex-col gap-8 w-[1100px] xl:w-[980px] lg:w-full">
          <h4 className="text-left text-xl font-semibold sm:text-lg">
            Fill all the required information and our team will contact you
            within 24 hours.
          </h4>
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4 className="w-max text-left text-lg font-semibold pb-1.5 border-b border-black mb-1 sm:text-base">
              Contact information
            </h4>
            <div className="flex gap-6 sm:flex-col sm:gap-3">
              <label
                htmlFor="firstName"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">First name</p>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
              <label
                htmlFor="lastName"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">Last name</p>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
            </div>
            <label
              htmlFor="addressOne"
              className="flex flex-col gap-1.5 w-full"
            >
              <p className="text-sm font-medium text-gray-700">
                Address line 1
              </p>
              <input
                id="addressOne"
                type="text"
                placeholder="Enter your address"
                required
                value={addressOne}
                onChange={(e) => setAddressOne(e.target.value)}
                className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
              />
            </label>
            <div className="flex gap-6 sm:flex-col sm:gap-3">
              <label htmlFor="city" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">City</p>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
              <label
                htmlFor="postalCode"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">Postal code</p>
                <input
                  id="postalCode"
                  type="text"
                  placeholder="Enter your postal code"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
            </div>
            <div className="flex gap-6 sm:flex-col sm:gap-3">
              <label htmlFor="state" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">State</p>
                <input
                  id="state"
                  type="text"
                  placeholder="Enter your state"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
              <label htmlFor="country" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">Country</p>
                <Countries country={country} setCountry={setCountry} />
              </label>
            </div>
            <label htmlFor="email" className="flex flex-col gap-1.5 w-full">
              <p className="text-sm font-medium text-gray-700">Email</p>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
              />
            </label>
            <label
              htmlFor="phoneNumber"
              className="flex flex-col gap-1.5 w-full"
            >
              <p className="text-sm font-medium text-gray-700">Phone number</p>
              <div className="flex gap-2 items-center">
                <Countrycodes
                  selectedCountryCode={selectedCountryCode}
                  handleCountryCodeChange={handleCountryCodeChange}
                />
                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  value={phoneNumber}
                  onChange={(e) =>
                    handleCustomPhoneNumberChange(e, setPhoneNumber)
                  }
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </div>
            </label>
            <h4 className="w-max text-left text-lg font-semibold pb-1.5 border-b border-black mt-3 mb-2 sm:text-base">
              Item information
            </h4>
            <label htmlFor="itemType" className="flex flex-col gap-1.5 w-full">
              <p className="text-sm font-medium text-gray-700">
                Type of item (e.g. clothing, books, etc.)
              </p>
              <input
                id="itemType"
                type="text"
                placeholder="Enter the type of item"
                required
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
              />
            </label>
            <label
              htmlFor="itemDescription"
              className="flex flex-col gap-1.5 w-full"
            >
              <p className="text-sm font-medium text-gray-700">
                Please describe the item in detail
              </p>
              <textarea
                id="itemDescription"
                type="text"
                placeholder="Enter the item description"
                required
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                className="w-[100%] h-[100px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
              />
            </label>
            <label
              htmlFor="itemQuantity"
              className="flex flex-col gap-1.5 w-full"
            >
              <p className="text-sm font-medium text-gray-700">
                Quantity of items
              </p>
              <input
                id="itemQuantity"
                type="text"
                placeholder="Enter the quantity of items"
                required
                value={itemQuantity}
                onChange={(e) => handleAcceptNumberOnly(e, setItemQuantity)}
                className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
              />
            </label>
            {/* images next */}
            <div className="flex flex-col gap-1.5 w-full">
              <p className="text-sm font-medium text-gray-700">
                Upload images of the item (upload at least two images)
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {mediaPreviewUrls.map((url, index) => (
                    <div
                      key={index}
                      className="relative w-[100px] h-[100px] rounded-lg overflow-hidden"
                    >
                      <img
                        src={url}
                        alt="preview"
                        className="w-full h-full object-cover object-center"
                      />
                      <button
                        type="button"
                        onClick={() => cancleImage(index)}
                        className="absolute top-0 right-0 w-8 h-8 flex justify-center items-center bg-red-500 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="#fff"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={openImagePicker}
                  className="w-[100px] h-[100px] flex justify-center items-center border border-gray-300 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full">
              {/* radio buttons*/}
              <p className="text-sm font-medium text-gray-700">
                How will you deliver the item?
              </p>
              <div className="flex gap-2 items-center">
                <input
                  id="deliverToNearestCVCCharityShop"
                  type="radio"
                  name="howWillYouDeliver"
                  value="deliverToNearestCVCCharityShop"
                  required
                  checked={
                    howWillYouDeliver === "deliverToNearestCVCCharityShop"
                  }
                  onChange={(e) => setHowWillYouDeliver(e.target.value)}
                  className="w-5 h-5 cursor-pointer"
                />
                <label
                  htmlFor="deliverToNearestCVCCharityShop"
                  className="text-sm font-normal text-gray-700"
                >
                  I will deliver the item to the nearest CVC Charity shop
                </label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id="arrangeAPickUpForMe"
                  type="radio"
                  name="howWillYouDeliver"
                  value="arrangeAPickUpForMe"
                  required
                  checked={howWillYouDeliver === "arrangeAPickUpForMe"}
                  onChange={(e) => setHowWillYouDeliver(e.target.value)}
                  className="w-5 h-5 cursor-pointer"
                />
                <label
                  htmlFor="arrangeAPickUpForMe"
                  className="text-sm font-normal text-gray-700"
                >
                  Please arrange a pick-up for me
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <BrandButton
              type="submit"
              className="w-max px-8 py-2 rounded-none place-self-center sm:text-sm"
              onClick={undefined}
              label="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
