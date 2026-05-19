import React from 'react';
import type {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {SparkField} from './SparkField';
import {colors, deviceInsets, nav} from '../theme/theme';

type ScreenShellProps = {
  children: ReactNode;
  withTabs?: boolean;
};

export function ScreenShell({children, withTabs}: ScreenShellProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View
        style={[
          styles.root,
          {
            paddingTop: deviceInsets.statusTop + deviceInsets.top,
            paddingBottom: withTabs ? nav.height + nav.bottomGap + 18 : deviceInsets.bottom,
          },
        ]}>
        <SparkField />
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  root: {
    flex: 1,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
});
