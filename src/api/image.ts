import axiosInstance from './axios';
import {Media} from '@/types';

const uploadMediaToS3 = async (body: FormData): Promise<Media> => {
  const {data} = await axiosInstance.post('/media/upload', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

export {uploadMediaToS3};
