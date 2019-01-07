import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SparkView from './sparkView';

describe("Button", () => {
  const wrapper = shallow(<SparkView/>);
  it ("renders correctly", () => {
    expect(renderer.create(wrapper).toJSON()).toMatchSnapshot();
  })
});
