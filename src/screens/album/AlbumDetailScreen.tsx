import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Layout} from '@ui-kitten/components';
import TopHeader from '@/components/TopHeader';
import {StackScreenProps} from '@react-navigation/stack';
import {AlbumStackParamList} from '@/navigation/stack/AlbumNavigator';
import {AlbumRoutes, queryKeys} from '@/constants';
import {useQuery} from '@tanstack/react-query';
import {getAlbumById} from '@/api/album';

type AlbumDetailScreenProps = StackScreenProps<
  AlbumStackParamList,
  typeof AlbumRoutes.ALBUM_DETAIL
>;

const AlbumDetailScreen = ({route, navigation}: AlbumDetailScreenProps) => {
  const {data: album} = useQuery({
    queryFn: () => getAlbumById(route.params.id),
    queryKey: [queryKeys.ALBUM, queryKeys.GET_ALBUM],
  });

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopHeader
          title={album?.title || route.params.id.toString()}
          leftAction={{
            iconName: 'arrow-back',
            onPress: () => navigation.goBack(),
          }}
        />
        <Layout style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: album?.media.mediaUri,
            }}
            style={styles.imageBackground}
          />
        </Layout>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: Dimensions.get('screen').height / 1.5,
    resizeMode: 'contain',
  },
});

export default AlbumDetailScreen;
