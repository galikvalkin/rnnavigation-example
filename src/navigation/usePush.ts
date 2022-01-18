import { useCallback } from 'react';

import {
  Navigation,
  Options,
} from 'react-native-navigation';

const usePush = (componentId: string) => {
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

export default usePush;
