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
import { ROUTE_NAMES } from '../navigation/constants';
import { ROOT_SIGNIN } from '../navigation/signin';
import usePush from '../navigation/usePush';
import useSetRoot from '../navigation/useSetRoot';

const Root = (props: { componentId: string }) => {
  const push = usePush(props.componentId);
  const setRoot = useSetRoot();
  const { authenticated, signOut } = useAuth();
  const showAlert = useCallback(() => {
    Alert.alert(
      `User is initially: ${
        authenticated ? 'authenticated' : 'not authenticated'
      } on Root screen`
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
            push({ name: ROUTE_NAMES.HOME });
          }}
          title="Go Home"
        />
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

export default Root;
