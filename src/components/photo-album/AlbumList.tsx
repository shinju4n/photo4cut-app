import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {type Album, type ThumbnailType} from '@/types';
import AlbumListItem from './AlbumListItem';

interface AlbumListProps {
  // 임시 Undefined 타입을 제거하고 Album 타입으로 변경
  data?: Album[];
}

const example = Array.from<Album>({length: 5}).map((_, i) => ({
  id: i,
  title: `제목 ${i}`,
  thumbnailUrl: '',
  thumbnailType: 'image' as ThumbnailType,
  createdAt: '2024-06-06',
}));

const AlbumList: FC<AlbumListProps> = ({data = example}) => {
  return (
    <FlashList
      data={data}
      renderItem={({item}) => <AlbumListItem album={item} />}
      estimatedItemSize={Dimensions.get('screen').height / 2.5}
      numColumns={1}
    />
  );
};

export default AlbumList;
