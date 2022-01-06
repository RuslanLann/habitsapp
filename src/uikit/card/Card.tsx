import React, { Component, ReactChild } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { themeProvider } from '../../theme';
import { borderRadius, minPadding } from '../../theme/sizes';

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
    padding: minPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeProvider.colors.card,
    borderRadius: borderRadius,
    ...themeProvider.boxShadow,
  } as ViewStyle,
});

export default Card;
