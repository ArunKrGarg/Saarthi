import AsyncStorage from '@react-native-community/async-storage';

export async function setAsValue(key, value) {
  try {
    let val = await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.log(e);
  }
}

export async function getAsValue(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log(e);
    // read error
  }
}
