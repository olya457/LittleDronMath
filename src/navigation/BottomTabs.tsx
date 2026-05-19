import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {TabKey} from './types';
import {colors, nav, radii} from '../theme/theme';

const tabs: Array<{key: TabKey; icon: string; label: string}> = [
  {key: 'wisdom', icon: '📖', label: 'Wisdom'},
  {key: 'sequence', icon: '🐉', label: 'Path'},
  {key: 'challenge', icon: '🔥', label: 'Challenge'},
  {key: 'formula', icon: '🧮', label: 'Forge'},
  {key: 'saved', icon: '🔖', label: 'Saved'},
];

type BottomTabsProps = {
  activeTab: TabKey;
  onSelect: (tab: TabKey) => void;
};

export function BottomTabs({activeTab, onSelect}: BottomTabsProps) {
  return (
    <View style={styles.wrap} pointerEvents="box-none">
      <View style={styles.panel}>
        {tabs.map(tab => {
          const active = activeTab === tab.key;
          return (
            <Pressable
              accessibilityLabel={tab.label}
              accessibilityRole="button"
              key={tab.key}
              onPress={() => onSelect(tab.key)}
              style={({pressed}) => [
                styles.item,
                active && styles.itemActive,
                pressed && styles.itemPressed,
              ]}>
              <Text style={[styles.icon, active && styles.iconActive]}>{tab.icon}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: nav.horizontal,
    right: nav.horizontal,
    bottom: nav.bottomGap,
    height: nav.height,
  },
  panel: {
    flex: 1,
    borderRadius: radii.large,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(16, 3, 2, 0.9)',
    shadowColor: colors.shadow,
    shadowOpacity: 0.24,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 8},
    elevation: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  item: {
    width: 48,
    height: 48,
    borderRadius: radii.medium,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  itemActive: {
    backgroundColor: 'rgba(255, 106, 0, 0.18)',
    borderColor: colors.borderSoft,
  },
  itemPressed: {
    transform: [{scale: 0.95}],
  },
  icon: {
    fontSize: 25,
    color: colors.tabIdle,
  },
  iconActive: {
    color: colors.orange,
  },
});
