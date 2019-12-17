import reducer from '../data.js';

const initialState = {
  offers: [],
  offerReviews: [],
  filteredOffers: [],
  favoriteOffers: [],
  responses: {},
};

describe(`reducer works correctly`, () => {
  it(`should return initialState, when no parametres`, () => {
    const action = {};
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it(`should set offers by a given data`, () => {
    const action = {type: `SET_OFFERS`, payload: [1, 2, 3]};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {offers: [1, 2, 3]});
    expect(newState).toEqual(expectedState);

  });

  it(`should set filtered offers by a given data`, () => {
    const action = {type: `SET_FILTERED_OFFERS`, payload: [1, 2, 3]};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {filteredOffers: [1, 2, 3]});
    expect(newState).toEqual(expectedState);
  });

  it(`should set reviews by a given data`, () => {
    const action = {type: `SET_REVIEWS`, payload: [1, 2, 3]};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {offerReviews: [1, 2, 3]});

    expect(newState).toEqual(expectedState);
  });

  it(`should save a response with auth info from BE`, () => {
    const action = {type: `SAVE_AUTH_RESPONSE`, payload: `aaa`};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {responses: {auth: `aaa`}});

    expect(newState).toEqual(expectedState);
  });

  it(`should save favourite offers sgiven by BE`, () => {
    const action = {type: `SET_FAVORITE_OFFERS`, payload: [1, 2, 3]};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {favoriteOffers: [1, 2, 3]});

    expect(newState).toEqual(expectedState);
  });

});
