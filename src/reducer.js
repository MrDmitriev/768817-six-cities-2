const initialState = {
  city: ``,
  offersList: [],
};

const setCity = (city) => {
  return {
    type: `SET_CITY`,
    payload: city,
  };
};

const setDefaultCity = (offers) => {
  const defaultCity = offers[0].city;
  return {
    type: `SET_CITY`,
    payload: defaultCity,
  };
};

const setOffersList = (city, offers) => {
  const newOffersList = offers.filter((item) => {
    return item.city === city;
  });

  return {
    type: `SET_OFFERS_LIST`,
    payload: newOffersList,
  };
};

export const ActionCreator = {
  setCity,
  setDefaultCity,
  setOffersList,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_CITY`:
      return Object.assign({}, state, {city: action.payload});

    case `SET_OFFERS_LIST`:
      return Object.assign({}, state, {offersList: action.payload});
  }

  return state;
};
