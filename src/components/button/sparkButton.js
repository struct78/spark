import React, { Component } from 'react';
import styled from 'styled-components/native';

const SparkButton = ({ onPress, children }) => (
  <SparkButtonContainer onPress={onPress}>
    <SparkButtonText>{children}</SparkButtonText>
  </SparkButtonContainer>
);

const SparkButtonContainer = styled.TouchableHighlight`
  background-color: #000;
  padding: 20px;
  margin-right: 2px;
`

const SparkButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`

export default SparkButton;
