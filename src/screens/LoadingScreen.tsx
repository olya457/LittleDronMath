import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images} from '../assets';
import {SparkField} from '../components/SparkField';
import {colors} from '../theme/theme';

type LoadingScreenProps = {
  onFinish: () => void;
};

export function LoadingScreen({onFinish}: LoadingScreenProps) {
  const pulse = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {toValue: 1, duration: 900, useNativeDriver: true}),
        Animated.timing(pulse, {toValue: 0, duration: 900, useNativeDriver: true}),
      ]),
    );
    const rotateLoop = Animated.loop(
      Animated.timing(rotate, {toValue: 1, duration: 1900, useNativeDriver: true}),
    );
    pulseLoop.start();
    rotateLoop.start();
    const timer = setTimeout(onFinish, 5000);

    return () => {
      pulseLoop.stop();
      rotateLoop.stop();
      clearTimeout(timer);
    };
  }, [onFinish, pulse, rotate]);

  const orbScale = pulse.interpolate({inputRange: [0, 1], outputRange: [0.92, 1.08]});
  const orbOpacity = pulse.interpolate({inputRange: [0, 1], outputRange: [0.74, 1]});
  const spin = rotate.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.backgroundDeep} />
      <SparkField />
      <View style={styles.center}>
        <Image source={images.appIcon} resizeMode="contain" style={styles.logo} />
        <View style={styles.webViewFrame}>
          <Animated.View
            style={[
              styles.orb,
              {
                opacity: orbOpacity,
                transform: [{scale: orbScale}, {rotate: spin}],
              },
            ]}>
            <Text style={styles.orbMark}>+</Text>
          </Animated.View>
        </View>
        <View style={styles.dots}>
          {[0, 1, 2].map(index => (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  opacity: pulse.interpolate({
                    inputRange: [0, 1],
                    outputRange: [index === 1 ? 0.6 : 0.35, index === 1 ? 1 : 0.75],
                  }),
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDeep,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 62,
  },
  logo: {
    width: 196,
    height: 196,
  },
  webViewFrame: {
    width: 104,
    height: 104,
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#080101',
  },
  orb: {
    width: 98,
    height: 98,
    borderRadius: 49,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d531f',
    shadowColor: colors.orangeLight,
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  orbMark: {
    color: colors.orangeLight,
    fontSize: 22,
    fontWeight: '900',
    opacity: 0.65,
  },
  dots: {
    flexDirection: 'row',
    gap: 12,
    marginTop: -36,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.orangeLight,
    shadowColor: colors.orangeLight,
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
});
