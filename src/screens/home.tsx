import React, { useEffect } from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';

import useAuth from '../contexts/useAuth';

const Home = () => {
  const auth = useAuth();
  useEffect(() => {
    Alert.alert(
      `User is initially: ${
        auth.authenticated ? 'authenticated' : 'not authenticated'
      } on Home screen`
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{ color: 'black' }}>HELLO</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
