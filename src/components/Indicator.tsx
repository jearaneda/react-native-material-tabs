import React from 'react';
import { Animated, StyleProp, ViewStyle, View } from 'react-native';
import styled from 'styled-components/native';

import constants from '../lib/constants';

interface BarProps {
  tabWidth: number;
  indicatorProportion: number;
  indicatorStyles: StyleProp<ViewStyle>
  color: string;
}

const Bar = styled(Animated.View)`
  height: ${constants.indicatorHeight};
  width: ${(props: BarProps) => props.indicatorProportion * props.tabWidth} ;
  position: absolute;
  left: ${(props: BarProps) => props.tabWidth * (1 - props.indicatorProportion)/2};
  bottom: 0;
  background-color: ${(props: BarProps) => props.color};
`;

interface IndicatorProps {
  color: string;
  tabWidth: number;
  value: Animated.Value;
  indicatorProportion: number;
  indicatorStyles: StyleProp<ViewStyle>
}

const Indicator = (props: IndicatorProps) => (
  <Bar
    color={props.color}
    style={[{ transform: [{ translateX: props.value }] }, props.indicatorStyles]}
    tabWidth={props.tabWidth}
    indicatorProportion={props.indicatorProportion}
  />
);

export default Indicator;
