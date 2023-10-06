import { useState, useEffect } from "react";
import mobile from "../assets/images/mobile.svg";
import desktop from "../assets/images/desktop.svg";
import icon from "../assets/images/icon-list.svg";
import PropTypes from 'prop-types'; // Import PropTypes

const Form = (props) => {
  const details = [
    {
      id: 1,
      src: `${icon}`,
      text: "Product discovery and building what matters",
    },
    {
      id: 2,
      src: `${icon}`,
      text: "Measuring to ensure updates are a success",
    },
    {
      id: 3,
      src: `${icon}`,
      text: "And much more!",
    },
  ];

  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  console.log(email);

  const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit(email);
  };
  return (
    <div className="white rounded-3xl flex flex-col md:flex-row gap-2 md:p-6 ">
      <div className="flex flex-col px-6 py-8">
        <h1 className="dark-slate-grey-text font-bold text-5xl mb-3 mt-4">
          Stay updated!
        </h1>
        <p className="dark-slate-grey-text">
          Join 60,000+ product managers receiving monthly{" "}
        </p>
        <p className="dark-slate-grey-text mb-5">updates on:</p>
        {details.map((detail) => {
          return (
            <div key={detail.id} className="flex items-center mb-3">
              <div>
                <img alt="icon" src={icon} className="icon"/>
              </div>
              <div className="">
                <p className="px-6 "> {detail.text}</p>
              </div>
            </div>
          );
        })}

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex flex-col relative">
            <label
              htmlFor="mail"
              className="dark-slate-grey-text font-semibold"
            >
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleFocus}
              value={email}
              id="mail"
              type="email"
              placeholder="email@company.com"
              required={true}
              className="p-4 rounded-lg mt-2"
              autoFocus={focused}
            ></input>
            <span className="span pb-1  text-red-600">
              Please enter a valid email
            </span>
          </div>

          <div>
            <button className=" mt-5 w-full dark-slate-grey whitetext py-3 font-semibold rounded-lg">
              Subscribe to monthly newsletter
            </button>
          </div>
        </form>
      </div>

      <img
        src={isMobile ? mobile : desktop}
        alt="image"
        className="h-full order-first md:order-last"
      />
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Ensure onClick is a function and required
};
export default Form;
