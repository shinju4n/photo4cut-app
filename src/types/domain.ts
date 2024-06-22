type ThumbnailType = 'image' | 'video';

export interface Album {
  id: number;
  title: string;
  media: Media;
  createdAt: string;
}

export interface Profile {
  id: number;
  email: string;
  nickname: string | null;
  imageUri: string | null;
  kakaoImageUri: string | null;
  loginType: 'email' | 'kakao';
}

export interface Media {
  mediaUri: string;
  mediaType: ThumbnailType;
}
