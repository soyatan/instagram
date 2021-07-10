import * as React from 'react';
import Svg, {Defs, RadialGradient, Stop, G, Circle} from 'react-native-svg';

function Circler(props) {
  const cs = props.colorSet;
  return (
    <Svg viewBox="0 0 146.11 146.11" width="1em" height="1em" {...props}>
      <Defs>
        <RadialGradient
          id="prefix__a"
          cx={72.95}
          cy={72.6}
          r={65.31}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor={cs._first} />
          <Stop offset={0.63} stopColor={cs._second} />
          <Stop offset={0.63} stopColor={cs._third} />
          <Stop offset={0.83} stopColor={cs._fourth} />
          <Stop offset={1} stopColor={cs._fifth} />
        </RadialGradient>
      </Defs>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Circle cx={72.95} cy={72.6} r={65.31} fill="url(#prefix__a)" />
          <Circle
            cx={73.06}
            cy={73.06}
            r={66.06}
            fill="none"
            stroke={cs._stroke}
            strokeMiterlimit={10}
            strokeWidth={6}
          />
        </G>
      </G>
    </Svg>
  );
}

export const CircleUnpushed = React.memo(Circler);
