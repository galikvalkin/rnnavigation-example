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

const Tab1 = (props: { componentId: string }) => {
  const setRoot = useSetRoot();
  const { authenticated, signOut } = useAuth();
  const showAlert = useCallback(() => {
    Alert.alert(
      `User is initially: ${
        authenticated ? 'authenticated' : 'not authenticated'
      } on Tab 1 screen`
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

Tab1.options = {
  topBar: {
    title: {
      text: 'Tab 1',
    }
  },
  bottomTab: {
    text: 'Tab 1'
  }
};

export default Tab1;
