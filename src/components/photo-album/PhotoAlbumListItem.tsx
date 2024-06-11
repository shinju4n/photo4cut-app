import React, {FC} from 'react';
import {Album} from '@/types';
import {Card, Layout, Text} from '@ui-kitten/components';
import {Dimensions, Image, StyleSheet} from 'react-native';

interface PhotoAlbumListItemProps {
  album: Album;
}

const PhotoAlbumListItem: FC<PhotoAlbumListItemProps> = ({album}) => {
  return (
    <Card style={styles.feedContainer}>
      <Text category="h5">{album.title}</Text>
      <Layout level="4" style={styles.thumbnailContainer}>
        <Image
          src="https://blog.kakaocdn.net/dn/3qwhk/btstayuNa5S/0sDvdFxpQW9VhzUIz7v6X1/img.jpg"
          style={styles.thumbnail}
        />
      </Layout>
      <Text appearance="hint" style={styles.createdAt}>
        {album.createdAt}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  thumbnail: {
    minWidth: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 4,
  },
  createdAt: {
    textAlign: 'right',
    marginTop: 8,
  },
});

export default PhotoAlbumListItem;
