import React, {memo} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import useGalleryPick from '@/hooks/useGalleryPick';
import {Controller, useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';

import ImageInput from '@/components/ImageInput';
import {Button, Input, Layout} from '@ui-kitten/components';
import {mediaFormAlerts} from '@/constants';
import {type Media} from '@/types';

interface MediaFormProps {
  isEdit?: boolean;
  defaultValues?: MediaFormType;
  onSubmit: (data: MediaFormType) => void;
}

type MediaFormType = {
  title: string;
  media: Media;
};

const MediaForm = ({defaultValues, onSubmit}: MediaFormProps) => {
  const {handleChange, media} = useGalleryPick({
    defaultValue: defaultValues?.media,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Omit<MediaFormType, 'media'>>();

  const handlePressSubmit = (data: Omit<MediaFormType, 'media'>) => {
    if (!media) {
      return Toast.show({
        type: 'error',
        text1: mediaFormAlerts.REQUIRED_IMAGE,
        position: 'bottom',
        visibilityTime: 2000,
      });
    } else {
      onSubmit({...data, media});
    }
  };

  return (
    <>
      <ImageInput
        style={styles.imageInput}
        onPress={handleChange}
        mediaUri={media?.mediaUri}
      />
      <Layout style={styles.inputContainer}>
        <Controller
          control={control}
          name="title"
          rules={{
            required: mediaFormAlerts.REQUIRED_TITLE,
            minLength: {
              value: 2,
              message: mediaFormAlerts.INVALID_TITLE,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label={'제목'}
              placeholder="제목을 입력하세요."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              status={errors.title ? 'danger' : 'basic'}
              caption={errors.title ? errors.title.message : ''}
            />
          )}
        />
        <Button
          style={styles.submitButton}
          onPress={handleSubmit(data => handlePressSubmit(data))}>
          등록하기
        </Button>
      </Layout>
    </>
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
  imageInput: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.5,
  },
  inputContainer: {
    marginTop: 32,
    flexDirection: 'column',
    gap: 16,
    paddingHorizontal: 16,
  },
  submitButton: {
    marginVertical: 16,
  },
  input: {
    minHeight: 100,
  },
});
export default memo(MediaForm);
