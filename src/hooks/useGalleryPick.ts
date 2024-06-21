import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import useUploadMedia from './useUploadMedia';
import {Media} from '@/types';

const useGalleryPick = () => {
  const uploadMedia = useUploadMedia();
  const [media, setMedia] = React.useState<Media | undefined>(undefined);

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
    setMedia(s3Uri);
  };

  return {handleChange, media};
};
export default useGalleryPick;
