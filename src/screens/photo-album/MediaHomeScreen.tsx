import React, {FC} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet} from 'react-native';
import {Text, Card, Layout} from '@ui-kitten/components';
import {FlashList} from '@shopify/flash-list';

interface PhotoAlbumScreenProps {}

type ThumbnailType = 'image' | 'video';

type Feed = {
  id: number;
  title: string;
  thumbnailUrl: string;
  thumbnailType: ThumbnailType;
  createdAt: string;
};

const FeedItem: FC<Feed> = ({title, createdAt}) => {
  return (
    <Card style={styles.feedContainer}>
      <Text category="h5">{title}</Text>
      <Layout level="4" style={styles.thumbnailContainer}>
        <Image
          src="https://blog.kakaocdn.net/dn/3qwhk/btstayuNa5S/0sDvdFxpQW9VhzUIz7v6X1/img.jpg"
          style={styles.thumbnail}
        />
      </Layout>
      <Text appearance="hint" style={styles.createdAt}>
        {createdAt}
      </Text>
    </Card>
  );
};

const PhotoAlbumScreen = ({}: PhotoAlbumScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={Array.from<Feed>({length: 5}).map((_, i) => ({
          id: i,
          title: `제목 ${i}`,
          thumbnailUrl: '',
          thumbnailType: 'image' as ThumbnailType,
          createdAt: '2024-06-06',
        }))}
        renderItem={({item}) => <FeedItem {...item} />}
        estimatedItemSize={Dimensions.get('screen').height / 2.5}
        numColumns={1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default PhotoAlbumScreen;
