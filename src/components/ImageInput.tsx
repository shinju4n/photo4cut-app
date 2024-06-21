import React from 'react';
import {Image, Pressable, PressableProps, StyleSheet} from 'react-native';

interface ImageInputProps extends PressableProps {
  onPress: () => void;
  mediaUri?: string;
}

const ImageInput = ({onPress, mediaUri, ...props}: ImageInputProps) => {
  console.log(mediaUri);
  return (
    <Pressable onPress={onPress} {...props}>
      <Image
        source={{uri: mediaUri ?? 'https://via.placeholder.com/150'}}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ImageInput;
