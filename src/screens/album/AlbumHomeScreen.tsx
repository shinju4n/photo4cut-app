import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {type AlbumStackParamList} from '@/navigation/stack/AlbumNavigator';
import {AlbumRoutes} from '@/constants/index';
import PhotoAlbumList from '@/components/photo-album/AlbumList';
import TopHeader from '@/components/TopHeader';

type PhotoAlbumHomeScreen = StackScreenProps<
  AlbumStackParamList,
  typeof AlbumRoutes.ALBUM_HOME
>;

const PhotoAlbumHomeScreen = ({navigation}: PhotoAlbumHomeScreen) => {
  const goToPhotoAlbumAddMedia = () => {
    navigation.navigate(AlbumRoutes.ADD_MEDIA);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader
        title="사진첩"
        rightAction={{
          iconName: 'camera-outline',
          onPress: goToPhotoAlbumAddMedia,
        }}
      />
      <PhotoAlbumList data={undefined} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PhotoAlbumHomeScreen;
