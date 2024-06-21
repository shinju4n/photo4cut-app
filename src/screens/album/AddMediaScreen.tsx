import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AlbumStackParamList} from '@/navigation/stack/AlbumNavigator';
import {type StackScreenProps} from '@react-navigation/stack';

import usePermission from '@/hooks/usePermission';
import {Layout} from '@ui-kitten/components';
import TopHeader from '@/components/TopHeader';
import MediaForm from '@/components/album/add-media/MediaForm';
import {AlbumRoutes} from '@/constants';
import {type Media} from '@/types';

type AddMediaScreenProps = StackScreenProps<
  AlbumStackParamList,
  typeof AlbumRoutes.ADD_MEDIA
>;

type MediaFormType = {
  title: string;
  media: Media;
};

const AddMediaScreen = ({navigation}: AddMediaScreenProps) => {
  usePermission('PHOTO');

  const onSubmit = (data: MediaFormType) => {
    console.log(data);
  };

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopHeader
          title="네컷 추가"
          leftAction={{
            iconName: 'arrow-back',
            onPress: () => navigation.goBack(),
          }}
        />
        <MediaForm onSubmit={onSubmit} />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddMediaScreen;
