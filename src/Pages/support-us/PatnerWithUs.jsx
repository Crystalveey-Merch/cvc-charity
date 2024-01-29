import { useState } from "react";
import bgImg from "../../assets/Images/volunteer-three.jpg";
import { BrandButton, Countries, Countrycodes } from "../../Components";

export const PatnerWithUs = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [organizationCity, setOrganizationCity] = useState("");
  const [organizationPostalCode, setOrganizationPostalCode] = useState("");
  const [organizationState, setOrganizationState] = useState("");
  const [organizationCountry, setOrganizationCountry] = useState("");
  const [geographicRegion, setGeographicRegion] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [website, setWebsite] = useState("");
  const [qa1, setQa1] = useState("");
  const [qa2, setQa2] = useState("");
  const [qa3, setQa3] = useState("");
  const [qa4, setQa4] = useState("");
  const [mimimumAge, setMinimumAge] = useState("");
  const [maximumAge, setMaximumAge] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  // const [organizationSize, setOrganizationSize] = useState("");
  const [personName, setPersonName] = useState("");
  const [personPosition, setPersonPosition] = useState("");
  const [personEmail, setPersonEmail] = useState("");
  const [personPhoneNumber, setPersonPhoneNumber] = useState("");
  const [personSelectedCountryCode, setPersonSelectedCountryCode] =
    useState("");
  const [executiveDirectorName, setExecutiveDirectorName] = useState("");
  const [executiveDirectorEmail, setExecutiveDirectorEmail] = useState("");
  const [executiveDirectorPhoneNumber, setExecutiveDirectorPhoneNumber] =
    useState("");
  const [
    executiveDirectorSelectedCountryCode,
    setExecutiveDirectorSelectedCountryCode,
  ] = useState("");

  const handlePostalCodeChange = (e) => {
    // accept only numbers
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setOrganizationPostalCode(value);
    }
  };

  const handleCustomCountryCodeChange = (e, setCountryCode) => {
    setCountryCode(e.target.value);
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
        <form className="flex flex-col gap-8 w-[1100px] lg:w-full">
          <h2 className="text-left text-2xl font-bold sm:text-xl">Patnership Form</h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4 className="w-max text-left text-xl font-semibold pb-2 border-b border-black mb-1 sm:text-lg">
              Organization Information
            </h4>
            <div className="flex flex-col gap-3.5">
              <label
                htmlFor="organizationName"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">
                  Organization Name
                </p>
                <input
                  id="organizationName"
                  type="text"
                  placeholder="Enter your organization name"
                  required
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
              <label
                htmlFor="organizationType"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">
                  Organization Type
                </p>
                <select
                  id="organizationType"
                  required
                  value={organizationType}
                  onChange={(e) => setOrganizationType(e.target.value)}
                  className="w-[100%] cursor-pointer text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                >
                  <option value="" disabled>
                    --- Select Organization Type ---
                  </option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="For-Profit">For-Profit</option>
                  <option value="Government">Government</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3.5">
              <label
                htmlFor="organizationAddress"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">
                  Organization Address
                </p>
                <input
                  id="organizationAddress"
                  type="text"
                  placeholder="Enter your organization address"
                  required
                  value={organizationAddress}
                  onChange={(e) => setOrganizationAddress(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
              <div className="flex gap-6 sm:flex-col sm:gap-3">
                <label
                  htmlFor="organizationCity"
                  className="flex flex-col gap-1.5 w-full"
                >
                  <p className="text-sm font-medium text-gray-700">
                    Organization City
                  </p>
                  <input
                    id="organizationCity"
                    type="text"
                    placeholder="Enter your organization city"
                    required
                    value={organizationCity}
                    onChange={(e) => setOrganizationCity(e.target.value)}
                    className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                  />
                </label>
                <label
                  htmlFor="organizationPostalCode"
                  className="flex flex-col gap-1.5 w-full"
                >
                  <p className="text-sm font-medium text-gray-700">
                    Organization Postal Code
                  </p>
                  <input
                    id="organizationPostalCode"
                    type="text"
                    placeholder="Enter your organization postal code"
                    required
                    value={organizationPostalCode}
                    onChange={handlePostalCodeChange}
                    className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                  />
                </label>
              </div>
              <div className="flex gap-6 sm:flex-col sm:gap-3">
                <label
                  htmlFor="organizationState"
                  className="flex flex-col gap-1.5 w-full"
                >
                  <p className="text-sm font-medium text-gray-700">
                    Organization State
                  </p>
                  <input
                    id="organizationState"
                    type="text"
                    placeholder="Enter your organization state"
                    required
                    value={organizationState}
                    onChange={(e) => setOrganizationState(e.target.value)}
                    className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                  />
                </label>
                <label
                  htmlFor="organizationCountry"
                  className="flex flex-col gap-1.5 w-full"
                >
                  <p className="text-sm font-medium text-gray-700">
                    Organization Country
                  </p>
                  <Countries
                    id="organizationCountry"
                    required
                    value={organizationCountry}
                    onChange={(e) => setOrganizationCountry(e.target.value)}
                    className="w-[100%] cursor-pointer text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                  />
                </label>
              </div>
              <label
                htmlFor="geographicRegion"
                className="flex flex-col gap-1.5"
              >
                <p className="text-sm font-medium text-gray-700">
                  Geographic Region
                </p>
                <select
                  id="geographicRegion"
                  required
                  value={geographicRegion}
                  onChange={(e) => setGeographicRegion(e.target.value)}
                  className="w-[100%] cursor-pointer text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                >
                  <option value="" disabled>
                    --- Select Geographic Region ---
                  </option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Australia">Australia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                </select>
              </label>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3.5">
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
                <p className="text-sm font-medium text-gray-700">
                  Phone Number
                </p>
                <div className="flex gap-2 items-center">
                  <Countrycodes
                    id="phoneNumber"
                    required
                    value={selectedCountryCode}
                    onChange={(e) =>
                      handleCustomCountryCodeChange(e, setSelectedCountryCode)
                    }
                    className="w-[100%] cursor-pointer text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
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
                    className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                  />
                </div>
              </label>
              <label htmlFor="website" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">Website</p>
                <input
                  id="website"
                  type="url"
                  placeholder="Enter your website"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
            </div>
            {/*  */}
            <div className="flex flex-col gap-3.5">
              <label htmlFor="qa1" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">
                  Top 5 Funding Sources
                </p>
                <textarea
                  id="qa1"
                  placeholder="Enter your answer"
                  required
                  value={qa1}
                  onChange={(e) => setQa1(e.target.value)}
                  className="w-[100%] h-[100px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 resize-none"
                />
              </label>
              <label htmlFor="qa2" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">
                  What is the problem in your community involving children and
                  youth that you are trying to solve?
                  <br /> How are your organization&rsquo;s programs addressing
                  this problem?
                </p>
                <textarea
                  id="qa2"
                  placeholder="Enter your answer"
                  required
                  value={qa2}
                  onChange={(e) => setQa2(e.target.value)}
                  className="w-[100%] h-[100px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 resize-none"
                />
              </label>
              <label htmlFor="qa3" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">
                  How do you envision partnering with us?
                </p>
                <textarea
                  id="qa3"
                  placeholder="Enter your answer"
                  required
                  value={qa3}
                  onChange={(e) => setQa3(e.target.value)}
                  className="w-[100%] h-[100px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 resize-none"
                />
              </label>
              <label htmlFor="qa4" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">
                  Why are you interested in partnering with us?
                </p>
                <textarea
                  id="qa4"
                  placeholder="Enter your answer"
                  required
                  value={qa4}
                  onChange={(e) => setQa4(e.target.value)}
                  className="w-[100%] h-[100px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 resize-none"
                />
              </label>
              <label
                htmlFor="mimimumAge"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">
                  What is the minimum age range of beneficiaries?
                </p>
                <input
                  id="mimimumAge"
                  type="text"
                  placeholder="Enter minimum age"
                  required
                  value={mimimumAge}
                  onChange={(e) => handleAcceptNumberOnly(e, setMinimumAge)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
              <label
                htmlFor="maximumAge"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">
                  What is the maximum age range of beneficiaries?
                </p>
                <input
                  id="maximumAge"
                  type="text"
                  placeholder="Enter maximum age"
                  required
                  value={maximumAge}
                  onChange={(e) => handleAcceptNumberOnly(e, setMaximumAge)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
            </div>
            {/*  */}
            <h4 className="w-max text-left text-xl font-semibold pb-2 border-b border-black mt-3 mb-2 sm:text-lg">
              Primary Contact Information
            </h4>
            <div className="flex flex-col gap-3.5">
              <label htmlFor="personName" className="flex flex-col gap-1.5">
                <p className="text-sm font-medium text-gray-700">Person Name</p>
                <input
                  id="personName"
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
              <label htmlFor="personPosition" className="flex flex-col gap-1.5">
                <p className="text-sm font-medium text-gray-700">
                  Person Position
                </p>
                <input
                  id="personPosition"
                  type="text"
                  placeholder="Enter your position"
                  required
                  value={personPosition}
                  onChange={(e) => setPersonPosition(e.target.value)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
              <label htmlFor="personEmail" className="flex flex-col gap-1.5">
                <p className="text-sm font-medium text-gray-700">
                  Person Email
                </p>
                <input
                  id="personEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={personEmail}
                  onChange={(e) => setPersonEmail(e.target.value)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
              <label
                htmlFor="personPhoneNumber"
                className="flex flex-col gap-1.5"
              >
                <p className="text-sm font-medium text-gray-700">
                  Person Phone Number
                </p>
                <div className="flex gap-2 items-center">
                  <Countrycodes
                    id="personPhoneNumber"
                    required
                    value={personSelectedCountryCode}
                    onChange={(e) =>
                      handleCustomCountryCodeChange(
                        e,
                        setPersonSelectedCountryCode
                      )
                    }
                    className="w-[100%] cursor-pointer text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                  />
                  <input
                    id="personPhoneNumber"
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    value={personPhoneNumber}
                    onChange={(e) =>
                      handleCustomPhoneNumberChange(e, setPersonPhoneNumber)
                    }
                    className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                  />
                </div>
              </label>
            </div>
            {/*  */}
            <h4 className="w-max text-left text-xl font-semibold pb-2 border-b border-black mt-3 mb-2 sm:text-lg">
              Executive Director Information
            </h4>
            <div className="flex flex-col gap-3.5">
              <label
                htmlFor="executiveDirectorName"
                className="flex flex-col gap-1.5"
              >
                <p className="text-sm font-medium text-gray-700">
                  Executive Director Name
                </p>
                <input
                  id="executiveDirectorName"
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={executiveDirectorName}
                  onChange={(e) => setExecutiveDirectorName(e.target.value)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
              <label
                htmlFor="executiveDirectorEmail"
                className="flex flex-col gap-1.5"
              >
                <p className="text-sm font-medium text-gray-700">
                  Executive Director Email
                </p>
                <input
                  id="executiveDirectorEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={executiveDirectorEmail}
                  onChange={(e) => setExecutiveDirectorEmail(e.target.value)}
                  className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                />
              </label>
              <label
                htmlFor="executiveDirectorPhoneNumber"
                className="flex flex-col gap-1.5"
              >
                <p className="text-sm font-medium text-gray-700">
                  Executive Director Phone Number
                </p>
                <div className="flex gap-2 items-center">
                  <Countrycodes
                    id="executiveDirectorPhoneNumber"
                    required
                    value={executiveDirectorSelectedCountryCode}
                    onChange={(e) =>
                      handleCustomCountryCodeChange(
                        e,
                        setExecutiveDirectorSelectedCountryCode
                      )
                    }
                    className="w-[100%] cursor-pointer text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                  />
                  <input
                    id="executiveDirectorPhoneNumber"
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    value={executiveDirectorPhoneNumber}
                    onChange={(e) =>
                      handleCustomPhoneNumberChange(
                        e,
                        setExecutiveDirectorPhoneNumber
                      )
                    }
                    className="w-[100%] h-[40px] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500"
                  />
                </div>
              </label>
            </div>
            {/*  */}
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
