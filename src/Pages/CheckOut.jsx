/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ContactForm, PaymentForm } from "../Components";

export const CheckOut = ({ purchaseData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [selectedCountryCode, setSelectedCountryCode] = useState(""); // Set your default country code here
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");

  const [paymentExpand, setPaymentExpand] = useState(false);
  const [contactStatus, setContactStatus] = useState("add");

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [recieveUpdates, setRecieveUpdates] = useState(false);

  const [name, setName] = useState("");

  useEffect(() => {
    setName(firstName + " " + lastName);
    // console.log(Number(purchaseData.price))
  }, [firstName, lastName]);

  //do what's in the useEffect above
  const handleSetUpdaterPhoneNumber = () => {
    if (
      selectedCountryCode === "234" &&
      phoneNumber.startsWith("0") &&
      phoneNumber.length === 11
    ) {
      // Remove the leading 0 and set the rest as updatedPhoneNumber
      const updatedNumber = phoneNumber.slice(1);
      setUpdatedPhoneNumber("+" + selectedCountryCode + updatedNumber);
    } else {
      // If the conditions are not met, set updatedPhoneNumber to the original phoneNumber
      setUpdatedPhoneNumber("+" + selectedCountryCode + phoneNumber);
    }
  };

  // console.log(travelPackage, travellers, selectedCountry)
  return (
    <div className="w-full min-h-[calc(100vh-380px)] flex flex-col gap-16 md:gap-10 sm:gap-8">
      <div className="w-full flex justify-center gap-8 lg:flex-col">
        <div className="w-full flex flex-col gap-10 text-left xl:w-full lg:order-2">
          <ContactForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            selectedCountryCode={selectedCountryCode}
            handleCountryCodeChange={handleCountryCodeChange}
            phoneNumber={phoneNumber}
            handlePhoneNumberChange={handlePhoneNumberChange}
            updatedPhoneNumber={updatedPhoneNumber}
            name={name}
            handleSetUpdaterPhoneNumber={handleSetUpdaterPhoneNumber}
            contactStatus={contactStatus}
            setContactStatus={setContactStatus}
            setPaymentExpand={setPaymentExpand}
            setRecieveUpdates={setRecieveUpdates}
            recieveUpdates={recieveUpdates}
          />
          <PaymentForm
            purchaseData={purchaseData}
            name={name}
            email={email}
            updatedPhoneNumber={updatedPhoneNumber}
            paymentExpand={paymentExpand}
            termsAccepted={termsAccepted}
            setTermsAccepted={setTermsAccepted}
            recieveUpdates={recieveUpdates}
          />
        </div>
      </div>
    </div>
  );
};
