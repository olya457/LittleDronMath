import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import {images} from '../assets';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenShell} from '../components/ScreenShell';
import {quizSets} from '../data/quizzes';
import type {QuizKind} from '../navigation/types';
import {colors} from '../theme/theme';

const introImages: Record<QuizKind, ImageSourcePropType> = {
  sequence: images.sequenceIntro,
  challenge: images.onboardingChallenge,
  formula: images.formulaIntro,
};

type QuizIntroScreenProps = {
  kind: QuizKind;
  onStart: () => void;
};

export function QuizIntroScreen({kind, onStart}: QuizIntroScreenProps) {
  const set = quizSets[kind];
  const {height} = useWindowDimensions();
  const compact = height < 720;

  return (
    <ScreenShell withTabs>
      <View style={styles.root}>
        <Image
          source={introImages[kind]}
          resizeMode="contain"
          style={[styles.image, compact && styles.imageCompact]}
        />
        <View style={styles.copy}>
          <Text style={styles.title}>{set.introTitle}</Text>
          <Text style={styles.subtitle}>{set.introSubtitle}</Text>
        </View>
        <PrimaryButton label={set.introButton} onPress={onStart} style={styles.button} />
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  image: {
    width: '78%',
    maxWidth: 260,
    height: 300,
  },
  imageCompact: {
    height: 238,
  },
  copy: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    color: colors.cream,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: 330,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 22,
  },
});
