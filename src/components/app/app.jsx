import React from 'react';
import PropTypes from 'prop-types';

import {MainPage} from '../main-page/main-page.jsx';

export const App = (props) => {
  const {offers} = props;
  const buttonClickHanler = () => {
    return null;
  };

  return <MainPage onButtonClickHandler={buttonClickHanler} offers={offers} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    src: PropTypes.string,
    position: PropTypes.array,
  })),
};
