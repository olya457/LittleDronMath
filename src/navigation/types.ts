export type TabKey = 'wisdom' | 'sequence' | 'challenge' | 'formula' | 'saved';

export type QuizKind = 'sequence' | 'challenge' | 'formula';

export type MainRoute =
  | {name: 'tabs'}
  | {name: 'wisdomDetail'; tipId: string; sourceTab: TabKey}
  | {name: 'quizIntro'; kind: QuizKind}
  | {name: 'quiz'; kind: QuizKind; levelIndex: number}
  | {
      name: 'quizResult';
      kind: QuizKind;
      levelIndex: number;
      score: number;
      total: number;
    };

export type Navigate = (route: MainRoute) => void;

export type SavedWisdomController = {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => Promise<void>;
  removeSaved: (id: string) => Promise<void>;
};
