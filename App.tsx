import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AppNavigator} from './src/navigation/AppNavigator';
import type {SavedWisdomController} from './src/navigation/types';
import {LoadingScreen} from './src/screens/LoadingScreen';
import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {
  loadOnboardingDone,
  loadSavedTipIds,
  saveOnboardingDone,
  saveTipIds,
} from './src/storage/storage';

type Stage = 'loading' | 'onboarding' | 'main';

function App(): React.JSX.Element {
  const [stage, setStage] = useState<Stage>('loading');
  const [storageReady, setStorageReady] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const [done, ids] = await Promise.all([loadOnboardingDone(), loadSavedTipIds()]);
        if (mounted) {
          setOnboardingDone(done);
          setSavedIds(ids);
        }
      } finally {
        if (mounted) {
          setStorageReady(true);
        }
      }
    };

    load().catch(() => undefined);

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (loadingDone && storageReady) {
      setStage(onboardingDone ? 'main' : 'onboarding');
    }
  }, [loadingDone, onboardingDone, storageReady]);

  const finishOnboarding = useCallback(async () => {
    setOnboardingDone(true);
    setStage('main');
    await saveOnboardingDone();
  }, []);

  const persistSaved = useCallback(async (nextIds: string[]) => {
    setSavedIds(nextIds);
    await saveTipIds(nextIds);
  }, []);

  const saved = useMemo<SavedWisdomController>(
    () => ({
      savedIds,
      isSaved: (id: string) => savedIds.includes(id),
      toggleSaved: async (id: string) => {
        const nextIds = savedIds.includes(id)
          ? savedIds.filter(savedId => savedId !== id)
          : [id, ...savedIds];
        await persistSaved(nextIds);
      },
      removeSaved: async (id: string) => {
        await persistSaved(savedIds.filter(savedId => savedId !== id));
      },
    }),
    [persistSaved, savedIds],
  );

  if (stage === 'loading') {
    return <LoadingScreen onFinish={() => setLoadingDone(true)} />;
  }

  if (stage === 'onboarding') {
    return <OnboardingScreen onDone={finishOnboarding} />;
  }

  return <AppNavigator saved={saved} />;
}

export default App;
