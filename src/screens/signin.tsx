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
import { BOTTOM_TABS } from '../navigation/bottomTabs';
import { SIDE_MENU } from '../navigation/sideMenu';
import { useSetRoot } from '../navigation/util';

const Signin = (props: { componentId: string }) => {
  const setRoot = useSetRoot();
  const { authenticated, signIn } = useAuth();
  const showAlert = useCallback(() => {
    Alert.alert(
      `User is initially: ${
        authenticated ? 'authenticated' : 'not authenticated'
      } on Login screen`
    );
  }, [authenticated]);

  useEffect(() => {
    showAlert();
  }, [authenticated]);

  const authenticateWithTabs = useCallback(() => {
    signIn();
    setRoot(BOTTOM_TABS);
  }, []);
  const authenticateWithSidebar = useCallback(() => {
    signIn();
    setRoot(SIDE_MENU);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button onPress={authenticateWithTabs} title="Authenticate with Tabs" />
        <Button onPress={authenticateWithSidebar} title="Authenticate with Sidebar" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
