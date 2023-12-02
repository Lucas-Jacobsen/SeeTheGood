import React, { useState, FormEvent } from "react";
import "./about.css"; // Import your CSS file

function About() {
  const [user, setUser] = useState({ email: "", name: "", agree: "" });
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or processing for email
    // If validation is successful, move to the next step
    const newEmail = e.target.elements.email.value || "";
    setUser({ ...user, email: newEmail });
    setStep(2);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or processing for name
    // If validation is successful, move to the next step
    const newName = e.target.elements.name.value || "";
  setUser({ ...user, name: newName });
    setStep(3);
  };

  const handleAgreeSubmit = (e) => {
    const agreementValue = e.target.elements.agree.value.trim().toLowerCase(); // Trim and convert to lowercase for case-insensitive check

  // Check if the user has entered "I agree"
  if (agreementValue === "i agree") {
    // If validation is successful, create the user model and display the thank you message
    const newUser = { ...user, agree: agreementValue };
    setUser(newUser);
    setStep(4);
  } else {
    // If the user didn't enter "I agree," you can display an error message or take other actions
    alert("Please type 'I agree' to receive the newsletter in your email inbox.");
  }
  };
  return (
    <div className="about">
      <header className="header">embrace the positive</header>
      <div className="content-container">
        <div className="triangle"></div>

        <div className="content">
          <p className="paragraph">
            See the good in the world. In a world filled with negativity and
            despair, there are countless moments of beauty, kindness, and hope
            happening every day. We believe that the world is filled with
            goodness, and it's time to shine a spotlight on these stories.
          </p>
        </div>
        <div className="text-section">
          <h3>Why?</h3>
          <hr />
          <ul>
            <li>
              <p>Daily Uplifting News</p>
            </li>
            <li>
              <p>Empowering Stories</p>
            </li>
            <li>
              <p>Scientific Discoveries</p>
            </li>
            <li>
              <p>Creative Spotlights</p>
            </li>
            <li>
              <p>Success Stories</p>
            </li>
            <li>
              <p>And Much More...</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="Email-Form-Header">Join the Newsletter</div>
    <div className="Email-Form-Background"></div>
    {step === 1 && (
        <div className="Email-Form">
          <form onSubmit={handleEmailSubmit}>
            <input type="email" placeholder="Enter your email" name="email" required />
            <button type="submit">&gt;</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="Email-Form">
          <form onSubmit={handleNameSubmit}>
            <input type="text" placeholder="Enter your full name" name="name" required />
            <button type="submit">&gt;</button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div className="Email-Form">
          <form onSubmit={handleAgreeSubmit}>
            <input type="text" name="agree" required />

            <button type="submit">&gt;</button>
          </form>
          <p style={{fontSize:"1rem"}}>Type "I agree" to receive the newsletter in your email inbox.</p>
        </div>
      )}
      {step === 4 && (
        <div className="Thank-You-Message">
          <p>Thank you, {user.name}  for subscribing!</p>
        </div>
      )}
     
    </div>



  );
     

}


export default About;
