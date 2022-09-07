import { useContext, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useInput from "../../hooks -validation/use-input";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./AuthForm.module.css";

const passwordValidation = (value) => {
  return value.trim() !== "" && value.trim().length > 6;
};

const emailValidation = (value) => {
  return value.includes("@") && value.includes(".com");
};

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidation);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation
    if (!enteredPasswordIsValid) {
      return;
    }

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPbHagJYUL0Xn2PNv753puWCvP6WNAVlY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPbHagJYUL0Xn2PNv753puWCvP6WNAVlY";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/profile");
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
    resetPasswordInput();
    resetEmailInput();
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !enteredPasswordIsValid && classes.invalid
          }`}
        >
          <label
            htmlFor="email"
            className={`${!enteredEmailIsValid && classes.invalid}`}
          >
            {!enteredEmailIsValid ? "Invalid Email" : "Your Email"}
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
        <div
          className={`${classes.control} ${
            !enteredEmailIsValid && classes.invalid
          }`}
        >
          <label
            htmlFor="password"
            className={`${!enteredPasswordIsValid && classes.invalid}`}
          >
            {!enteredPasswordIsValid ? "Invalid Password" : "Your Password"}
          </label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordInputHasError && (
            <p className="error-text">
              Password must not be empty or less than 7.
            </p>
          )}
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button disabled={!formIsValid}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && (
            <div>
              <LoadingSpinner />{" "}
            </div>
          )}
          {!isLoading && (
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          )}
          {!isLoading && <Link to="/reset">Forgotten password?</Link>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
