import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SparkButton from './sparkButton';

describe("Button", () => {
  const wrapper = shallow(<SparkButton onPress={()=> { return true; }}>This is a button</SparkButton>);

  it ("renders correctly", () => {
    expect(renderer.create(wrapper).toJSON()).toMatchSnapshot();
  });

  it ("creates text child correctly", () => {
    expect(wrapper.text()).toEqual('This is a button');
  });

  it ("onPress fires correctly", () => {
    expect(wrapper.props().onPress()).toBe(true);
  });
});
