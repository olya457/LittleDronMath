import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../assets';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenShell} from '../components/ScreenShell';
import type {QuizKind} from '../navigation/types';
import {colors} from '../theme/theme';

type QuizResultScreenProps = {
  kind: QuizKind;
  score: number;
  total: number;
  onRetry: () => void;
  onNextLevel: () => void;
};

export function QuizResultScreen({
  score,
  total,
  onRetry,
  onNextLevel,
}: QuizResultScreenProps) {
  const completed = score === total;

  return (
    <ScreenShell withTabs>
      <View style={styles.root}>
        <Image
          source={completed ? images.resultSuccess : images.resultRetry}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>
          {completed ? 'Path Completed' : 'This path needs one more spark.'}
        </Text>
        <Text style={styles.subtitle}>
          {completed
            ? 'You solved the challenge and followed the logic correctly. Keep practicing to sharpen your skills and unlock the next step in your learning path.'
            : 'Some answers were missed, but every attempt helps you understand the pattern better. Review the task, look for the rule, and try again with a clearer strategy.'}
        </Text>
        <View style={styles.scorePill}>
          <Text style={styles.scoreText}>
            {score} / {total} pts
          </Text>
        </View>
        {completed ? (
          <PrimaryButton label="Next Level" onPress={onNextLevel} style={styles.button} />
        ) : (
          <View style={styles.actions}>
            <PrimaryButton label="Try Again" onPress={onRetry} style={styles.button} />
            <PrimaryButton
              label="Skip to Next →"
              onPress={onNextLevel}
              style={styles.button}
              variant="ghost"
            />
          </View>
        )}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  image: {
    width: 210,
    height: 250,
  },
  title: {
    color: colors.cream,
    fontSize: 24,
    lineHeight: 31,
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
  scorePill: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(255, 106, 0, 0.12)',
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  scoreText: {
    color: colors.orangeLight,
    fontSize: 13,
    fontWeight: '900',
  },
  actions: {
    alignSelf: 'stretch',
    gap: 10,
    marginTop: 4,
  },
  button: {
    alignSelf: 'stretch',
  },
});
