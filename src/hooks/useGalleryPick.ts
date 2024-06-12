import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import useUploadMedia from './useUploadMedia';

const useGalleryPick = () => {
  const uploadMedia = useUploadMedia();
  const [mediaUri, setMediaUri] = React.useState<string | undefined>(undefined);

  const handleChange = async () => {
    const media = await ImagePicker.openPicker({
      multiple: false,
      includeBase64: true,
      maxFiles: 1,
      width: 300,
      height: 400,
      cropping: true,
      cropperChooseText: '선택',
      cropperCancelText: '취소',
    });
    const s3Uri = await uploadMedia.uploadToS3(media);
    setMediaUri(s3Uri);
  };

  return {handleChange, mediaUri};
};
export default useGalleryPick;
