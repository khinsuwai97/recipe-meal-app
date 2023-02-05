import React, { Fragment } from 'react';

import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import Dessert from '../components/Dessert';

const Home = () => {
  return (
    <Fragment>
      <Popular />
      <Veggie />
      <Dessert />
    </Fragment>
  );
};

export default Home;
