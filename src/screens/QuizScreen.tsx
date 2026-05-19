import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {images} from '../assets';
import {BackButton} from '../components/BackButton';
import {ScreenShell} from '../components/ScreenShell';
import {quizSets} from '../data/quizzes';
import type {QuizKind} from '../navigation/types';
import {colors, radii} from '../theme/theme';

type QuizScreenProps = {
  kind: QuizKind;
  levelIndex: number;
  onBack: () => void;
  onComplete: (score: number, total: number) => void;
};

type AnswerState = 'correct' | 'wrong';
type TrailResult = AnswerState | null;

const trailNodes = [
  {left: 10, top: 52},
  {left: 28, top: 68},
  {left: 46, top: 52},
  {left: 64, top: 34},
  {left: 82, top: 52},
];

const trailLines = [
  {left: 17, top: 59, rotate: '20deg'},
  {left: 35, top: 60, rotate: '-18deg'},
  {left: 53, top: 45, rotate: '-18deg'},
  {left: 71, top: 43, rotate: '18deg'},
];

export function QuizScreen({kind, levelIndex, onBack, onComplete}: QuizScreenProps) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answerResults, setAnswerResults] = useState<TrailResult[]>(() =>
    Array(5).fill(null),
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const {height, width} = useWindowDimensions();
  const compact = height < 720 || width < 360;
  const set = quizSets[kind];
  const level = set.levels[levelIndex] ?? set.levels[0];
  const task = level.tasks[taskIndex];
  const progress = (taskIndex + 1) / level.tasks.length;

  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    [],
  );

  const choose = (optionIndex: number) => {
    if (selected !== null) {
      return;
    }

    const isAnswerCorrect = optionIndex === task.correctIndex;
    const nextResults = [...answerResults];
    const nextScore = isAnswerCorrect ? score + 1 : score;

    nextResults[taskIndex] = isAnswerCorrect ? 'correct' : 'wrong';
    setSelected(optionIndex);
    setScore(nextScore);
    setAnswerResults(nextResults);
    timer.current = setTimeout(() => {
      if (taskIndex === level.tasks.length - 1) {
        onComplete(nextScore, level.tasks.length);
        return;
      }
      setTaskIndex(current => current + 1);
      setSelected(null);
    }, 850);
  };

  return (
    <ScreenShell withTabs>
      <View style={styles.root}>
        <BackButton onPress={onBack} />
        <View style={styles.metaRow}>
          <Text style={styles.meta}>
            {set.questionLabel} {taskIndex + 1} / {level.tasks.length}
          </Text>
          <Text style={styles.points}>{score} pts</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, {width: `${progress * 100}%`}]} />
        </View>
        <View style={styles.questionArea}>
          <Text style={styles.questionTop}>{task.sequence ? 'What comes next?' : level.title}</Text>
          <View style={[styles.promptCard, compact && styles.promptCardCompact]}>
            {task.sequence ? (
              <>
                <SequenceTrail results={answerResults} currentIndex={taskIndex} />
                <Text style={styles.sequenceText}>{task.sequence}</Text>
                <Text style={styles.promptQuestion}>{task.question}</Text>
              </>
            ) : (
              <Text style={styles.promptQuestion}>{task.question}</Text>
            )}
          </View>
          <View style={styles.options}>
            {task.options.map((option, optionIndex) => {
              const isCorrect = optionIndex === task.correctIndex;
              const isSelected = selected === optionIndex;
              const revealCorrect = selected !== null && isCorrect;
              const revealWrong = selected !== null && isSelected && !isCorrect;

              return (
                <Pressable
                  accessibilityRole="button"
                  disabled={selected !== null}
                  key={`${task.question}-${option}`}
                  onPress={() => choose(optionIndex)}
                  style={({pressed}) => [
                    styles.option,
                    revealCorrect && styles.optionCorrect,
                    revealWrong && styles.optionWrong,
                    pressed && selected === null && styles.optionPressed,
                  ]}>
                  <Text
                    style={[
                      styles.optionText,
                      revealCorrect && styles.optionCorrectText,
                      revealWrong && styles.optionWrongText,
                    ]}>
                    {option}
                    {revealCorrect ? ' ✓' : revealWrong ? ' x' : ''}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          {kind !== 'sequence' && (
            <Image
              source={images.dragonSmall}
              resizeMode="contain"
              style={[styles.quizDragon, compact && styles.quizDragonCompact]}
            />
          )}
        </View>
      </View>
    </ScreenShell>
  );
}

function SequenceTrail({
  results,
  currentIndex,
}: {
  results: TrailResult[];
  currentIndex: number;
}) {
  return (
    <View style={styles.sequenceWrap}>
      {trailLines.map((line, index) => {
        const lineResult = results[index + 1];

        return (
          <View
            key={`${line.left}-${line.top}`}
            style={[
              styles.trailLine,
              {
                left: `${line.left}%`,
                top: `${line.top}%`,
                transform: [{rotate: line.rotate}],
              },
              lineResult === 'correct' && styles.trailLineCorrect,
              lineResult === 'wrong' && styles.trailLineWrong,
            ]}
          />
        );
      })}
      {trailNodes.map((node, index) => {
        const result = results[index];
        const isCurrent = index === currentIndex && !result;

        return (
          <View
            key={`${node.left}-${node.top}`}
            style={[
              styles.trailNode,
              {
                left: `${node.left}%`,
                top: `${node.top}%`,
              },
              isCurrent && styles.trailNodeCurrent,
              result === 'correct' && styles.trailNodeCorrect,
              result === 'wrong' && styles.trailNodeWrong,
            ]}>
            <Text
              style={[
                styles.trailNodeText,
                (isCurrent || result) && styles.trailNodeTextActive,
              ]}>
              {result === 'correct' ? '✓' : result === 'wrong' ? '×' : isCurrent ? '?' : index + 1}
            </Text>
          </View>
        );
      })}
      <Text style={styles.trailDragon}>🐲</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  meta: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
  },
  points: {
    color: colors.orangeLight,
    fontSize: 12,
    fontWeight: '900',
  },
  progressTrack: {
    height: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 106, 0, 0.2)',
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  questionArea: {
    flex: 1,
    justifyContent: 'center',
    gap: 24,
  },
  questionTop: {
    color: colors.cream,
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
  promptCard: {
    minHeight: 116,
    borderRadius: radii.medium,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(34, 4, 3, 0.78)',
    padding: 18,
    justifyContent: 'center',
    gap: 8,
  },
  promptCardCompact: {
    minHeight: 100,
    padding: 14,
  },
  sequenceWrap: {
    width: 270,
    maxWidth: '100%',
    height: 94,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  trailLine: {
    position: 'absolute',
    width: 56,
    height: 11,
    borderRadius: 20,
    backgroundColor: '#c73505',
    shadowColor: colors.orange,
    shadowOpacity: 0.45,
    shadowRadius: 7,
  },
  trailLineCorrect: {
    backgroundColor: '#15923b',
    shadowColor: colors.green,
  },
  trailLineWrong: {
    backgroundColor: '#9a0d20',
    shadowColor: colors.red,
  },
  trailNode: {
    position: 'absolute',
    width: 42,
    height: 42,
    marginLeft: -21,
    marginTop: -21,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: colors.borderSoft,
    backgroundColor: '#170302',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailNodeCurrent: {
    borderColor: colors.orangeLight,
    backgroundColor: '#6b2600',
    shadowColor: colors.orangeLight,
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  trailNodeCorrect: {
    borderColor: colors.green,
    backgroundColor: '#13913c',
    shadowColor: colors.green,
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
  trailNodeWrong: {
    borderColor: colors.red,
    backgroundColor: '#970d22',
    shadowColor: colors.red,
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
  trailNodeText: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  trailNodeTextActive: {
    color: colors.cream,
    fontSize: 20,
    lineHeight: 25,
  },
  trailDragon: {
    position: 'absolute',
    right: 0,
    top: 24,
    fontSize: 38,
    lineHeight: 46,
  },
  sequenceText: {
    color: colors.orangeLight,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  promptQuestion: {
    color: colors.cream,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '900',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  option: {
    width: '48.4%',
    minHeight: 56,
    borderRadius: radii.small,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(20, 3, 2, 0.84)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  optionPressed: {
    transform: [{scale: 0.98}],
  },
  optionCorrect: {
    borderColor: '#0da13e',
    backgroundColor: colors.greenBg,
  },
  optionWrong: {
    borderColor: '#a80e21',
    backgroundColor: colors.redBg,
  },
  optionText: {
    color: '#f3c98d',
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
  optionCorrectText: {
    color: colors.green,
  },
  optionWrongText: {
    color: colors.red,
  },
  quizDragon: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginTop: 8,
  },
  quizDragonCompact: {
    width: 118,
    height: 118,
  },
});
