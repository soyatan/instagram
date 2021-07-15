import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {SVGS} from '.';
import {width} from '../../constants/Metrics';

export const TouchableIcon = ({name, scale, onPress}) => {
  const VecGr = SVGS[name];
  const size = scale * width * 0.05;
  return (
    <TouchableOpacity style={{width: size, height: size}} onPress={onPress}>
      <VecGr width="100%" height="100%" fill={'black'} />
    </TouchableOpacity>
  );
};
