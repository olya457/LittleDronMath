import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radii} from '../theme/theme';

type SectionBadgeProps = {
  label: string;
};

export function SectionBadge({label}: SectionBadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radii.small,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 119, 0, 0.16)',
    borderWidth: 1,
    borderColor: colors.borderSoft,
  },
  text: {
    color: colors.orangeLight,
    fontSize: 11,
    fontWeight: '800',
  },
});
