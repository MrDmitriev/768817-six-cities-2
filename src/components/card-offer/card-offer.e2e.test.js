import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CardOffer} from './card-offer.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`simulates onMouseEnter event`, () => {
  const onMouseEnterHandler = jest.fn();
  const props = {
    offer: {
      name: `aaa`,
      price: 10,
      type: `bbb`,
      images: [`ccc`],
    },
    onMouseEnterHandler: jest.fn(),
    offerName: `offer-1`,
  };

  const wrapper = shallow(<CardOffer {...props} />);

  wrapper.find(`img`).first().simulate(`mouseEnter`, `offer-1`);

  expect(onMouseEnterHandler).toHaveBeenCalledWith(`offer-1`);
});
