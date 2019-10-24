import React from 'react';

import {MainPage} from '../main-page/main-page.jsx';

export const App = () => {
  const buttonClickHanler = () => {
    return null;
  };

  return <MainPage onButtonClickHandler={buttonClickHanler} />;
};

