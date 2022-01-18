import { useCallback } from 'react';

import {
  Navigation,
  Options,
} from 'react-native-navigation';

export const usePush = (componentId: string) => {
  const push = useCallback(
    ({
      name,
      options,
      props,
    }: {
      name: string;
      options?: Options;
      props?: any;
    }) => {
      Navigation.push(componentId, {
        component: {
          name,
          options,
          passProps: props,
        },
      });
    },
    [componentId]
  );
  return push;
};

export const useSetRoot = () => {
  const setRoot = useCallback((structure: any) => {
    Navigation.setRoot({
      root: structure,
    });
  }, []);
  return setRoot;
};

export const showModal = (structure: any) => Navigation.showModal(structure);
