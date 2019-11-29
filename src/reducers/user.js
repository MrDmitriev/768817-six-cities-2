import {setFilteredOffers} from './data.js';
import {getFilteredOffers} from '../selectors/data.js';

const initialState = {
  activeCity: ``,
  citiesList: [],
};

export const setCity = (city) => ({type: `SET_CITY`, payload: city});
export const setCitiesList = (cities) => ({type: `SET_CITIES`, payload: cities});

export const startUpOffers = () => (dispatch, getState) => {
  const state = getState();
  const filteredOffers = getFilteredOffers(state);
  dispatch(setFilteredOffers(filteredOffers));
};

export const ActionCreator = {
  setCity
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `SET_CITY`:
      return Object.assign({}, state, {activeCity: action.payload});

    case `SET_CITIES`:
      return Object.assign({}, state, {citiesList: action.payload});
  }

  return state;
};

export default user;
