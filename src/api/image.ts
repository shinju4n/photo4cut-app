import axiosInstance from './axios';

const uploadMediaToS3 = async (body: FormData): Promise<string> => {
  const {data} = await axiosInstance.post('/media/upload', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

export {uploadMediaToS3};
