import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks -validation/use-input";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const passwordValidation = (value) => {
  return value.trim() !== "" && value.trim().length > 6;
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
          htmlFor="new-password"
          className={`${!enteredPasswordIsValid && classes.invalid}`}
        >
          {!enteredPasswordIsValid ? "Invalid Password" : "New Password"}
        </label>
        <input
          type="password"
          minLength="7"
          ref={newPasswordInputRef}
          id="new-password"
          onChange={passwordChangedHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        {passwordInputHasError && (
          <p style={{ color: "#b40e0e" }}>
            Password must not be empty or less than 7.
          </p>
        )}
      </div>
      <div className={classes.action}>
        <button disabled={!formIsValid}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
