import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layouts = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layouts;
