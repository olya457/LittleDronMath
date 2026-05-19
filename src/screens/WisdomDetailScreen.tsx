import React from 'react';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images} from '../assets';
import {BackButton} from '../components/BackButton';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenShell} from '../components/ScreenShell';
import {SectionBadge} from '../components/SectionBadge';
import {findWisdomTip} from '../data/wisdom';
import type {SavedWisdomController} from '../navigation/types';
import {colors, radii} from '../theme/theme';

type WisdomDetailScreenProps = {
  tipId: string;
  saved: SavedWisdomController;
  onBack: () => void;
};

export function WisdomDetailScreen({tipId, saved, onBack}: WisdomDetailScreenProps) {
  const tip = findWisdomTip(tipId);

  if (!tip) {
    return (
      <ScreenShell withTabs>
        <View style={styles.empty}>
          <BackButton label="Back to Wisdom" onPress={onBack} />
          <Text style={styles.title}>Wisdom not found</Text>
        </View>
      </ScreenShell>
    );
  }

  const isSaved = saved.isSaved(tip.id);

  const share = async () => {
    await Share.share({
      message: `${tip.title}\n\n${tip.shortDescription}\n\n${tip.fullExplanation.join('\n\n')}`,
    });
  };

  return (
    <ScreenShell withTabs>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <BackButton label="Back to Wisdom" onPress={onBack} />
        <View style={styles.hero}>
          <SectionBadge label={tip.category} />
          <Text style={styles.title}>{tip.title}</Text>
          <Text style={styles.short}>{tip.shortDescription}</Text>
        </View>
        <View style={styles.dragonLine}>
          <Image source={images.dragonSmall} resizeMode="contain" style={styles.dragon} />
          <View style={styles.speech}>
            <Text style={styles.speechText}>
              Study this carefully and your dragon approves of this knowledge. 🔥
            </Text>
          </View>
        </View>
        <View style={styles.bodyCard}>
          {tip.fullExplanation.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
        <View style={styles.actions}>
          <PrimaryButton
            label={isSaved ? 'Saved' : 'Save this Tip'}
            onPress={() => {
              saved.toggleSaved(tip.id).catch(() => undefined);
            }}
            style={styles.saveButton}
          />
          <PrimaryButton
            label="↗️"
            onPress={() => {
              share().catch(() => undefined);
            }}
            style={styles.shareButton}
            variant="ghost"
          />
        </View>
      </ScrollView>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 18,
  },
  empty: {
    flex: 1,
    padding: 18,
    gap: 24,
  },
  hero: {
    borderRadius: radii.large,
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: 'rgba(111, 45, 2, 0.82)',
    padding: 22,
    marginTop: 18,
    minHeight: 170,
    justifyContent: 'center',
  },
  title: {
    color: colors.cream,
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '900',
    marginTop: 16,
  },
  short: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    marginTop: 10,
  },
  dragonLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
  },
  dragon: {
    width: 58,
    height: 58,
  },
  speech: {
    flex: 1,
    borderRadius: radii.medium,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.borderSoft,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: 'rgba(30, 4, 2, 0.65)',
  },
  speechText: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
  },
  bodyCard: {
    marginTop: 18,
    borderRadius: radii.medium,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(24, 3, 3, 0.84)',
    padding: 20,
    gap: 16,
  },
  paragraph: {
    color: '#f1bd7e',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  saveButton: {
    flex: 1,
  },
  shareButton: {
    width: 58,
  },
});
