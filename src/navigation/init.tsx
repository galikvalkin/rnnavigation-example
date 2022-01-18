import React from 'react';

import { Navigation } from 'react-native-navigation';

import AuthProvider from '../contexts/authProvider';
import AuthService from '../services/authService';
import {
  COMPONENTS,
  ROUTES,
} from './routes';
import { SIDE_MENU } from './sideMenu';
import { ROOT_SIGNIN } from './signin';

const initNavigation = () => {
  Object.values(ROUTES).forEach(route => {
    Navigation.registerComponent(
      route.name,
      () => props => <AuthProvider><route.component {...props} /></AuthProvider>,
      () => route.component
    );
  });
  Object.values(COMPONENTS).forEach(route => {
    Navigation.registerComponent(
      route.name,
      () => route.component
    );
  });

  Navigation.events().registerAppLaunchedListener(() => {
    if (AuthService.getAuthenticated()) {
      Navigation.setRoot({
        root: SIDE_MENU,
      });
    } else {
      Navigation.setRoot({
        root: ROOT_SIGNIN,
      });
    }
  });

  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a',
    },
    topBar: {
      title: {
        color: 'white',
      },
      backButton: {
        color: 'white',
      },
      background: {
        color: '#4d089a',
      },
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
      textColor: 'black',
      selectedTextColor: 'blue',
    },
  });
};

export { initNavigation };
