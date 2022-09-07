import { Fragment, useContext, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import { CircularProgress } from "@material-ui/core";
import Albert from "../../assets/albert.jpeg"

const KEY = process.env.REACT_APP_STRIPE;

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `₦ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const separator = (amt) => {
    var str = amt.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-req-925f9-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const isSubmittingModalContent = (
    <p>
      <CircularProgress />
    </p>
  );

  const didSubmitModalContent = (
    <Fragment>
      <p className={classes.success}>Successfully sent the order!</p>
      <p className={classes.details}> 👈 Pay now or Pay on delivery 👋 </p>
      <div className={classes.buttonContainer}>
        <StripeCheckout
          name="Albert Shop"
          image={Albert}
          billingAddress
          shippingAddress
          description="Enter Your Payment Info Below."
          amount={100 * 100}
          stripeKey={KEY}
        >
          <div className={classes.actions}>
            <button className={classes.button}>Pay</button>
          </div>
        </StripeCheckout>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{separator(totalAmount)}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          closeCheckout={props.onClose}
          totalPrice={totalAmount}
        />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          {!hasItems && (
            <p className={classes.add}>
              {" "}
              Make Sure You Add Item(s) To The Cart.
            </p>
          )}
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
