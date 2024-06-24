import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {type AlbumStackParamList} from '@/navigation/stack/AlbumNavigator';
import {AlbumRoutes, queryKeys} from '@/constants/index';
import PhotoAlbumList from '@/components/album/AlbumList';
import TopHeader from '@/components/TopHeader';
import {Layout} from '@ui-kitten/components';
import {useQuery} from '@tanstack/react-query';
import {getAlbums} from '@/api/album';

type PhotoAlbumHomeScreen = StackScreenProps<
  AlbumStackParamList,
  typeof AlbumRoutes.ALBUM_HOME
>;

const PhotoAlbumHomeScreen = ({navigation}: PhotoAlbumHomeScreen) => {
  const {data} = useQuery({
    queryFn: () => getAlbums(),
    queryKey: [queryKeys.ALBUM, queryKeys.GET_ALBUMS],
  });

  const goToPhotoAlbumAddMedia = () => {
    navigation.navigate(AlbumRoutes.ADD_MEDIA);
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopHeader
          title="사진첩"
          rightAction={{
            iconName: 'camera-outline',
            onPress: goToPhotoAlbumAddMedia,
          }}
        />
        <PhotoAlbumList data={data ?? []} />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PhotoAlbumHomeScreen;
