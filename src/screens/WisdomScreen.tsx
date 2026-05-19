import React, {useMemo, useState} from 'react';
import {
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PrimaryButton} from '../components/PrimaryButton';
import {ScreenShell} from '../components/ScreenShell';
import {SectionBadge} from '../components/SectionBadge';
import {wisdomCategories, wisdomTips} from '../data/wisdom';
import type {WisdomCategory, WisdomTip} from '../data/wisdom';
import type {Navigate, SavedWisdomController} from '../navigation/types';
import {colors, radii} from '../theme/theme';

type WisdomScreenProps = {
  navigate: Navigate;
  saved: SavedWisdomController;
};

type Filter = 'All' | WisdomCategory;

export function WisdomScreen({navigate, saved}: WisdomScreenProps) {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...wisdomCategories];
  const visibleTips = useMemo(
    () => (filter === 'All' ? wisdomTips : wisdomTips.filter(tip => tip.category === filter)),
    [filter],
  );

  return (
    <ScreenShell withTabs>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Dragon Math Wisdom</Text>
          <Text style={styles.subtitle}>Learn, save, and conquer</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}>
          {filters.map(item => {
            const active = item === filter;
            return (
              <Pressable
                key={item}
                accessibilityRole="button"
                onPress={() => setFilter(item)}
                style={[styles.filter, active && styles.filterActive]}>
                <Text style={[styles.filterText, active && styles.filterTextActive]}>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={styles.cards}>
          {visibleTips.map(tip => (
            <WisdomCard key={tip.id} tip={tip} navigate={navigate} saved={saved} />
          ))}
        </View>
      </ScrollView>
    </ScreenShell>
  );
}

type WisdomCardProps = {
  tip: WisdomTip;
  navigate: Navigate;
  saved: SavedWisdomController;
};

function WisdomCard({tip, navigate, saved}: WisdomCardProps) {
  const isSaved = saved.isSaved(tip.id);

  const share = async () => {
    await Share.share({
      message: `${tip.title}\n\n${tip.shortDescription}`,
    });
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => navigate({name: 'wisdomDetail', tipId: tip.id, sourceTab: 'wisdom'})}
      style={({pressed}) => [styles.card, pressed && styles.cardPressed]}>
      <SectionBadge label={tip.category} />
      <Text style={styles.cardTitle}>{tip.title}</Text>
      <Text style={styles.cardText}>{tip.shortDescription}</Text>
      <View style={styles.divider} />
      <View style={styles.cardActions}>
        <PrimaryButton
          label={isSaved ? 'Saved' : 'Save'}
          icon={<Text style={styles.actionIcon}>🏷️</Text>}
          onPress={() => {
            saved.toggleSaved(tip.id).catch(() => undefined);
          }}
          style={styles.smallButton}
          variant={isSaved ? 'primary' : 'ghost'}
        />
        <PrimaryButton
          label="Share"
          icon={<Text style={styles.actionIcon}>↗️</Text>}
          onPress={() => {
            share().catch(() => undefined);
          }}
          style={styles.smallButton}
          variant="ghost"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 18,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  filters: {
    gap: 8,
    paddingRight: 22,
    marginBottom: 18,
  },
  filter: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(28, 5, 3, 0.65)',
  },
  filterActive: {
    backgroundColor: 'rgba(255, 106, 0, 0.18)',
    borderColor: colors.orange,
  },
  filterText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
  },
  filterTextActive: {
    color: colors.orangeLight,
  },
  cards: {
    gap: 14,
  },
  card: {
    borderRadius: radii.medium,
    borderWidth: 1,
    borderColor: colors.borderSoft,
    padding: 16,
    backgroundColor: 'rgba(24, 3, 3, 0.86)',
  },
  cardPressed: {
    transform: [{scale: 0.99}],
  },
  cardTitle: {
    color: colors.cream,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '900',
    marginTop: 10,
  },
  cardText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 106, 0, 0.16)',
    marginTop: 14,
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  smallButton: {
    minHeight: 34,
    borderRadius: radii.small,
    paddingHorizontal: 12,
  },
  actionIcon: {
    fontSize: 13,
  },
});
