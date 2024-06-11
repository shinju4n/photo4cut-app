import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';

interface AddMediaScreenProps {}

const AddMediaScreen = ({}: AddMediaScreenProps) => {
  return (
    <SafeAreaView>
      <Layout>
        <Text>AddMediaScreen</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default AddMediaScreen;
