import {Platform, StatusBar} from 'react-native';

export const colors = {
  background: '#700303ff',
  backgroundDeep: '#572e2eff',
  card: '#260707',
  cardWarm: '#642601',
  cardWarmDark: '#3b1202',
  border: '#682003',
  borderSoft: 'rgba(255, 115, 0, 0.35)',
  orange: '#ff6a00',
  orangeLight: '#ffb000',
  cream: '#fff5ec',
  muted: '#b9835d',
  mutedSoft: '#8d674c',
  green: '#36f277',
  greenBg: 'rgba(22, 120, 52, 0.28)',
  red: '#ff5c66',
  redBg: 'rgba(140, 16, 26, 0.42)',
  tabIdle: '#a17b55',
  shadow: '#ff6a00',
};

export const nav = {
  height: 64,
  horizontal: 18,
  bottomGap: Platform.OS === 'ios' ? 20 : 30,
};

export const deviceInsets = {
  top: Platform.OS === 'android' ? 30 : 0,
  bottom: Platform.OS === 'android' ? 30 : 0,
  statusTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0,
};

export const radii = {
  small: 10,
  medium: 16,
  large: 24,
  pill: 999,
};

export const fonts = {
  title: 28,
  heading: 22,
  body: 15,
  small: 12,
};
