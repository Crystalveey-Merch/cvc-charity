import twitterSVG from "../../assets/Socials/twitter.svg";
import facebookSVG from "../../assets/Socials/facebook.svg";
import instagramSVG from "../../assets/Socials/instagram.svg";
import whatsappSVG from "../../assets/Socials/whatsapp.svg";


export const SubscribeSec = () => {
  return (
    <div className="px-24 py-6 pt-6 flex gap-6 bgorange-800 xl:px-10 lg:flex-col md:px-3 sm:py-0 sm:pt-0 sm:gap-0 sm:px-0">
      <form
        action="https://api.smtprelay.co/contact/add?version=2"
        data-id="ThKXbMPLch"
        method="post"
        id="ewf_subscriptionForm_ThKXbMPLch"
        className="Inline EWF__form w-1/2 lg:w-full"
      >
        <div className="headers">
          <h4 id="ewf_formheader" className="EWF__header">
            Join Our Cause: Subscribe Today!
          </h4>
          <p id="ewf_formdesc" className="text-sm">
            Subscribe today and be a part of something meaningful. Your
            subscription keeps you connected with our efforts, inspiring
            stories, and the incredible impact we achieve when we unite for a
            cause.
          </p>
        </div>
        <fieldset
          style={{
            border: "none",
          }}
          className="webform-custominputs"
        >
          <div className="inputs">
            <div>
              <label htmlFor="email" className="requiredInput">
                Email
              </label>
              <input
                maxLength="60"
                className="form-control webform__form-control"
                name="email"
                size="20"
                type="email"
                required=""
                placeholder="Please enter your email address"
              />
            </div>
          </div>
          <div className="checkboxes"></div>
          <div
            className="webform-lists"
            style={{
              display: "none",
            }}
          >
            <div className="flex checkboxes js-CVC charity contact list">
              <label className="container-box">
                <input
                  type="checkbox"
                  name="publiclistid"
                  id="hAFFmubN"
                  value="bd594fa7-dd86-4c37-b7f3-cf7a5b135166"
                  checked="checked"
                />
              </label>
              <label className="publiclistlabel" htmlFor="hAFFmubN">
                CVC charity contact list
              </label>
            </div>
          </div>
          <p id="ewf_datadisclaimer"></p>
        </fieldset>

        <fieldset
          className="webform-options style-updated"
          style={{
            border: "none",
          }}
        >
          <input
            type="submit"
            name="submit"
            value="Subscribe"
            id="eesubmit"
            className="EWF__subscribe"
          />
          <input
            type="hidden"
            name="publicaccountid"
            value="84e73628-fe43-4ce6-8b0b-22f14fc5fc2b"
          />
          <input
            type="hidden"
            name="publicformid"
            value="66da4336-48e6-4860-a640-2213872b67e8"
          />
          <input type="hidden" name="returnUrl" value="" />
          <input type="hidden" name="activationReturnUrl" value="" />
          <input type="hidden" name="alreadyactiveurl" value="" />
          <input type="hidden" name="activationTemplate" value="" />
          <input type="hidden" name="source" value="WebForm" />
          <input type="hidden" id="ewf_captcha" name="captcha" value="false" />
          <input type="hidden" name="notifyEmail" value="" />
          <button
            type="button"
            name="dismissForm"
            id="ewf_dismissForm"
            style={{
              display: "none",
              position: "absolute",
              top: "0",
              right: "0",
              float: "right",
            }}
          >
            X
          </button>
          <input
            id="ewf_verifyEmails"
            type="hidden"
            name="verifyemail"
            value="false"
          />
        </fieldset>
        <div id="ewf_style" className="Inline"></div>
        <input type="hidden" name="sendActivation" value="true" />
      </form>
      <div className="w-1/2 bg-gray-100 flex flex-col gap-6 items-center justify-center py-6 lg:w-full">
        <h2 className="text-3xl text-gray-900 font-bold text-center">Follow us</h2>
        <div className="flex gap-7">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterSVG} alt="twitter" className="w-16 h-16 sm:h-14 sm:w-14" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookSVG} alt="facebook" className="w-16 h-16 sm:h-14 sm:w-14" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramSVG} alt="instagram" className="w-16 h-16 sm:h-14 sm:w-14" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsappSVG} alt="whatsapp" className="w-16 h-16 sm:h-14 sm:w-14" />
          </a>
        </div>
      </div>
    </div>
  );
};
