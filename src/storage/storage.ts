import AsyncStorage from '@react-native-async-storage/async-storage';

const savedTipsKey = 'dragon_math_saved_tips';
const onboardingKey = 'dragon_math_onboarding_done';

export async function loadSavedTipIds() {
  const value = await AsyncStorage.getItem(savedTipsKey);
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export async function saveTipIds(ids: string[]) {
  await AsyncStorage.setItem(savedTipsKey, JSON.stringify(ids));
}

export async function loadOnboardingDone() {
  return (await AsyncStorage.getItem(onboardingKey)) === 'true';
}

export async function saveOnboardingDone() {
  await AsyncStorage.setItem(onboardingKey, 'true');
}
