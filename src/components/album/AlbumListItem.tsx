import React, {FC, memo} from 'react';
import {Album} from '@/types';
import {Card, Layout, Text} from '@ui-kitten/components';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {AlbumRoutes} from '@/constants';
import {AlbumStackParamList} from '@/navigation/stack/AlbumNavigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface AlbumListItemProps {
  album: Album;
}

const AlbumListItem: FC<AlbumListItemProps> = ({album}) => {
  const navigation =
    useNavigation<
      NavigationProp<AlbumStackParamList, typeof AlbumRoutes.ALBUM_HOME>
    >();
  const {id, media, title, createdAt} = album;
  return (
    <Card
      style={styles.feedContainer}
      onPress={() =>
        navigation.navigate(AlbumRoutes.ALBUM_DETAIL, {
          id: id,
        })
      }>
      <Text category="h5">{title}</Text>
      <Layout level="4" style={styles.thumbnailContainer}>
        <Image src={media.mediaUri} style={styles.thumbnail} />
      </Layout>
      <Text style={styles.createdAt}>{createdAt}</Text>
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

export default memo(AlbumListItem);
