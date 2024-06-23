import React, {FC} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {type Album} from '@/types';
import AlbumListItem from './AlbumListItem';
import {Layout, Text} from '@ui-kitten/components';

interface AlbumListProps {
  data: Album[];
}

const AlbumList: FC<AlbumListProps> = ({data = []}) => {
  if (data.length === 0) {
    return (
      <Layout style={styles.container}>
        <Text>앨범이 없습니다.</Text>
      </Layout>
    );
  }

  return (
    <FlashList
      data={data}
      renderItem={({item}) => <AlbumListItem album={item} />}
      estimatedItemSize={Dimensions.get('screen').height / 2.5}
      numColumns={1}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AlbumList;
