import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-property-editor' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NativeInterface = NativeModules.PropertyEditor
  ? NativeModules.PropertyEditor
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setContextName(contextName: string): void {
  NativeInterface.setContextName(contextName);
}

export async function getNumber(key: string): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    NativeInterface.getNumber(key)
      .then((result: number) => resolve(result))
      .catch((error: any) => reject(error));
  });
}

export function setNumber(key: string, value: number): void {
  console.log('setNumber', key, value);
  NativeInterface.setNumber(key, value);
}

export async function getString(key: string): Promise<string | undefined> {
  return new Promise<string | undefined>((resolve, reject) => {
    NativeInterface.getString(key)
      .then((result: string | undefined) => resolve(result))
      .catch((error: any) => reject(error));
  });
}

export function setString(key: string, value: string): void {
  NativeInterface.setString(key, value);
}

export async function getBoolean(key: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    NativeInterface.getBoolean(key)
      .then((result: boolean) => resolve(result))
      .catch((error: any) => reject(error));
  });
}

export function setBoolean(key: string, value: boolean): void {
  NativeInterface.setBoolean(key, value);
}

export default {
  setContextName,
  getNumber,
  setNumber,
  getString,
  setString,
  getBoolean,
  setBoolean,
};
