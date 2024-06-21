import React from 'react';
import {ImageOrVideo} from 'react-native-image-crop-picker';
import {uploadMediaToS3} from '@/api/image';
import {getFormDataMedia} from '@/utils';
import {Media} from '@/types';

const useUploadMedia = () => {
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  const uploadToS3 = async (media: ImageOrVideo): Promise<Media> => {
    const formData = getFormDataMedia(media);
    try {
      setIsUploading(true);
      const res = await uploadMediaToS3(formData);
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return {uploadToS3, isUploading};
};

export default useUploadMedia;
