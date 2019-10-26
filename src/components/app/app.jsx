import React from 'react';

import {MainPage} from '../main-page/main-page.jsx';

const APPARTMENT_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

export const App = () => {
  const buttonClickHanler = () => {
    return null;
  };

  return <MainPage appartments={APPARTMENT_NAMES} onButtonClickHandler={buttonClickHanler} />;
};
