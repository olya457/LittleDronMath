import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import {images} from '../assets';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenShell} from '../components/ScreenShell';
import {colors, radii} from '../theme/theme';

type OnboardingPage = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

const pages: OnboardingPage[] = [
  {
    title: "Enter the Dragon's Math World",
    subtitle: 'Step into a fiery world of numbers, logic, and smart learning.',
    image: images.onboardingWorld,
  },
  {
    title: 'Learn Tricks That Make Math Easier',
    subtitle: 'Discover smart shortcuts, simple logic, and helpful tips you can use every day.',
    image: images.onboardingTricks,
  },
  {
    title: 'Follow the Number Pattern',
    subtitle: 'Find the hidden rule and choose the next number in the sequence.',
    image: images.onboardingPattern,
  },
  {
    title: 'Take on Harder Challenges',
    subtitle: 'Train your thinking with advanced tasks, equations, and logic problems.',
    image: images.onboardingChallenge,
  },
  {
    title: 'Build Your Math Power',
    subtitle: 'Master formulas, save useful knowledge, and keep growing with every lesson.',
    image: images.onboardingPower,
  },
];

type OnboardingScreenProps = {
  onDone: () => void;
};

export function OnboardingScreen({onDone}: OnboardingScreenProps) {
  const [index, setIndex] = useState(0);
  const {height, width} = useWindowDimensions();
  const page = pages[index];
  const isLast = index === pages.length - 1;
  const compact = height < 720 || width < 360;

  const goNext = () => {
    if (isLast) {
      onDone();
      return;
    }
    setIndex(current => Math.min(current + 1, pages.length - 1));
  };

  return (
    <ScreenShell>
      <View style={styles.root}>
        <Pressable accessibilityRole="button" onPress={onDone} style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
        <View style={styles.content}>
          <Image
            source={page.image}
            resizeMode="contain"
            style={[
              styles.dragon,
              compact && styles.dragonCompact,
              index === 0 && styles.dragonWorld,
            ]}
          />
          <View style={styles.copy}>
            <Text style={[styles.title, compact && styles.titleCompact]}>{page.title}</Text>
            <Text style={[styles.subtitle, compact && styles.subtitleCompact]}>{page.subtitle}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.dots}>
            {pages.map((_, dotIndex) => (
              <View
                key={dotIndex}
                style={[styles.dot, dotIndex === index && styles.dotActive]}
              />
            ))}
          </View>
          <View style={styles.actions}>
            {isLast && (
              <PrimaryButton
                label="‹"
                onPress={() => setIndex(current => Math.max(current - 1, 0))}
                style={styles.backButton}
                variant="ghost"
              />
            )}
            <PrimaryButton
              label={isLast ? 'Start Learning' : 'Next →'}
              onPress={goNext}
              style={styles.nextButton}
            />
          </View>
        </View>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 26,
    paddingBottom: 22,
  },
  skip: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 2,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(110, 31, 7, 0.6)',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  skipText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  dragon: {
    width: '86%',
    height: 300,
    maxWidth: 330,
  },
  dragonWorld: {
    width: '92%',
    height: 320,
  },
  dragonCompact: {
    height: 240,
  },
  copy: {
    alignItems: 'center',
    gap: 18,
  },
  title: {
    color: colors.cream,
    fontSize: 26,
    lineHeight: 34,
    fontWeight: '900',
    textAlign: 'center',
  },
  titleCompact: {
    fontSize: 23,
    lineHeight: 30,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    maxWidth: 320,
    fontWeight: '600',
  },
  subtitleCompact: {
    fontSize: 13,
    lineHeight: 20,
  },
  footer: {
    gap: 18,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 176, 0, 0.28)',
  },
  dotActive: {
    width: 20,
    backgroundColor: colors.orangeLight,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  backButton: {
    width: 54,
  },
  nextButton: {
    flex: 1,
  },
});
