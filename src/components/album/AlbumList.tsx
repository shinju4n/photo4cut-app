import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {type Album} from '@/types';
import AlbumListItem from './AlbumListItem';

interface AlbumListProps {
  // 임시 Undefined 타입을 제거하고 Album 타입으로 변경
  data?: Album[];
}

const AlbumList: FC<AlbumListProps> = ({data}) => {
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
