import {setFilteredOffers, saveAuthResponse, setReviews} from './data.js';
import {getFilteredOffers} from '../selectors/data.js';
import {getFormData, getActiveOffer} from '../selectors/user.js';
import history from '../history/history.js';

const initialState = {
  activeCity: ``,
  activeOffer: null,
  hoveredOffer: null,
  citiesList: [],
  isAuthorizationRequired: true,
  form: {},
  submitDefaultState: true
};

export const setCity = (city) => ({type: `SET_CITY`, payload: city});
export const setCitiesList = (cities) => ({type: `SET_CITIES`, payload: cities});
export const requireAuthorization = (isAuthorizationRequired) => ({type: `REQUIRE_AUTHORIZATION`, payload: isAuthorizationRequired});
export const updateFieldValue = (fieldName, value) => ({type: `UPDATE_FIELD_VALUE`, payload: {fieldName, value}});
export const setActiveOffer = (offerId) => ({type: `SET_ACTIVE_OFFER`, payload: offerId});
export const setHoveredOffer = (hoveredOfferId) => ({type: `SET_HOVERED_OFFER`, payload: hoveredOfferId});
export const resetForm = () => ({type: `RESET_FORM`});
export const setSubmitButtonState = (bool) => ({type: `SET_BUTTON_STATE`, payload: bool});

export const startUpOffers = () => (dispatch, getState) => {
  const state = getState();
  const filteredOffers = getFilteredOffers(state);
  dispatch(setFilteredOffers(filteredOffers));
};

export const checkAuthorization = () => (dispatch, getState, api) => {
  return api.get(`/login`)
  .then((response) => {
    dispatch(saveAuthResponse(response.data));
    dispatch(requireAuthorization(false));
  });
};

export const logIntoApp = () => (dispatch, getState, api) => {
  const formData = getFormData(getState());
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
    return history.goBack();
  });
};

export const sendReview = () => (dispatch, getState, api) => {
  const formData = getFormData(getState());
  const activeOffer = getActiveOffer(getState());
  const {rating, comment} = formData;

  return api.post(`/comments/${activeOffer}`, {
    rating,
    comment,
  })
  .then((response) => {
    const review = response.data;
    dispatch(setSubmitButtonState(false));
    dispatch(setReviews(review));
    dispatch(resetForm());
  });

};

export const ActionCreator = {
  setCity,
  setCitiesList,
  requireAuthorization,
  updateFieldValue,
  setActiveOffer,
  setHoveredOffer,
  resetForm,
  sendReview,
  checkAuthorization,
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
      const form = Object.assign({}, state.form, {[fieldName]: value});

      return Object.assign({}, state, {form});

    case `SET_ACTIVE_OFFER`:
      return Object.assign({}, state, {activeOffer: action.payload});

    case `SET_HOVERED_OFFER`:
      return Object.assign({}, state, {hoveredOffer: action.payload});

    case `RESET_FORM`:
      return Object.assign({}, state, {form: {}, submitDefaultState: true});

    case `SET_BUTTON_STATE`:
      return Object.assign({}, state, {submitDefaultState: action.payload});
  }

  return state;
};

export default user;
