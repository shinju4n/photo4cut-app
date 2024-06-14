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
import {AlbumRoutes} from '@/constants';

type AlbumDetailScreenProps = StackScreenProps<
  AlbumStackParamList,
  typeof AlbumRoutes.ALBUM_DETAIL
>;

const AlbumDetailScreen = ({route, navigation}: AlbumDetailScreenProps) => {
  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopHeader
          title={route.params.id.toString()}
          leftAction={{
            iconName: 'arrow-back',
            onPress: () => navigation.goBack(),
          }}
        />
        <Layout style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: 'https://blog.kakaocdn.net/dn/3qwhk/btstayuNa5S/0sDvdFxpQW9VhzUIz7v6X1/img.jpg',
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.8,
  },
});

export default AlbumDetailScreen;
