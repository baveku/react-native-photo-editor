import { NativeModules } from 'react-native';
const { PhotoEditor } = NativeModules;

let exportObject = {};

const defaultOptions = {
  path: '',
  local_path: undefined,
  stickers: [],
};

exportObject = {
  open: (optionsEditor) => {
    const options = {
      ...defaultOptions,
      ...optionsEditor,
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await PhotoEditor.open(options);
        if (response) {
          resolve(response);
          return true;
        }
        throw 'ERROR_UNKNOW';
      } catch (e) {
        reject(e);
      }
    });
  },
};

export default exportObject;
