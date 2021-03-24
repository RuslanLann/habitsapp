import { useEffect, useState } from 'react';
import { asyncStorageKeys } from '../constants';

import { AsyncStorageUtil } from '../utils';

type itemDataType = string | null;

const useAuthentication = () => {
  const [authToken, setAuthToken] = useState<itemDataType>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorageUtil.getItem({
      item: asyncStorageKeys.USER_TOKEN,
      onSuccess: (itemData: itemDataType) => {
        setAuthToken(itemData);
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
