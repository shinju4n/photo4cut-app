import React from 'react';
import {Icon, type IconElement, IconProps} from '@ui-kitten/components';

interface CustomIconProps extends IconProps {
  name: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  ...props
}): IconElement => <Icon {...props} name={name} />;

export default CustomIcon;
