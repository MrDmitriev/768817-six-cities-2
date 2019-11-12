import {reducer} from './reducer.js';

const initialState = {
  city: ``,
  offersList: [],
};

describe(`reducer works correctly`, () => {
  it(`should return initialState when there is no parametres`, () => {
    const action = {};
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it(`should change a city, with a given city name`, () => {
    const action = {
      type: `SET_CITY`,
      payload: `Paris`,
    };
    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {city: `Paris`});

    expect(newState).toEqual(expectedState);
  });

  it(`should change offersList by a given list of properties`, () => {
    const action = {
      type: `SET_OFFERS_LIST`,
      payload: [
        {
          name: `ABC`,
          price: 123,
          type: `bbb`,
          src: `AAA`,
          position: [1, 2],
          city: `AAA`,
          cityPosition: [3, 4],
        },
      ],
    };

    const newState = reducer(initialState, action);
    const expectedState = Object.assign({}, initialState, {offersList: [
      {
        name: `ABC`,
        price: 123,
        type: `bbb`,
        src: `AAA`,
        position: [1, 2],
        city: `AAA`,
        cityPosition: [3, 4],
      },
    ]});

    expect(newState).toEqual(expectedState);
  });
});
