import React from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

import useAuth from '../contexts/useAuth';

const List = () => {
  const auth = useAuth();
  Alert.alert(
    `User is initially: ${
      auth.authenticated ? 'authenticated' : 'not authenticated'
    } on List screen`
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{ color: 'black' }}>List</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;
