import {isEmpty, propEq, find, isNil} from 'ramda';

import {setCitiesList, setCity} from './user.js';
import {getFilteredOffers} from '../selectors/data.js';
import {getActviveCity} from '../selectors/user.js';

const initialState = {
  offers: [],
  offerReviews: [],
  filteredOffers: [],
  responses: {},
};

export const setOffers = (offers) => ({type: `SET_OFFERS`, payload: offers});
export const setRviews = (reviews) => ({type: `SET_REVIEWS`, payload: reviews});
export const setFilteredOffers = (offers) => ({type: `SET_FILTERED_OFFERS`, payload: offers});
export const saveAuthResponse = (authResponse) => ({type: `SAVE_AUTH_RESPONSE`, payload: authResponse});

const filterOffers = (activeCity, offers) => {
  return offers.filter((item) => {
    return item.city.name === activeCity;
  });
};

export const loadOffers = (offerId) => (dispatch, getState, api) => {
  const activeCity = getActviveCity(getState());

  return api.get(`/hotels`)
  .then((response) => {
    const offers = response.data;
    let citiesList = [];

    offers.forEach((item) => {
      const cityName = item.city.name;
      return citiesList.includes(cityName) ? null : citiesList.push(cityName);
    });


    dispatch(setOffers(offers));
    dispatch(setCitiesList(citiesList));

    if (isEmpty(activeCity) && isNil(offerId)) {
      const defaultCity = citiesList[0];
      const filteredOffers = filterOffers(defaultCity, offers);
      dispatch(setCity(defaultCity));
      dispatch(setFilteredOffers(filteredOffers));
    }

    if (isEmpty(activeCity) && !isNil(offerId)) {
      const offer = find(propEq(`id`, offerId))(offers);
      const defaultCity = offer.city.name;
      const filteredOffers = filterOffers(defaultCity, offers);
      dispatch(setCity(defaultCity));
      dispatch(setFilteredOffers(filteredOffers));
    }
  });
};

export const loadReviews = (id) => (dispatch, getState, api) => {
  return api.get(`/comments/${id}`)
  .then((response) => {
    const reviews = response.data;

    dispatch(setRviews(reviews));
  });
};

export const updateOffersList = () => (dispatch, getState) => {
  const offers = getFilteredOffers(getState());
  dispatch(setFilteredOffers(offers));
};

export const ActionCreator = {
  setOffers,
  setRviews,
  setFilteredOffers,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case `SET_OFFERS`:
      return Object.assign({}, state, {offers: action.payload});
    case `SET_FILTERED_OFFERS`:
      return Object.assign({}, state, {filteredOffers: action.payload});
    case `SAVE_AUTH_RESPONSE`:
      const responses = Object.assign({}, state.responses, {auth: action.payload});
      return Object.assign({}, state, {responses});
    case `SET_REVIEWS`:
      return Object.assign({}, state, {offerReviews: action.payload});
  }

  return state;
};

export default data;
