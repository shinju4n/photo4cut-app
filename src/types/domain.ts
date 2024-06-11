type ThumbnailType = 'image' | 'video';

interface Album {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailType: ThumbnailType;
  createdAt: string;
}

export type {Album, ThumbnailType};
