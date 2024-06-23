import React, {FC, memo} from 'react';
import {Album} from '@/types';
import {Card, Layout} from '@ui-kitten/components';
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
  const {id, media} = album;
  return (
    <Card
      style={styles.feedContainer}
      onPress={() =>
        navigation.navigate(AlbumRoutes.ALBUM_DETAIL, {
          id: id,
        })
      }>
      <Layout style={styles.thumbnailContainer}>
        <Image src={media.mediaUri} style={styles.thumbnail} />
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    borderWidth: 0,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  thumbnail: {
    minWidth: Dimensions.get('screen').width / 2.2,
    height: Dimensions.get('screen').height / 2.2,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  createdAt: {
    textAlign: 'right',
    marginTop: 8,
  },
});

export default memo(AlbumListItem);
