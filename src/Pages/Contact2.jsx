export const Contact2 = () => {
  return (
    <div className="mt-24 py-20 flex flex-col justify-center gap-6 items-center">
      <form
        action="https://api.smtprelay.co/contact/add?version=2"
        data-id="kKAQWmyLpC"
        method="post"
        id="ewf_subscriptionForm_kKAQWmyLpC"
        className="EWF__form Inline"
      >
        <div className="headers">
          <h4 id="ewf_formheader" className="EWF__header">
            Subscribe to our newsletter
          </h4>
          <p id="ewf_formdesc">
            Enter specific and clear language on the intended use of the
            collected information.
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
                maxLength="81"
                className="form-control webform__form-control"
                name="email"
                size="20"
                type="email"
                required=""
                placeholder="Please enter your email address"
              />
            </div>
            <div>
              <label htmlFor="field_firstname">First name</label>
              <input
                maxLength="100"
                className="form-control webform__form-control"
                name="field_firstname"
                size="20"
                type="text"
                placeholder="Please enter your first name"
              />
            </div>
            <div>
              <label htmlFor="field_lastname">Last name</label>
              <input
                maxLength="100"
                className="form-control webform__form-control"
                name="field_lastname"
                size="20"
                type="text"
                placeholder="Please enter your last name"
              />
            </div>
          </div>
          <div className="checkboxes"></div>
          <div className="webform-lists"></div>
          <div className="consent"></div>
          <p id="ewf_datadisclaimer">
            We use Elastic Email as our marketing automation service. By
            submitting this form, you agree that the information you provide
            will be transferred to Elastic Email for processing in accordance
            with their
            <a
              href="https://elasticemail.com/resources/usage-policies/terms-of-use/"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>{" "}
            and
            <a
              href="https://elasticemail.com/resources/usage-policies/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
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
            value="38a968b5-5ccf-4c80-b0fb-eaa0fca32fcf"
          />
          <input type="hidden" name="returnUrl" value="" />
          <input type="hidden" name="activationReturnUrl" value="" />
          <input type="hidden" name="alreadyactiveurl" value="" />
          <input
            type="hidden"
            name="activationTemplate"
            value="Copy New template: 2024-01-12 10:40:37"
          />
          <input type="hidden" name="source" value="WebForm" />
          <input
            type="hidden"
            name="verifyemail"
            value="false"
            id="ewf_verifyEmails"
          />
          <input type="hidden" id="ewf_captcha" name="captcha" value="false" />
          <input type="hidden" name="sendActivation" value="true" />
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
        </fieldset>
      </form>
    </div>
  );
};
