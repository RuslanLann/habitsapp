import React, { Component, ReactChild } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { sizes, themeProvider } from '../../theme';

interface ICard {
  children: ReactChild | ReactChild[];
  style?: ViewStyle | ViewStyle[];
}

// class is for createAnimatedComponent
class Card extends Component<ICard> {
  render() {
    const { style, children } = this.props;

    return <View style={[styles.card, style]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: sizes.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeProvider.colors.card,
    borderRadius: sizes.borderRadius,
    ...themeProvider.boxShadow,
  } as ViewStyle,
});

export default Card;
