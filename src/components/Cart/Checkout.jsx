import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (empty) => empty.trim() === "";
const isFiveChars = (char) => char.trim().length === 5;

const Checkout = (props) => {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [valid, setValid] = useState(false)
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const handleName = (e) => {
    setName(e.target.value)
    if(isEmpty){
      setValid(true)
    }
  }

  const handleStreet = (e) => {
    setStreet(e.target.value)
    if(isEmpty){
      setValid(true)
    }
  }


  const handlePostalCode = (e) => {
    setPostalCode(e.target.value)
    if(!isFiveChars){
      setValid(true)
    }
  }

  const handleCity = (e) => {
    setCity(e.target.value)
    if(isEmpty){
      setValid(true)
    }
  }
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const amountInputRef = useRef();

  const confirmHandler = (event) => {
    setValid(false);
    event.preventDefault();
    const nameInput = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalCodeInput = postalCodeInputRef.current.value;
    const cityInput = cityInputRef.current.value;
    const amountInput = amountInputRef.current.value;

    const enteredNameIsValid = !isEmpty(nameInput);
    const enteredStreetIsValid = !isEmpty(streetInput);
    const enteredCityIsValid = !isEmpty(cityInput);
    const enteredPostalCodeIsValid = isFiveChars(postalCodeInput);
    const enteredAmountIsValid = !isEmpty(cityInput);


    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
      amount: enteredAmountIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid && enteredAmountIsValid


    if (!formIsValid) {
      return;
    }

    

    props.onConfirm({
        name: nameInput,
        street: streetInput,
        postalCode: postalCodeInput,
        city: cityInput,
        amount: amountInput,
    })
    // setValid(true)

  };


  const separator = (amt) => {
    var str = amt.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  const validButton = valid && name && street && postalCode && city ?  "Confirm" : "Type"
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
        <label htmlFor="amount">Total Amount</label>
        <input type="text" value={separator(props.totalPrice)} ref={amountInputRef} id="amount" />
        {formInputValidity.amount && <p>Please make sure you add item(s) to the cart</p>}
      </div>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" onChange={handleName} value={name} ref={nameInputRef} id="name" />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" onChange={handleStreet} value={street} ref={streetInputRef} id="street" />
        {!formInputValidity.street && (
          <p>Please enter a valid street address</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input onChange={handlePostalCode} value={postalCode} ref={postalCodeInputRef} id="postal" />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input onChange={handleCity} value={city} ref={cityInputRef} id="city" />
        {!formInputValidity.city && <p>Please enter a valid city address</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.closeCheckout}>
          Cancel
        </button>

        <button className={classes.submit}>{validButton}</button>
      </div>
    </form>
  );
};

export default Checkout;
