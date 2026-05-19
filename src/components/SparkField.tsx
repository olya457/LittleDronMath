import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/theme';

const sparks = [
  [8, 14, 2, 0.35],
  [21, 9, 3, 0.2],
  [68, 7, 2, 0.35],
  [88, 18, 4, 0.26],
  [13, 43, 3, 0.48],
  [44, 37, 2, 0.28],
  [77, 42, 3, 0.38],
  [55, 63, 2, 0.45],
  [31, 72, 4, 0.22],
  [91, 75, 3, 0.5],
  [12, 86, 3, 0.36],
  [49, 91, 2, 0.42],
  [70, 88, 4, 0.34],
  [84, 57, 2, 0.33],
  [35, 21, 2, 0.28],
];

export function SparkField() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <View style={styles.topGlow} />
      <View style={styles.bottomGlow} />
      {sparks.map(([left, top, size, opacity], index) => (
        <View
          key={`${left}-${top}-${index}`}
          style={[
            styles.spark,
            {
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  topGlow: {
    position: 'absolute',
    top: -180,
    left: -60,
    right: -60,
    height: 360,
    backgroundColor: '#3b0707',
    borderBottomLeftRadius: 220,
    borderBottomRightRadius: 220,
    opacity: 0.34,
  },
  bottomGlow: {
    position: 'absolute',
    bottom: -140,
    left: -60,
    right: -60,
    height: 260,
    backgroundColor: '#260401',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    opacity: 0.4,
  },
  spark: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: colors.orangeLight,
    shadowColor: colors.shadow,
    shadowOpacity: 0.8,
    shadowRadius: 7,
  },
});
