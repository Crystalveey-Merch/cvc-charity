import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use formData to construct the email body
    const emailBody = `
    <div style="width: 100%; height: 100%; background-color: #f4f4f4; padding: 20px 0;">
        <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px;">
            <div style="width: 100%; height: 100px; background-color: #00afef; display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
                <h1 style="font-size: 24px; color: #fff;">Payment Confirmation</h1>
            </div>
            <div style="width: 100%; padding: 0 20px;">
                <h2 style="font-size: 18px; color: #212B36; margin-bottom: 10px;">Hi ${formData.name},</h2>
                <p style="font-size: 16px; color: #212B36; margin-bottom: 10px;">We have received your payment and we are currently processing it. We will get back to you shortly once it's confirmed.</p>
                <p style="font-size: 16px; color: #212B36; margin-bottom: 10px;">Thank you for choosing Crystalveey Travels and Tours.</p>
                <p style="font-size: 16px; color: #212B36; margin-bottom: 10px;">Best regards,</p>
                <p style="font-size: 16px; color: #212B36; margin-bottom: 10px;">Crystalveey Travels and Tours</p>
            </div>
        </div>
    </div>
    `;

    // Send the email using the provided code
    try {
      
      const message = await window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "muzardemoses@gmail.com",
        Password: "C904905EA92AFC0DAE0021AD9365D7665E6F",
        To: "muzardemoses@gmail.com",
        From: "info@mosesadebayo.me",
        Subject: "Contact Form Submission",
        Body: emailBody,
      });

      alert(message);
    } catch (error) {
      console.error(error);
      alert("Error sending email. Please try again.");
    }
  };

  return (
    <div className="mt-24 py-20 flex flex-col justify-center gap-6 items-center">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
          className="w-full text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
          className="w-full text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          onChange={handleChange}
          required
          className="w-full text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          required
          className="w-full text-base font-normal border border-gray-300 shadow rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition ease-in-out duration-500 md:p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
