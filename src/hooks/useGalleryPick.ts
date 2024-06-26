import React from 'react';
import ImagePicker, {Options} from 'react-native-image-crop-picker';
import useUploadMedia from './useUploadMedia';
import {Media} from '@/types';

interface useGalleryPickProps {
  options?: Options;
  defaultValue?: Media;
}

const defaultOptions: Options = {
  multiple: false,
  includeBase64: true,
  maxFiles: 1,
  width: 300,
  height: 400,
  cropping: true,
  cropperChooseText: '선택',
  cropperCancelText: '취소',
  freeStyleCropEnabled: true,
};

const useGalleryPick = ({
  defaultValue = undefined,
  options = defaultOptions,
}: useGalleryPickProps = {}) => {
  const uploadMedia = useUploadMedia();
  const [media, setMedia] = React.useState<Media | undefined>(defaultValue);

  const handleChange = async () => {
    const media = await ImagePicker.openPicker(options);
    const s3Uri = await uploadMedia.uploadToS3(media);
    setMedia(s3Uri);
  };

  return {handleChange, media};
};
export default useGalleryPick;
