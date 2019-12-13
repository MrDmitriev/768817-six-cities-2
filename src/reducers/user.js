import {setFilteredOffers, saveAuthResponse} from './data.js';
import {getFilteredOffers} from '../selectors/data.js';
import {getAuthFormData} from '../selectors/user.js';

const initialState = {
  activeCity: ``,
  activeOffer: null,
  hoveredOffer: null,
  citiesList: [],
  isAuthorizationRequired: false,
  formAuth: {},
};

export const setCity = (city) => ({type: `SET_CITY`, payload: city});
export const setCitiesList = (cities) => ({type: `SET_CITIES`, payload: cities});
export const requireAuthorization = (isAuthorizationRequired) => ({type: `REQUIRE_AUTHORIZATION`, payload: isAuthorizationRequired});
export const updateFieldValue = (fieldName, value) => ({type: `UPDATE_FIELD_VALUE`, payload: {fieldName, value}});
export const setActiveOffer = (offerId) => ({type: `SET_ACTIVE_OFFER`, payload: offerId});
export const setHoveredOffer = (hoveredOfferId) => ({type: `SET_HOVERED_OFFER`, payload: hoveredOfferId});

export const startUpOffers = () => (dispatch, getState) => {
  const state = getState();
  const filteredOffers = getFilteredOffers(state);
  dispatch(setFilteredOffers(filteredOffers));
};

export const checkAuthorization = () => (dispatch, getState, api) => {
  const formData = getAuthFormData(getState());
  const {email, password} = formData;

  if (!email || !password) {
    return false;
  }

  return api.post(`/login`, {
    email,
    password,
  })
  .then((response) => {
    dispatch(saveAuthResponse(response.data));
    dispatch(requireAuthorization(false));
  });
};

export const ActionCreator = {
  setCity,
  setCitiesList,
  requireAuthorization,
  updateFieldValue,
  setActiveOffer,
  setHoveredOffer,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `SET_CITY`:
      return Object.assign({}, state, {activeCity: action.payload});

    case `SET_CITIES`:
      return Object.assign({}, state, {citiesList: action.payload});

    case `REQUIRE_AUTHORIZATION`:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});

    case `UPDATE_FIELD_VALUE`:
      const {fieldName, value} = action.payload;
      const formAuth = Object.assign({}, state.formAuth, {[fieldName]: value});

      return Object.assign({}, state, {formAuth});

    case `SET_ACTIVE_OFFER`:
      return Object.assign({}, state, {activeOffer: action.payload});

    case `SET_HOVERED_OFFER`:
      return Object.assign({}, state, {hoveredOffer: action.payload});
  }

  return state;
};

export default user;
