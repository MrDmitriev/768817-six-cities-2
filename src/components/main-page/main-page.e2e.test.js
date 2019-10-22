import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainPage} from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`simulate click event for 1st button`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(<MainPage onButtonClickHanler={clickHandler} />);

  wrapper.find(`button`).first().simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
