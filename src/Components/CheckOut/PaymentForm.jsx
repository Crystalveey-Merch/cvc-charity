/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { serverTimestamp, addDoc, collection, db } from "../../Config/firebase";
// import { toast } from "react-toastify";
// import moment from "moment";
import { PaystackButton } from "react-paystack";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
import PaymentSuccessful from "../SVG/PaymentSuccessful";
import lockSVG from "../../assets/lock.svg";

export const PaymentForm = ({
  purchaseData,
  name,
  email,
  updatedPhoneNumber,
  paymentExpand,
  termsAccepted,
  setTermsAccepted,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showBankStep, setShowBankStep] = useState(false);
  const [paymentSentModal, setPaymentSentModal] = useState(false);


  const payStackPublickKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // const title = purchaseData.title ? purchaseData.title : " ";

  const componentProps = {
    email: email,
    amount: Number(purchaseData.price * 100), // Update amount based on installment option
    publicKey: payStackPublickKey,
    text: `Donate ${purchaseData?.symbol}${purchaseData?.price} with Paystack`,
    onSuccess: () => {
      handlePayByPaystack();
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  const handlePayByBank = async () => {
    setPaymentSentModal(true);
    setTermsAccepted(false);
    // setLoading(true);

    // const transactionRef = collection(db, "transactions");

    // try {
    //   await addDoc(transactionRef, {
    //     name,
    //     email,
    //     phoneNumber: updatedPhoneNumber,
    //     title,
    //   });

    //   toast.success("Transaction submitted successfully");
    //   setLoading(false);
    //   setPaymentSentModal(true);
    //   setTermsAccepted(false);
    // } catch (error) {
    //   console.log("error making transaction", error);
    //   toast.error("Error making transaction");
    //   setLoading(false);
    // }
  };

  const handlePayByPaystack = async () => {
    setPaymentSentModal(true);
    setTermsAccepted(false);
    // setLoading(true);
    // const transactionRef = collection(db, "transactions");
    // try {
    //   await addDoc(transactionRef, {
    //     name,
    //     email,
    //     phoneNumber: updatedPhoneNumber,
    //     title,
    //   });
    //   toast.success("Transaction submitted successfully");
    //   setLoading(false);
    //   setPaymentSentModal(true);
    //   setTermsAccepted(false);
    // } catch (error) {
    //   console.log("error making transaction", error);
    //   toast.error("Error making transaction");
    //   setLoading(false);
    // }
  };

  return (
    <div className="border border-[#b8c7cc] rounded-md p-6 flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-2xl">Payment Details</h4>
      </div>
      {paymentExpand && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <img src={lockSVG} className="w-5 h-5" alt="lock-svg" />
            <p className="text-xs text-gray-500">
              Safe and secure payment processing guaranteed.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-xl">Choose payment method</h3>
            <div className="flex flex-col gap-4 ">
              <div className="flex gap-4 items-center w-full border border-gray-300 rounded-md p-4">
                <input
                  type="radio"
                  name="payment"
                  id="card"
                  className="w-5 h-5 cursor-pointer"
                  checked={paymentMethod === "paystack"}
                  onClick={() => (
                    setPaymentMethod("paystack"), setShowBankStep(false)
                  )}
                />
                <label htmlFor="card" className="flex gap-2 items-center">
                  <p className="text-sm text-gray-700">Pay with PayStack</p>
                </label>
              </div>
              {purchaseData.donateType === "one-off" && (
              <div className="flex flex-col gap-10 w-full border border-gray-300 rounded-md p-4">
                <div className="flex gap-4 items-center ">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "bank"}
                    id="card"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => (
                      setPaymentMethod("bank"), setShowBankStep(true)
                    )}
                  />
                  <label htmlFor="card" className="flex gap-2 items-center">
                    <p className="text-sm text-gray-700">
                      Pay through Bank Transfer
                    </p>
                  </label>
                </div>
                <div
                  className={`${
                    showBankStep ? "flex" : "hidden"
                  } flex-col gap-5 w-full`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-900 font-bold">
                      Read the terms and conditions before making payment.{" "}
                      <p className="text-[#24bac3] font-semibold cursor-pointer hover:text-blue-600">
                        Terms and Conditions
                      </p>
                    </p>
                    <h2 className="font-semibold text-lg">
                      Naira Account Details
                    </h2>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Bank Name:
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          Guaranty Trust Bank
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Name:
                        </p>
                        <p className="text-sm text-gray-700">
                          CRYSTALVEEY MERCH
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Number:
                        </p>
                        <p className="text-sm text-gray-700">0741537772</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      Dollar Account Details
                    </h2>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Bank Name:
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          Guaranty Trust Bank
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Name:
                        </p>
                        <p className="text-sm text-gray-700">
                          CRYSTALVEEY MERCH
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Number:
                        </p>
                        <p className="text-sm text-gray-700">0803567624</p>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-900 font-bold">
                    Please send a screenshot of your payment to our whatsapp
                    number +254 8126091411
                  </p>
                  <p className="text-sm text-gray-900 font-bold">
                    Click the button below to confirm your payment
                  </p>
                </div>
              </div>
              )}
              {/* terms */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={termsAccepted}
                  className="w-5 h-5 cursor-pointer"
                  onClick={() =>
                    !termsAccepted
                      ? setTermsAccepted(true)
                      : setTermsAccepted(false)
                  }
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <span className="text-[#24bac3] font-semibold cursor-pointer hover:text-blue-600">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              <div className="flex flex-col"></div>

              {paymentMethod === "paystack" ? (
                <>
                  {!termsAccepted ? (
                    <button
                      className={`place-self-center bg-[#24bac3] w-max text-white font-medium text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-[#2dbbdf] md:text-base md:p-2.5 ${
                        !termsAccepted
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100 cursor-pointer"
                      }`}
                    >
                      Donate {purchaseData?.symbol}
                      {purchaseData?.price} with Paystack
                    </button>
                  ) : (
                    <PaystackButton
                      className={`place-self-center bg-[#24bac3] w-max text-white font-medium text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-[#2dbbdf] md:text-base md:p-2.5 ${
                        !termsAccepted
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100 cursor-pointer"
                      }`}
                      {...componentProps}
                    />
                  )}
                </>
              ) : (
                <button
                  className={`place-self-center bg-[#24bac3] w-max text-white font-medium text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-[#2dbbdf] md:text-base md:p-2.5 ${
                    paymentMethod === "" || !termsAccepted || loading
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                  onClick={() => handlePayByBank()}
                  disabled={paymentMethod === "" || !termsAccepted || loading}
                >
                  {loading ? "Loading..." : "Confirm Donation"}
                </button>
              )}
            </div>
          </div>
          {/* payment sent modal */}
          {paymentSentModal && (
            <div className="fixed top-0 left-0 px-20 z-40 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center text-center sm:px-10">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-6">
                <h2 className="font-semibold text-2xl">
                  {paymentMethod === "paystack"
                    ? "Donation Sent (Successful)"
                    : "Donation Sent (Pending Confirmation)"}
                </h2>
                <p className="text-sm text-gray-700">
                  {paymentMethod === "paystack"
                    ? "Your donation has been sent and confirmed. Thank you!"
                    : "Your donation has been sent. We will get back to you shortly once it's confirmed."}
                </p>
                <div className="flex justify-center items-center">
                  <PaymentSuccessful />
                  {/* <img src={payGif} alt="pay gif"/> */}
                </div>
                <button
                  className="bg-[#24bac3] w-max text-white font-medium text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-[#2dbbdf]"
                  onClick={() => {
                    setPaymentSentModal(false);
                    // navigate("/");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
