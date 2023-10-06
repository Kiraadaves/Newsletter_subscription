import icon from "../assets/images/icon-success.svg"
import PropTypes from 'prop-types'; // Import PropTypes


const Success = (props) => {
    const handleClick = () => {
        props.onClick();
    };
  return (
    <div className="white rounded-3xl p-12 md:w-1/2 ">
      <div className="md:mt-0 mt-24">
        <img alt="icon" src={icon} />
      </div>
      <h1 className="mt-9 dark-slate-grey-text font-bold text-5xl">
        Thanks for subscribing!
      </h1>
      <p className="mt-9">
        A confirmation email has been sent to
        <span className="dark-slate-grey-text font-bold">
          {" "}
          {props.text}.
        </span>{" "}
        Please open it and click the button inside to confirm your subscription.
      </p>
          <button
              onClick={handleClick}
              className="mt-40 md:mt-9 w-full dark-slate-grey whitetext py-3 font-semibold rounded-lg">
        Dismiss message
      </button>
    </div>
  );
};

Success.propTypes = {
  onClick: PropTypes.func.isRequired,
  // Ensure onClick is a function and required
  text: PropTypes.string.isRequired,
};

export default Success;
