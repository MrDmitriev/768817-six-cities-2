import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';

export const App = (props) => {
  const {cities} = props;
  const buttonClickHanler = () => {
    return null;
  };

  return <MainPage onButtonClickHandler={buttonClickHanler} cities={cities} />;
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
};
