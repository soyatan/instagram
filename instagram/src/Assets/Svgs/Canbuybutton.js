import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Text,
  TSpan,
  Path,
} from 'react-native-svg';
import {width as w, height as h} from '../../constants/Metrics';
function Canbuy(props) {
  return (
    <Svg
      data-name="Component 2 \u2013 1"
      width={w * 0.31}
      height={w * 0.15}
      {...props}>
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
      <G data-name="Group 8">
        <G data-name="Group 2">
          <G data-name="Rectangle 2" stroke="#707070" fill="url(#prefix__a)">
            <Rect
              width={w * 0.31}
              height={w * 0.15}
              rx={w * 0.075}
              stroke="none"
            />
            <Rect
              x={0.5}
              y={0.5}
              width={w * 0.31}
              height={w * 0.15}
              rx={w * 0.075}
              fill="none"
            />
          </G>
        </G>
        <Text
          data-name={139}
          transform="translate(0 0)"
          fill={props.textColor}
          stroke="#2e1825"
          strokeWidth={2}
          fontSize={w * 0.07}
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight={900}>
          <TSpan x={w * 0.15} y={w * 0.099}>
            {props.price}
          </TSpan>
        </Text>
      </G>
      <Path
        data-name="Path 3"
        d="M45.885 34.213a12.662 12.662 0 002.615-7.685v3.088a12.66 12.66 0 01-2.574 7.628v-3zm0 0"
        fill="#ce893d"
      />
      <Path
        data-name="Path 4"
        d="M45.925 34.249v3a13.628 13.628 0 01-2.574 2.62v-3.042l-.026-.031a13.643 13.643 0 002.558-2.579zm0 0"
        fill="#e6a71e"
      />
      <Path
        data-name="Path 5"
        d="M34.087 13.145c7.958 0 14.413 5.992 14.413 13.383a12.662 12.662 0 01-2.615 7.685 13.642 13.642 0 01-2.558 2.579 13.915 13.915 0 01-2.548 1.59 14.994 14.994 0 01-3.088 1.107 15.592 15.592 0 01-7.206 0 14.994 14.994 0 01-3.088-1.107 13.924 13.924 0 01-2.548-1.59 13.642 13.642 0 01-2.558-2.579 12.662 12.662 0 01-2.617-7.685c0-7.391 6.455-13.383 14.413-13.383zm0 0"
        fill="#ffcb5a"
      />
      <Path
        data-name="Path 6"
        d="M43.353 36.824v3.042a13.966 13.966 0 01-2.569 1.6l-.005-.01v-3.073a13.913 13.913 0 002.548-1.59zm0 0"
        fill="#ce893d"
      />
      <Path
        data-name="Path 7"
        d="M40.779 41.455l.005.01a14.848 14.848 0 01-3.073 1.107l-.021-.087v-3a15 15 0 003.089-1.107zm0 0"
        fill="#e6a71e"
      />
      <Path
        data-name="Path 8"
        d="M37.711 42.572a15.519 15.519 0 01-3.624.427v-3.088a15.358 15.358 0 003.6-.422v3zm0 0"
        fill="#ce893d"
      />
      <Path
        data-name="Path 9"
        d="M34.084 39.911v3.088a15.522 15.522 0 01-3.624-.427l.021-.087v-3a15.355 15.355 0 003.603.426zm0 0"
        fill="#e6a71e"
      />
      <Path
        data-name="Path 10"
        d="M30.484 39.49v3l-.021.087a14.85 14.85 0 01-3.073-1.107l.005-.01v-3.073a14.993 14.993 0 003.089 1.103zm0 0"
        fill="#ce893d"
      />
      <Path
        data-name="Path 11"
        d="M24.848 36.792a13.923 13.923 0 002.548 1.59v3.073l-.005.01a14.247 14.247 0 01-2.569-1.6v-3.042zm0 0"
        fill="#e6a71e"
      />
      <Path
        data-name="Path 12"
        d="M22.289 34.213a13.643 13.643 0 002.559 2.579l-.026.031v3.042a13.628 13.628 0 01-2.574-2.62v-3zm0 0"
        fill="#ce893d"
      />
      <Path
        data-name="Path 13"
        d="M19.674 26.528a12.662 12.662 0 002.615 7.685l-.041.036v3a12.66 12.66 0 01-2.574-7.633zm0 0"
        fill="#e6a71e"
      />
      <Path
        data-name="Path 14"
        d="M45.412 26.528c0-5.686-5.07-10.295-11.325-10.295s-11.324 4.609-11.324 10.295 5.07 10.295 11.324 10.295 11.325-4.609 11.325-10.295zm0 0"
        fill="#e6a71e"
      />
      <G data-name="Group 11" fill="#ffcb5a">
        <Path
          data-name="Path 15"
          d="M41.161 32.566l-.7-.75a7.828 7.828 0 001.51-1.931l.9.5a8.8 8.8 0 01-1.708 2.187zm0 0"
        />
        <Path
          data-name="Path 16"
          d="M34.087 35.278c-5.393 0-9.78-3.925-9.78-8.751s4.387-8.749 9.78-8.749 9.78 3.925 9.78 8.751h-1.029c0-4.257-3.925-7.721-8.751-7.721s-8.751 3.464-8.751 7.721 3.925 7.721 8.751 7.721a9.529 9.529 0 004.884-1.319l.527.885a10.562 10.562 0 01-5.411 1.462zm0 0"
        />
      </G>
    </Svg>
  );
}

const CanBuyButton = React.memo(Canbuy);
export default CanBuyButton;
