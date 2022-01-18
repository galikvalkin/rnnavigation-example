import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

const Modal = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: 'black'}}>Modal</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Modal;
