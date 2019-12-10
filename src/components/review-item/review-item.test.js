/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewItem} from './review-item.jsx';

it(`should match snapshot`, () => {
  const review = {
    user: {
      name: `AAA`,
      avatar_url: `BBB`,
    },
    comment: `CCC`,
    rating: `DDD`,
  };

  const wrapper = renderer.create(<ReviewItem review={review} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
