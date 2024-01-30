import { useState } from "react";
// import {
//   serverTimestamp,
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   db,
//   storage,
// } from "../../Config/firebase";
// import { toast } from "react-toastify";
// import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import imagePictureSVG from "../../assets/SVG/image-picture.svg";
import bgImg from "../../assets/Images/volunteer-two.jpg";
import { BrandButton, Countries, Countrycodes } from "../../Components";

export const Volunteer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const handlePostalCodeChange = (e) => {
    // accept only numbers
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setPostalCode(value);
    }
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    //accepts only numbers
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  //   const [photo, setPhoto] = useState(null);
  //   const [photoUrl, setPhotoUrl] = useState("");
  //   const photoRef = useRef(null);

  //   const openPhotoPicker = () => {
  //     if (photoRef.current) {
  //       photoRef.current.click();
  //     }
  //   };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // reader.onloadend = () => {
    //   setPhoto(file);
    //   setPhotoUrl(reader.result);
    // };
  };

  //   const cancelPhoto = () => {
  //     setPhoto(null);
  //     setPhotoUrl("");
  //   };

  //   const timestamp = serverTimestamp();

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
            Don&rsquo;t just dream it, be the{" "}
            <u className="text-yellow-300 border-black underline-black">
              change
            </u>{" "}
            - Volunteer now
          </h1>
        </div>
      </div>

      <div className="bg-white text-left py-14 px-24 w-full flex flex-col gap-10 items-center justify-center xl:px-10 lg:py-5 md:px-8 sm:px-4">
        <div className="flex flex-col gap-2 w-[1100px] xl:w-[980px] lg:w-full">
          <p
            className="text-left text-lg font-normal inline-flex flex-col gap-2 md:text-base"
            style={{ lineHeight: "1.6" }}
          >
            <span>
              Thank you for your interest in volunteering with CVC Charity. We
              are always looking for passionate people to join our team and help
              us make a difference in the lives of children and young people.
            </span>
            <span>
              To apply for a volunteer position, please complete the form below
              and we will be in touch with you shortly.
            </span>
          </p>
          <p className="text-left text-base font-medium mt-1">
            Make a lasting difference in the lives of our special children.
            Explore these impactful ways to lend a hand and spark smiles.
          </p>
          <ul className="list-disc list-inside px-3 flex flex-col gap-1 text-left text-base font-normal sm:text-[0.9rem]">
            {/* <li>Raise funds and make donation on our website</li> */}
            <li>
              Be a megaphone for kindness: Share our stories on social media.
              Together, we amplify the message of inclusion.
            </li>
            <li>
              Fuel the mission: Donate online or raise funds with your
              creativity. Big or small, every contribution impacts lives.
            </li>
            <li className="">
              Lend a helping hand: Volunteer in our office or at events. Your
              time is a precious gift.
            </li>
          </ul>
        </div>
        <form className="w-[1100px] flex flex-col justify-start gap-8 xl:w-[980px] lg:w-full">
          <h2 className="text-left text-2xl font-bold">Volunteer Form</h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col gap-3.5">
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
            <div className="flex flex-col gap-3.5">
              <label htmlFor="DOB" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">
                  Date of birth
                </p>
                <input
                  id="DOB"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
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
                  pattern="[0-9]{6}"
                  onChange={handlePostalCodeChange}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
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
            </div>
            <label htmlFor="country" className="flex flex-col gap-1.5 w-full">
              <p className="text-sm font-medium text-gray-700">Country</p>
              <Countries country={country} setCountry={setCountry} />
            </label>
            <div className="flex gap-6 sm:flex-col sm:gap-3">
              <label htmlFor="country" className="flex flex-col gap-1.5 w-full">
                <p className="text-sm font-medium text-gray-700">
                  Country (code)
                </p>
                <Countrycodes
                  handleCountryCodeChange={handleCountryCodeChange}
                  selectedCountryCode={selectedCountryCode}
                />
              </label>
              <label
                htmlFor="phoneNumber"
                className="flex flex-col gap-1.5 w-full"
              >
                <p className="text-sm font-medium text-gray-700">
                  Phone Number
                </p>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your phone number"
                  required
                  // Add min, max, and pattern attributes for validation
                  minLength={10} // Minimum number of characters
                  maxLength={15} // Maximum number of characters
                  pattern="[0-9]+" // Pattern to allow only numeric digits
                  className="w-full text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
            </div>
            <div className="flex flex-col gap-3.5 md:gap-2">
              <label htmlFor="email" className="text-base font-normal">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
              />
            </div>
            <div className="flex flex-col gap-3.5 md:gap-2">
              {/* gender drop-down */}
              <label htmlFor="gender" className="text-base font-normal">
                Gender
              </label>
              <select
                className="text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                onChange={(e) => setGender(e.target.value)}
                id="gender"
                name="gender"
                value={gender}
                required
              >
                <option value="" disabled>
                  --- Select Gender ---
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-3.5 md:gap-2">
              {/* gender drop-down */}
              <label htmlFor="gender" className="text-base font-normal">
                Please upload a copy of your photo ID
              </label>
              <input
                type="file"
                accept="image/*"
                className="text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                required
                onChange={handlePhotoChange}
              />
              {/* <div className="flex gap-2 items-end">
                <input
                  type="file"
                  accept="image/*"
                  ref={photoRef}
                  onChange={handlePhotoChange}
                  hidden
                />
                <button
                  className="h-max flex gap-2 items-center justify-center bg-gray-100 text-black font-bold py-3 px-4 rounded"
                  onClick={openPhotoPicker}
                >
                  <img src={imagePictureSVG} alt="upload" className="h-6" />
                  <span>Upload</span>
                </button>
                {photo && <img src={photoUrl} alt="upload" className="h-20" />}
                {photo && (
                  <button
                    className="h-max flex gap-2 items-center justify-center bg-gray-100 text-black font-bold py-3 px-4 rounded"
                    onClick={cancelPhoto}
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div> */}
            </div>
          </div>
          <BrandButton
            type="submit"
            className="w-max px-8 py-2 rounded-none place-self-center sm:text-sm"
            onClick={undefined}
            label="Submit"
          />
        </form>
      </div>
    </div>
  );
};
