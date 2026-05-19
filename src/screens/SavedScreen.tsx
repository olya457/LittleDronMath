import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {images} from '../assets';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenShell} from '../components/ScreenShell';
import {SectionBadge} from '../components/SectionBadge';
import {wisdomTips} from '../data/wisdom';
import type {Navigate, SavedWisdomController} from '../navigation/types';
import {colors, radii} from '../theme/theme';

type SavedScreenProps = {
  navigate: Navigate;
  saved: SavedWisdomController;
  onExploreWisdom: () => void;
};

export function SavedScreen({navigate, saved, onExploreWisdom}: SavedScreenProps) {
  const savedTips = wisdomTips.filter(tip => saved.savedIds.includes(tip.id));

  if (savedTips.length === 0) {
    return (
      <ScreenShell withTabs>
        <ScrollView contentContainerStyle={styles.emptyScroll}>
          <View style={styles.emptyHeader}>
            <Text style={styles.title}>Saved Wisdom</Text>
            <Text style={styles.subtitle}>Your collection is empty</Text>
          </View>
          <Image source={images.dragonSad} resizeMode="contain" style={styles.sadDragon} />
          <Text style={styles.emptyTitle}>No Saved Tips Yet</Text>
          <Text style={styles.emptyText}>
            Your dragon library is empty. Explore the Wisdom section and save tips that spark your curiosity.
          </Text>
          <View style={styles.hints}>
            <Hint icon="📖" label="Browse Dragon Math Wisdom" />
            <Hint icon="🏷️" label="Tap Save on any article" />
            <Hint icon="✨" label="Build your personal library" />
          </View>
          <PrimaryButton
            label="Explore Wisdom"
            onPress={onExploreWisdom}
            style={styles.explore}
          />
        </ScrollView>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell withTabs>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Saved Wisdom</Text>
          <Text style={styles.subtitle}>
            {savedTips.length} {savedTips.length === 1 ? 'tip' : 'tips'} saved
          </Text>
        </View>
        <View style={styles.library}>
          <Image source={images.dragonSmall} resizeMode="contain" style={styles.libraryDragon} />
          <View style={styles.libraryText}>
            <Text style={styles.libraryTitle}>Dragon's Library</Text>
            <Text style={styles.librarySubtitle}>
              {savedTips.length} wisdom {savedTips.length === 1 ? 'tip' : 'tips'} saved. Your dragon is proud!
            </Text>
          </View>
        </View>
        <View style={styles.cards}>
          {savedTips.map(tip => (
            <Pressable
              key={tip.id}
              accessibilityRole="button"
              onPress={() =>
                navigate({name: 'wisdomDetail', tipId: tip.id, sourceTab: 'saved'})
              }
              style={({pressed}) => [styles.card, pressed && styles.cardPressed]}>
              <View style={styles.cardTop}>
                <SectionBadge label={tip.category} />
                <Pressable
                  accessibilityRole="button"
                  onPress={() => {
                    saved.removeSaved(tip.id).catch(() => undefined);
                  }}
                  style={styles.deleteButton}>
                  <Text style={styles.deleteText}>🗑️</Text>
                </Pressable>
              </View>
              <Text style={styles.cardTitle}>{tip.title}</Text>
              <Text style={styles.cardText}>{tip.shortDescription}</Text>
            </Pressable>
          ))}
          <Pressable
            accessibilityRole="button"
            onPress={onExploreWisdom}
            style={styles.discover}>
            <View>
              <Text style={styles.discoverTitle}>Discover more wisdom</Text>
              <Text style={styles.discoverText}>
                {wisdomTips.length - savedTips.length} tips available in Wisdom
              </Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenShell>
  );
}

function Hint({icon, label}: {icon: string; label: string}) {
  return (
    <View style={styles.hint}>
      <Text style={styles.hintIcon}>{icon}</Text>
      <Text style={styles.hintLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 18,
  },
  emptyScroll: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 18,
  },
  header: {
    marginBottom: 18,
  },
  emptyHeader: {
    alignSelf: 'stretch',
  },
  title: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
  },
  sadDragon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 60,
  },
  emptyTitle: {
    color: colors.cream,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '900',
    marginTop: 22,
  },
  emptyText: {
    color: colors.muted,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '600',
    marginTop: 14,
  },
  hints: {
    gap: 10,
    marginTop: 34,
  },
  hint: {
    minHeight: 48,
    borderRadius: radii.small,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(24, 3, 3, 0.82)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 16,
  },
  hintIcon: {
    fontSize: 18,
  },
  hintLabel: {
    color: '#f0c28a',
    fontSize: 14,
    fontWeight: '700',
  },
  explore: {
    alignSelf: 'center',
    width: 230,
    marginTop: 34,
  },
  library: {
    borderRadius: radii.medium,
    borderWidth: 1,
    borderColor: colors.orange,
    backgroundColor: 'rgba(111, 45, 2, 0.7)',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 20,
  },
  libraryDragon: {
    width: 58,
    height: 58,
  },
  libraryText: {
    flex: 1,
  },
  libraryTitle: {
    color: colors.orangeLight,
    fontSize: 15,
    fontWeight: '900',
  },
  librarySubtitle: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
    fontWeight: '600',
  },
  cards: {
    gap: 12,
  },
  card: {
    borderRadius: radii.medium,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(24, 3, 3, 0.84)',
    padding: 15,
  },
  cardPressed: {
    transform: [{scale: 0.99}],
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borderSoft,
  },
  deleteText: {
    fontSize: 15,
  },
  cardTitle: {
    color: colors.cream,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '900',
    marginTop: 10,
  },
  cardText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
    fontWeight: '600',
  },
  discover: {
    minHeight: 62,
    borderRadius: radii.medium,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.borderSoft,
    backgroundColor: 'rgba(24, 3, 3, 0.7)',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discoverTitle: {
    color: '#f3bf7e',
    fontSize: 14,
    fontWeight: '800',
  },
  discoverText: {
    color: colors.mutedSoft,
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  chevron: {
    color: colors.orange,
    fontSize: 26,
    fontWeight: '900',
  },
});
