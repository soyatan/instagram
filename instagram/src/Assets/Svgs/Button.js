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
const buttonwidth = w * 0.5;
const buttonheight = w * 0.16;

function Button(props) {
  return (
    <Svg width={buttonwidth} height={buttonheight} {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#2e3763" />
          <Stop offset={0.527} stopColor="#b5bbd1" />
          <Stop offset={1} stopColor="#090b14" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 1">
        <G data-name="Rectangle 2" stroke="#707070" fill="url(#prefix__a)">
          <Rect
            width={buttonwidth}
            height={buttonheight}
            rx={28}
            stroke="none"
          />
          <Rect
            x={0.5}
            y={0.5}
            width={buttonwidth}
            height={buttonheight}
            rx={27.5}
            fill="none"
          />
        </G>
      </G>
      <Text
        transform="translate(21 43)"
        fill="#200b5d"
        stroke="#767ea5"
        strokeWidth={2}
        fontSize={w * 0.08}
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontWeight={w * 2}>
        <TSpan x={0} y={0}>
          {props.title}
        </TSpan>
      </Text>
    </Svg>
  );
}

const ButtonExit = React.memo(Button);
export default ButtonExit;
