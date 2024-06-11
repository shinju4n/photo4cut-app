import React from 'react';
import {
  Text,
  TextProps,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {RenderProp} from '@ui-kitten/components/devsupport';
import CustomIcon from '../CustomIcon';

interface TopHeaderProps {
  rightAction?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({rightAction}) => {
  const renderTitle: RenderProp<TextProps> = textProps => {
    return <Text {...textProps}>사진첩</Text>;
  };

  const renderRightAction = (): React.ReactElement => {
    return (
      <TopNavigationAction
        icon={<CustomIcon name="camera-outline" />}
        onPress={rightAction}
      />
    );
  };

  return (
    <TopNavigation
      title={renderTitle}
      alignment="center"
      accessoryRight={renderRightAction}
    />
  );
};

export default TopHeader;
