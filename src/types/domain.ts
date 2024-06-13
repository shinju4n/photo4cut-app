type ThumbnailType = 'image' | 'video';

interface Album {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailType: ThumbnailType;
  createdAt: string;
}

interface Profile {
  id: number;
  email: string;
  nickname: string | null;
  imageUri: string | null;
  kakaoImageUri: string | null;
  loginType: 'email' | 'kakao';
}

export type {Album, ThumbnailType, Profile};
