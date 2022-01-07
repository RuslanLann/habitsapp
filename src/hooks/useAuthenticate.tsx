import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_TOKEN } from '../constants';

type itemDataType = string | null;

const useAuthentication = () => {
  const [authToken, setAuthToken] = useState<itemDataType>('token');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(USER_TOKEN).then((token) => {
      if (token) {
        setAuthToken(token);
        setAuthToken('token');
        setLoading(false);
      }
    });
  }, []);

  return {
    authToken,
    isLoading,
  };
};

export default useAuthentication;
