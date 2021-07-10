import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Text,
  TSpan,
} from 'react-native-svg';
import {width as w, height as h} from '../../constants/Metrics';
function Play(props) {
  return (
    <Svg width={w * 0.31} height={w * 0.15} {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#169e6a" />
          <Stop offset={0.502} stopColor="#249b34" />
          <Stop offset={1} stopColor="#36c666" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 12">
        <G data-name="Group 9">
          <G data-name="Group 8">
            <G data-name="Group 2">
              <G
                data-name="Rectangle 2"
                stroke="#707070"
                fill="url(#prefix__a)">
                <Rect
                  width={w * 0.31}
                  height={w * 0.13}
                  rx={26}
                  stroke="none"
                />
                <Rect
                  x={0.5}
                  y={0.5}
                  width={w * 0.31}
                  height={w * 0.13}
                  rx={25.5}
                  fill="none"
                />
              </G>
            </G>
            <Text
              transform="translate(0 0)"
              fill="#fff"
              stroke="#3C72BE"
              strokeWidth={w * 0.004}
              fontSize={w * 0.08}
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight={700}>
              <TSpan x={w * 0.1} y={w * 0.091}>
                {'GO'}
              </TSpan>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
  );
}

const PlayButton = React.memo(Play);
export default PlayButton;
