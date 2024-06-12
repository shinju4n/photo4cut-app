import {ImageOrVideo} from 'react-native-image-crop-picker';

function getFormDataMedia(media: ImageOrVideo) {
  const formData = new FormData();
  const file = {
    uri: media.path,
    type: media.mime,
    name: media.path.split('/').pop(),
  };

  formData.append('file', file);
  return formData;
}

export {getFormDataMedia};
