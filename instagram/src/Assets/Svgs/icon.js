import {View} from 'react-native';
import React from 'react';

import {SVGS} from '.';

export const Icon = ({name, scale}) => {
  const VecGr = SVGS[name];

  return (
    <View style={{width: 30}}>
      <VecGr width="100%" height="100%" fill={'black'} />
    </View>
  );
};
