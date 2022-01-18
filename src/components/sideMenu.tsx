import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

const SideMenu = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{color: 'black'}}>Side menu</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideMenu;
