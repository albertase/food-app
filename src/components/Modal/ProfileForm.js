import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks -validation/use-input";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const passwordValidation = (value) => {
  return value.includes("@") && value.includes(".com");
};

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidation);

  let formIsValid = false;

  if (enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    //Add Validation

    if (!enteredPasswordIsValid) {
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDPbHagJYUL0Xn2PNv753puWCvP6WNAVlY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecure: false,
        }),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      // Assumption: Always succeeded

      history.replace("/auth");
    });
    resetPasswordInput();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div
        className={`${classes.control} ${
          !enteredPasswordIsValid && classes.invalid
        }`}
      >
        <label
          htmlFor="email"
          className={`${!enteredPasswordIsValid && classes.invalid}`}
        >
          {!enteredPasswordIsValid ? "Invalid Email" : "Your Email"}
        </label>
        <input
          type="email"
          ref={newPasswordInputRef}
          id="email"
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p style={{ color: "#b40e0e" }}>
            Please enter a valid email.
          </p>
        )}
      </div>
      <div className={classes.action}>
        <button disabled={!formIsValid}>Send mail</button>
      </div>
    </form>
  );
};

export default ProfileForm;
