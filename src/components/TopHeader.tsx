import React from 'react';
import {
  Text,
  TextProps,
  TopNavigation,
  TopNavigationAction,
  TopNavigationProps,
} from '@ui-kitten/components';
import {RenderProp} from '@ui-kitten/components/devsupport';
import CustomIcon from './CustomIcon';

type Accessory = {
  iconName: string;
  onPress: () => void;
};

interface TopHeaderProps extends TopNavigationProps {
  title: string;
  leftAction?: Accessory;
  rightAction?: Accessory;
}

const TopHeader: React.FC<TopHeaderProps> = ({
  title,
  leftAction,
  rightAction,
}) => {
  const renderTitle: RenderProp<TextProps> = textProps => {
    return <Text {...textProps}>{title}</Text>;
  };

  const renderAction = (action: Accessory | undefined) => {
    if (!action) {
      return <></>;
    }
    return (
      <TopNavigationAction
        icon={<CustomIcon name={action.iconName} />}
        onPress={action.onPress}
      />
    );
  };

  return (
    <TopNavigation
      title={renderTitle}
      alignment="center"
      accessoryLeft={() => renderAction(leftAction)}
      accessoryRight={() => renderAction(rightAction)}
    />
  );
};

export default TopHeader;
