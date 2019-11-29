import reducer from '../user.js';

const initialState = {
  activeCity: ``,
  citiesList: [],
};

describe(`reducer works correctly`, () => {
  it(`should return initialState when no paramteres`, () => {
    const action = {};
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it(`should set given city as active`, () => {
    const action = {type: `SET_CITY`, payload: `AAA`};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {activeCity: `AAA`});

    expect(newState).toEqual(expectedState);
  });

  it(`should set cities list by a given data`, () => {
    const action = {type: `SET_CITIES`, payload: [1, 2, 3]};
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {citiesList: [1, 2, 3]});

    expect(newState).toEqual(expectedState);
  });
});
