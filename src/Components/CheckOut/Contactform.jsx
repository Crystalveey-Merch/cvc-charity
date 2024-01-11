/* eslint-disable react/prop-types */
import { Countrycodes } from "../CountryCodes";

export const ContactForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  selectedCountryCode,
  handleCountryCodeChange,
  phoneNumber,
  handlePhoneNumberChange,
  updatedPhoneNumber,
  name,
  handleSetUpdaterPhoneNumber,
  contactStatus,
  setContactStatus,
  setPaymentExpand,
  setRecieveUpdates,
  recieveUpdates,
}) => {
  return (
    <div>
      {contactStatus === "add" ? (
        <form className="w-full border border-[#b8c7cc] rounded-md p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-2xl">Contact Details</h4>
            <p className=""></p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 md:flex-col md:gap-4">
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
                  min={2}
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
                  min={2}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-[100%] text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
                />
              </label>
            </div>
            <div className="flex flex-col gap-3 md:gap-2">
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
            <div className="flex gap-6 md:flex-col md:gap-4">
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
            {/* recieve updates section */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="recieveUpdates"
                name="recieveUpdates"
                value={recieveUpdates}
                onChange={(e) => setRecieveUpdates(e.target.checked)}
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="recieveUpdates"
                className="text-sm font-medium text-gray-700"
              >
                Yes, I would like to receive updates and communications from CVC
                Charity
              </label>
            </div>
          </div>
          <button
            type="submit"
            className={`bg-[#24bac3] place-self-end w-max text-white font-medium text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-[#2dbbdf] md:text-base ${
              firstName.length < 2 ||
              lastName.length < 2 ||
              email === "" ||
              phoneNumber.length < 3
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={(e) => {
              if (
                firstName.length >= 2 &&
                lastName.length >= 2 &&
                email !== "" &&
                phoneNumber.length >= 3
              ) {
                e.preventDefault();
                handleSetUpdaterPhoneNumber();
                setContactStatus("completed");
                setPaymentExpand(true);
              }
            }}
          >
            Next
          </button>
        </form>
      ) : contactStatus === "completed" ? (
        <div className="border border-[#b8c7cc] rounded-md p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-2xl">Contact Details</h4>
            <button
              className="bg-green-100 py-1 px-2 font-medium rounded-md hover:bg-green-200"
              onClick={(e) => {
                e.preventDefault();
                setContactStatus("edit");
                setPaymentExpand(false);
              }}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">{name}</h4>
            <h4 className="font-bold">{email}</h4>
            <h4 className="font-bold">{updatedPhoneNumber}</h4>
          </div>
        </div>
      ) : (
        <form className="border border-[#b8c7cc] rounded-md p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-2xl">Contact Details</h4>
            <p className=""></p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 md:flex-col md:gap-4">
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
            <div className="flex flex-col gap-3 md:gap-2">
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
            <div className="flex gap-6 md:flex-col md:gap-4">
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
          </div>
          <button
            type="submit"
            className={`bg-[#24bac3] place-self-end w-max text-white font-medium text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-[#2dbbdf] md:text-base ${
              firstName?.length < 2 ||
              lastName?.length < 2 ||
              email === "" ||
              phoneNumber?.length < 3
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={(e) => {
              if (
                firstName.length >= 2 &&
                lastName.length >= 2 &&
                email !== "" &&
                phoneNumber.length >= 3
              ) {
                // Place the existing onClick logic here
                e.preventDefault();
                handleSetUpdaterPhoneNumber();
                setContactStatus("completed");
                setPaymentExpand(true);
              }
            }}
          >
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};
