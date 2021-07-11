import {View} from 'react-native';
import React from 'react';

import {SVGS} from '.';
import {width} from '../../constants/Metrics';

export const Icon = ({name, scale}) => {
  const VecGr = SVGS[name];

  return (
    <View style={{width: width * 0.05}}>
      <VecGr width="100%" height="100%" fill={'black'} />
    </View>
  );
};
