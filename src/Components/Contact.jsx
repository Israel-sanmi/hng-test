import React from "react";
import zuri from "../assets/zuri.png";
import ingressive from "../assets/ingressive.png";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(true);

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (message && firstname && lastname && email === "") {
      setAlert(true);
    } else {
      setAlert(false);
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <div className="md:flex block py-10 px-4 md:py-0 md:px-0 h-screen w-full justify-center items-center">
        <div>
          <div>
            <h1 className=" text-[36px] font-semibold">Contact Me</h1>
            <p className="font-normal pb-7 pt-2 text-sm text-[#475467]">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div>
            <form className="">
              <div className="md:flex block gap-5">
                <div>
                  <label className="text-[14px] font-normal text-[#344054]">
                    First name
                  </label>{" "}
                  <br />
                  <input
                    id="first_name"
                    className={`border ${
                      !firstname ? "focus:ring-red-500" : "focus:ring-sky-500"
                    } focus:outline-none focus:ring-2 shadow-sm border-[#D0D5DD] rounded-md indent-3 text-xs w-[348px] h-[44px] py-1`}
                    type="text"
                    placeholder="Enter your first name"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                    value={firstname}
                  />{" "}
                  {!firstname && (
                    <p className="text-red-500 mb-4 md:mb-0 text-xs">
                      Please enter your firstname
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-[14px] font-normal text-[#344054]">
                    Last name
                  </label>{" "}
                  <br />
                  <input
                    id="last_name"
                    className={`border ${
                      !lastname ? "focus:ring-red-500" : "focus:ring-sky-500"
                    } focus:outline-none focus:ring-2 shadow-sm border-[#D0D5DD] rounded-md indent-3 text-xs w-[348px] h-[44px] py-1`}
                    type="text"
                    placeholder="Enter your last name"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                    value={lastname}
                  />
                  {!lastname && (
                    <p className="text-red-500 text-xs">
                      Please enter your lastname
                    </p>
                  )}
                </div>
              </div>
              <div className="my-5">
                <label className="text-[14px] font-normal text-[#344054]">
                  Email
                </label>{" "}
                <br />
                <input
                  id="email"
                  className={`border focus:outline-none ${
                    !email ? "focus:ring-red-500" : "focus:ring-sky-500"
                  } focus:ring-2 shadow-sm border-[#D0D5DD] rounded-md indent-3 text-xs w-full h-[44px] py-1`}
                  type="Email"
                  placeholder="yourname@email.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                {!email && (
                  <p className="text-red-500 text-xs">
                    Please enter your email address
                  </p>
                )}
              </div>
              <div>
                <label className="text-[14px] font-normal text-[#344054]">
                  Message
                </label>{" "}
                <br />
                <textarea
                  id="message"
                  className={`border focus:outline-none focus:ring-2 ${
                    !message ? "focus:ring-red-500" : "focus:ring-sky-500"
                  }  shadow-sm text-[#667085] border-[#D0D5DD] rounded-md indent-3 text-xs w-full h-[100px] py-1`}
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                />
                {!message && (
                  <p className="text-red-500 text-xs">Please enter a message</p>
                )}
              </div>
              <div className="flex gap-2 py-2 text-sm text-[#475467]">
                <input
                  type="checkbox"
                  className=""
                  name="agreement"
                  id="agreement"
                />
                <p>
                  You agree to providing your data to Israel Adetomokun who may
                  contact you.
                </p>
              </div>
              <button
                disabled={!message}
                onClick={onClickSubmit}
                id="btn_submit"
                className="bg-[#1570EF] disabled:bg-[#B2DDFF] disabled:cursor-not-allowed outline-none hover:bg-[#175CD3] w-full py-3 text-sm text-white rounded-md my-4"
              >
                {/* {!sent ? "Send message" : "Sent!"} */}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="block mt-2">
        <div className="md:flex ml-5 my-5 block justify-around py-2 md:py-5">
          <img className="object-contain" src={zuri} alt="" />
          <p className="py-2">HNG Internship 9 Frontend Task</p>
          <img src={ingressive} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
