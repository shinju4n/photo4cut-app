import {Album, Media} from '@/types';
import axiosInstance from './axios';

export const getAlbums = async (): Promise<Album[]> => {
  const {data} = await axiosInstance.get('/album');
  return data;
};

type RequestCreateAlbum = {
  title: string;
  media: Media;
};
export const createAlbum = async (req: RequestCreateAlbum): Promise<Album> => {
  const {data} = await axiosInstance.post('/album/create', req);
  return data;
};
