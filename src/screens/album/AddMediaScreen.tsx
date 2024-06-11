import React from 'react';
import {ImageProps, SafeAreaView, StyleSheet} from 'react-native';
import {AlbumStackParamList} from '@/navigation/stack/AlbumNavigator';
import {type StackScreenProps} from '@react-navigation/stack';
import {Button, IconElement, Layout} from '@ui-kitten/components';
import TopHeader from '@/components/TopHeader';
import CustomIcon from '@/components/CustomIcon';
import {AlbumRoutes} from '@/constants';

type AddMediaScreenProps = StackScreenProps<
  AlbumStackParamList,
  typeof AlbumRoutes.ADD_MEDIA
>;

interface RenderIconProp extends Partial<ImageProps> {
  name: string;
}

const renderIcon = ({name, ...props}: RenderIconProp): IconElement => {
  return <CustomIcon name={name} {...props} />;
};

const AddMediaScreen = ({navigation}: AddMediaScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader
        title="네컷 추가"
        leftAction={{
          iconName: 'arrow-back',
          onPress: () => navigation.goBack(),
        }}
      />
      <Layout style={styles.buttonContainer}>
        <Button
          style={styles.button}
          size="giant"
          accessoryLeft={props => renderIcon({name: 'folder', ...props})}
          onPress={() => {}}>
          사진에서 가져오기
        </Button>
        <Button
          style={styles.button}
          size="giant"
          appearance="outline"
          accessoryLeft={props => renderIcon({name: 'grid-outline', ...props})}
          onPress={() => {}}>
          QR 코드로 가져오기
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    width: '80%',
  },
});

export default AddMediaScreen;
