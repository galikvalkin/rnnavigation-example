import React, {
  useCallback,
  useEffect,
} from 'react';

import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import useAuth from '../contexts/useAuth';
import { ROOT_SIGNIN } from '../navigation/signin';
import useSetRoot from '../navigation/useSetRoot';

const Tab2 = (props: { componentId: string }) => {
  const setRoot = useSetRoot();
  const { authenticated, signOut } = useAuth();
  const showAlert = useCallback(() => {
    Alert.alert(
      `User is initially: ${
        authenticated ? 'authenticated' : 'not authenticated'
      } on Tab 2 screen`
    );
  }, [authenticated]);

  useEffect(() => {
    showAlert();
  }, [authenticated]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button
          onPress={() => {
            signOut();
            setRoot(ROOT_SIGNIN);
          }}
          title="Signout"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

Tab2.options = {
  topBar: {
    title: {
      text: 'Tab 2',
    }
  },
  bottomTab: {
    text: 'Tab 2'
  }
};

export default Tab2;
