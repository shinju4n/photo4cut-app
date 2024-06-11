type ThumbnailType = 'image' | 'video';

interface Feed {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailType: ThumbnailType;
  createdAt: string;
}

export type {Feed, ThumbnailType};
