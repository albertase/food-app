import { Fragment, useContext } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import AuthContext from '../../store/auth-context';

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // history.push('/auth')
  }
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Shopping Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
