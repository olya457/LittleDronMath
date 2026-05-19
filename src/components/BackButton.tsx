import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, radii} from '../theme/theme';

type BackButtonProps = {
  onPress: () => void;
  label?: string;
};

export function BackButton({onPress, label = 'Back'}: BackButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{`‹ ${label}`}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    minHeight: 38,
    borderRadius: radii.small,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(92, 18, 5, 0.58)',
    borderWidth: 1,
    borderColor: colors.borderSoft,
  },
  text: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
  },
});
