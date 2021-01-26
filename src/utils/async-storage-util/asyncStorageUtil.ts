import AsyncStorage from '@react-native-async-storage/async-storage';

interface IGetItemOptions {
  item: string;
  onSuccess: (itemData: string | null) => void;
}

class AsyncStorageUtil {
  static setItem = (item: string, value: string) => {
    AsyncStorage.setItem(item, value);
  };

  static getItem = async ({ item, onSuccess }: IGetItemOptions): Promise<void> => {
    try {
      const itemData = await AsyncStorage.getItem(item);
      onSuccess(itemData);
    } catch (error) {
      __DEV__ && console.log(error, 'AsyncStorageUtil.getItem error');
    }
  };

  static updateItem = () => {};

  static deleteItem = () => {};
}

export default AsyncStorageUtil;
