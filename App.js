import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import SparkButton from './src/components/button/sparkButton';
import SparkView from './src/components/view/sparkView';

export default class App extends React.Component {
  render() {
    return (
      <SparkView>
        <SparkButton onPress={()=>{ console.log('press') }}>Log in</SparkButton>
        <SparkButton onPress={()=>{ console.log('press') }}>Sign up</SparkButton>
      </SparkView>
    );
  }
}
