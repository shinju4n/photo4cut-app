import EncryptedStorage from 'react-native-encrypted-storage';

const setEncryptedStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncryptedStorage = async (key: string) => {
  const data = await EncryptedStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const removeEncryptedStorage = async (key: string) => {
  const data = await getEncryptedStorage(key);
  if (data) {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (e) {
      console.log('removeEncryptedStorage error', e);
    }
  }
};

export {setEncryptedStorage, getEncryptedStorage, removeEncryptedStorage};
