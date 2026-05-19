import React from 'react';
import type {ReactNode} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {colors, radii} from '../theme/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  icon?: ReactNode;
  variant?: 'primary' | 'ghost';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({
  label,
  onPress,
  icon,
  variant = 'primary',
  disabled,
  style,
}: PrimaryButtonProps) {
  const isGhost = variant === 'ghost';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        isGhost ? styles.ghost : styles.primary,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}>
      {icon}
      <Text style={[styles.label, isGhost && styles.ghostLabel]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 54,
    borderRadius: radii.medium,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 18,
  },
  primary: {
    backgroundColor: colors.orange,
    borderWidth: 1,
    borderColor: colors.orangeLight,
    shadowColor: colors.shadow,
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: {width: 0, height: 8},
    elevation: 8,
  },
  ghost: {
    backgroundColor: 'rgba(70, 12, 4, 0.42)',
    borderWidth: 1,
    borderColor: colors.borderSoft,
  },
  label: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '800',
  },
  ghostLabel: {
    color: colors.muted,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    transform: [{scale: 0.98}],
  },
});
