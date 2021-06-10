import { useEffect, useState } from 'react';
import { asyncStorageKeys } from '../constants';

import { AsyncStorageUtil } from '../utils';

type itemDataType = string | null;

const useAuthentication = () => {
  const [authToken, setAuthToken] = useState<itemDataType>('token');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorageUtil.getItem({
      item: asyncStorageKeys.USER_TOKEN,
      onSuccess: (itemData: itemDataType) => {
        // setAuthToken(itemData);
        setAuthToken('token');
        setLoading(false);
      },
    });
  }, []);

  return {
    authToken,
    isLoading,
  };
};

export default useAuthentication;
