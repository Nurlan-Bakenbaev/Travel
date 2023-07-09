import React from "react";
import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdWhatsapp, MdEmail } from "react-icons/md";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setTelNumber("");
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <div className="contact">
        <div className="contact-flex">
          <form className="contact-form" onSubmit={handleSignup}>
            <h1>Interested ?</h1>

            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="numberInput">Mobile</label>
            <input
              type="number"
              id="numberInput"
              value={telNumber}
              onChange={(e) => setTelNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
            <label htmlFor="dateInput">
              Select perfect day to contact you:
            </label>
            <input
              type="date"
              id="dateInput"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <button>Submit</button>
          </form>
          <div className="ourContacts">
            <h1> Travel.ltd</h1>
            <div className="d-flex">
              <p>Almata. st.Abay 55</p>
              <Link to="https://goo.gl/maps/1ZeQcymQLfCisRyT7">
                <p className="google-maps"> find on Google maps</p>
              </Link>
            </div>
            <Link to="https://web.whatsapp.com/">
              <p className="d-flex">
                <MdWhatsapp size={25} /> whatsApp: +789654321
              </p>
            </Link>
            <Link to="https://www.google.com/intl/ru/gmail/about/">
              <h4 className="d-flex">
                <MdEmail /> travelKazahstan@gmail.com
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
