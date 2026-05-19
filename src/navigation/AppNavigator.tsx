import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabs} from './BottomTabs';
import type {MainRoute, QuizKind, SavedWisdomController, TabKey} from './types';
import {quizSets} from '../data/quizzes';
import {QuizIntroScreen} from '../screens/QuizIntroScreen';
import {QuizResultScreen} from '../screens/QuizResultScreen';
import {QuizScreen} from '../screens/QuizScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {WisdomDetailScreen} from '../screens/WisdomDetailScreen';
import {WisdomScreen} from '../screens/WisdomScreen';

type AppNavigatorProps = {
  saved: SavedWisdomController;
};

const quizTabs: QuizKind[] = ['sequence', 'challenge', 'formula'];

const initialLevels: Record<QuizKind, number> = {
  sequence: 0,
  challenge: 0,
  formula: 0,
};

export function AppNavigator({saved}: AppNavigatorProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('wisdom');
  const [route, setRoute] = useState<MainRoute>({name: 'tabs'});
  const [levelIndexes, setLevelIndexes] = useState(initialLevels);

  const navigate = useCallback((nextRoute: MainRoute) => {
    if (nextRoute.name === 'quiz' || nextRoute.name === 'quizIntro' || nextRoute.name === 'quizResult') {
      setActiveTab(nextRoute.kind);
    }
    if (nextRoute.name === 'wisdomDetail') {
      setActiveTab(nextRoute.sourceTab);
    }
    setRoute(nextRoute);
  }, []);

  const selectTab = (tab: TabKey) => {
    setActiveTab(tab);
    if (quizTabs.includes(tab as QuizKind)) {
      setRoute({name: 'quizIntro', kind: tab as QuizKind});
      return;
    }
    setRoute({name: 'tabs'});
  };

  const openWisdom = () => {
    setActiveTab('wisdom');
    setRoute({name: 'tabs'});
  };

  const renderRoute = () => {
    if (route.name === 'wisdomDetail') {
      return (
        <WisdomDetailScreen
          tipId={route.tipId}
          saved={saved}
          onBack={() => {
            setActiveTab(route.sourceTab);
            setRoute({name: 'tabs'});
          }}
        />
      );
    }

    if (route.name === 'quizIntro') {
      return (
        <QuizIntroScreen
          kind={route.kind}
          onStart={() =>
            navigate({name: 'quiz', kind: route.kind, levelIndex: levelIndexes[route.kind]})
          }
        />
      );
    }

    if (route.name === 'quiz') {
      return (
        <QuizScreen
          kind={route.kind}
          levelIndex={route.levelIndex}
          onBack={() => navigate({name: 'quizIntro', kind: route.kind})}
          onComplete={(score, total) =>
            navigate({
              name: 'quizResult',
              kind: route.kind,
              levelIndex: route.levelIndex,
              score,
              total,
            })
          }
        />
      );
    }

    if (route.name === 'quizResult') {
      const levels = quizSets[route.kind].levels;
      const nextLevel = (route.levelIndex + 1) % levels.length;

      return (
        <QuizResultScreen
          kind={route.kind}
          score={route.score}
          total={route.total}
          onRetry={() => navigate({name: 'quiz', kind: route.kind, levelIndex: route.levelIndex})}
          onNextLevel={() => {
            setLevelIndexes(current => ({...current, [route.kind]: nextLevel}));
            navigate({name: 'quiz', kind: route.kind, levelIndex: nextLevel});
          }}
        />
      );
    }

    if (activeTab === 'wisdom') {
      return <WisdomScreen navigate={navigate} saved={saved} />;
    }

    if (activeTab === 'saved') {
      return <SavedScreen navigate={navigate} saved={saved} onExploreWisdom={openWisdom} />;
    }

    const kind = activeTab as QuizKind;
    return (
      <QuizIntroScreen
        kind={kind}
        onStart={() => navigate({name: 'quiz', kind, levelIndex: levelIndexes[kind]})}
      />
    );
  };

  return (
    <View style={styles.root}>
      {renderRoute()}
      <BottomTabs activeTab={activeTab} onSelect={selectTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
