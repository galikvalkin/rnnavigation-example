import { useCallback } from 'react';

import { Navigation } from 'react-native-navigation';

const useSetRoot = () => {
  const setRoot = useCallback((structure: any) => {
    Navigation.setRoot({
      root: structure,
    });
  }, []);
  return setRoot;
};

export default useSetRoot;
