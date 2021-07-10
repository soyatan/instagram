import * as React from 'react';
import Svg, {Defs, RadialGradient, Stop, G, Circle} from 'react-native-svg';

function Circler(props) {
  const cs = props.colorSet;
  return (
    <Svg viewBox="0 0 477.23 477.23" width="1" height="1" {...props}>
      <Defs>
        <RadialGradient
          id="prefix__a"
          cx={238.23}
          cy={237}
          r={229}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor={cs._first} />
          <Stop offset={0.08} stopColor={cs._second} />
          <Stop offset={0.2} stopColor={cs._third} />
          <Stop offset={0.72} stopColor={cs._thirdb} />
          <Stop offset={0.87} stopColor={cs._fourth} />
          <Stop offset={0.9} stopColor={cs._fifth} />
        </RadialGradient>
      </Defs>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Circle cx={238.23} cy={237} r={229} fill="url(#prefix__a)" />
          <Circle
            cx={238.61}
            cy={238.61}
            r={231.61}
            fill="none"
            stroke={cs._stroke}
            strokeMiterlimit={10}
            strokeWidth={14}
          />
        </G>
      </G>
    </Svg>
  );
}

export const CirclePushed = React.memo(Circler);
