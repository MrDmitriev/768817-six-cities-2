import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {offers} from './mocks/offers.js';
import {cities} from './mocks/cities.js';
import {App} from './components/app/app.jsx';
import {reducer} from './reducer.js';

const init = () => {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

  ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} cities={cities} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
