import type {QuizKind} from '../navigation/types';

export type QuizTask = {
  question: string;
  sequence?: string;
  options: string[];
  correctIndex: number;
};

export type QuizLevel = {
  title: string;
  tasks: QuizTask[];
};

export type QuizSet = {
  tabTitle: string;
  introTitle: string;
  introSubtitle: string;
  introButton: string;
  questionLabel: string;
  levels: QuizLevel[];
};

export const quizSets: Record<QuizKind, QuizSet> = {
  sequence: {
    tabTitle: 'Dragon Sequence Path',
    introTitle: "Follow the Dragon's Path",
    introSubtitle: 'Numbers are placed along the dragon body. Spot the pattern and pick the next number in the sequence.',
    introButton: 'Begin the Path',
    questionLabel: 'Question',
    levels: [
      {
        title: 'Level 1 - Ember Patterns',
        tasks: [
          {sequence: '2, 4, 6, 8, ?', question: 'What number comes next?', options: ['9', '10', '12', '14'], correctIndex: 1},
          {sequence: '5, 10, 15, 20, ?', question: 'What number continues the pattern?', options: ['30', '35', '25', '40'], correctIndex: 2},
          {sequence: '3, 6, 9, 12, ?', question: 'Choose the next number.', options: ['13', '14', '16', '15'], correctIndex: 3},
          {sequence: '10, 20, 30, 40, ?', question: 'What is the next step?', options: ['50', '45', '60', '55'], correctIndex: 0},
          {sequence: '1, 3, 5, 7, ?', question: 'What number comes next?', options: ['11', '8', '9', '10'], correctIndex: 2},
        ],
      },
      {
        title: 'Level 2 - Flame Steps',
        tasks: [
          {sequence: '4, 8, 12, 16, ?', question: 'Find the next number.', options: ['18', '20', '22', '24'], correctIndex: 1},
          {sequence: '2, 5, 8, 11, ?', question: 'What number follows?', options: ['14', '13', '15', '16'], correctIndex: 0},
          {sequence: '30, 25, 20, 15, ?', question: 'Choose the next number.', options: ['12', '5', '10', '8'], correctIndex: 2},
          {sequence: '6, 12, 18, 24, ?', question: 'What is the next number?', options: ['36', '30', '28', '32'], correctIndex: 1},
          {sequence: '50, 45, 40, 35, ?', question: 'What number completes the pattern?', options: ['25', '20', '35', '30'], correctIndex: 3},
        ],
      },
      {
        title: 'Level 3 - Dragon Trail Logic',
        tasks: [
          {sequence: '2, 4, 8, 16, ?', question: 'What comes next?', options: ['24', '28', '32', '36'], correctIndex: 2},
          {sequence: '3, 9, 27, 81, ?', question: 'Choose the next number.', options: ['162', '243', '324', '216'], correctIndex: 1},
          {sequence: '100, 50, 25, ?', question: 'What is the next number?', options: ['12.5', '15', '10', '20'], correctIndex: 0},
          {sequence: '1, 2, 4, 8, ?', question: 'Find the next number.', options: ['12', '14', '18', '16'], correctIndex: 3},
          {sequence: '64, 32, 16, 8, ?', question: 'What number follows?', options: ['4', '6', '2', '12'], correctIndex: 0},
        ],
      },
      {
        title: 'Level 4 - Hidden Rule Path',
        tasks: [
          {sequence: '1, 4, 9, 16, ?', question: 'What number comes next?', options: ['20', '24', '25', '30'], correctIndex: 2},
          {sequence: '2, 6, 12, 20, ?', question: 'Find the next number.', options: ['28', '30', '32', '36'], correctIndex: 1},
          {sequence: '5, 7, 11, 17, ?', question: 'What number continues the pattern?', options: ['23', '24', '25', '27'], correctIndex: 2},
          {sequence: '1, 1, 2, 3, 5, ?', question: 'Choose the next number.', options: ['8', '7', '9', '10'], correctIndex: 0},
          {sequence: '2, 3, 5, 8, 12, ?', question: 'What is the next number?', options: ['18', '16', '17', '20'], correctIndex: 2},
        ],
      },
      {
        title: 'Level 5 - Ancient Sequence Flame',
        tasks: [
          {sequence: '2, 4, 7, 11, 16, ?', question: 'What number comes next?', options: ['20', '21', '23', '22'], correctIndex: 3},
          {sequence: '1, 3, 6, 10, 15, ?', question: 'Choose the next number.', options: ['21', '20', '22', '25'], correctIndex: 0},
          {sequence: '4, 9, 19, 39, ?', question: 'Find the next number.', options: ['69', '79', '89', '59'], correctIndex: 1},
          {sequence: '2, 5, 11, 23, ?', question: 'What number follows?', options: ['43', '44', '47', '49'], correctIndex: 2},
          {sequence: '3, 6, 18, 72, ?', question: 'What is the next number?', options: ['144', '216', '288', '360'], correctIndex: 3},
        ],
      },
      {
        title: 'Level 6 - Burning Steps',
        tasks: [
          {sequence: '7, 14, 21, 28, ?', question: 'What number comes next?', options: ['35', '32', '36', '42'], correctIndex: 0},
          {sequence: '9, 18, 27, 36, ?', question: 'Choose the next number.', options: ['40', '42', '45', '54'], correctIndex: 2},
          {sequence: '80, 70, 60, 50, ?', question: 'What number follows?', options: ['45', '40', '35', '30'], correctIndex: 1},
          {sequence: '11, 22, 33, 44, ?', question: 'Find the next number.', options: ['66', '77', '50', '55'], correctIndex: 3},
          {sequence: '100, 90, 80, 70, ?', question: 'What completes the pattern?', options: ['60', '65', '55', '50'], correctIndex: 0},
        ],
      },
      {
        title: 'Level 7 - Ember Multipliers',
        tasks: [
          {sequence: '5, 10, 20, 40, ?', question: 'What comes next?', options: ['70', '80', '90', '100'], correctIndex: 1},
          {sequence: '6, 18, 54, 162, ?', question: 'Choose the next number.', options: ['324', '486', '512', '648'], correctIndex: 1},
          {sequence: '96, 48, 24, 12, ?', question: 'Find the next number.', options: ['8', '4', '6', '3'], correctIndex: 2},
          {sequence: '4, 16, 64, 256, ?', question: 'What number follows?', options: ['512', '768', '1,024', '2,048'], correctIndex: 2},
          {sequence: '243, 81, 27, 9, ?', question: 'What is the next number?', options: ['3', '6', '1', '0'], correctIndex: 0},
        ],
      },
      {
        title: 'Level 8 - Hidden Flame Rules',
        tasks: [
          {sequence: '3, 5, 9, 15, 23, ?', question: 'What number comes next?', options: ['31', '32', '33', '35'], correctIndex: 2},
          {sequence: '4, 6, 10, 16, 24, ?', question: 'Choose the next number.', options: ['30', '34', '36', '40'], correctIndex: 1},
          {sequence: '10, 13, 19, 28, 40, ?', question: 'Find the next number.', options: ['52', '54', '55', '58'], correctIndex: 2},
          {sequence: '1, 5, 12, 22, 35, ?', question: 'What number follows?', options: ['48', '50', '52', '51'], correctIndex: 3},
          {sequence: '2, 8, 18, 32, 50, ?', question: 'What completes the pattern?', options: ['72', '70', '68', '75'], correctIndex: 0},
        ],
      },
    ],
  },
  challenge: {
    tabTitle: 'Dragon Challenge Tasks',
    introTitle: "Face the Dragon's Hardest Challenges",
    introSubtitle: 'Test your math mastery with multi-step equations, word problems, and tricky logic questions.',
    introButton: 'Accept the Challenge',
    questionLabel: 'Challenge',
    levels: [
      {
        title: 'Level 1 - Ember Arithmetic',
        tasks: [
          {question: 'Solve: 18 + 27 - 9', options: ['34', '36', '38', '40'], correctIndex: 1},
          {question: 'Solve: 7 x 6 + 8', options: ['50', '48', '56', '42'], correctIndex: 0},
          {question: 'Solve: 64 / 8 + 15', options: ['21', '22', '23', '24'], correctIndex: 2},
          {question: 'Solve: 45 - 6 x 5', options: ['10', '15', '20', '25'], correctIndex: 1},
          {question: 'Solve: 9 x 4 - 12', options: ['18', '20', '22', '24'], correctIndex: 3},
        ],
      },
      {
        title: 'Level 2 - Fire Percent Problems',
        tasks: [
          {question: 'What is 10% of 90?', options: ['9', '10', '18', '19'], correctIndex: 0},
          {question: 'What is 25% of 80?', options: ['10', '15', '20', '25'], correctIndex: 2},
          {question: 'A dragon has 60 crystals. It gives away 50% of them. How many crystals does it give away?', options: ['20', '25', '35', '30'], correctIndex: 3},
          {question: 'What is 20% of 150?', options: ['30', '20', '25', '35'], correctIndex: 0},
          {question: 'A math scroll costs 40 gems. Its price increases by 10%. What is the new price?', options: ['42 gems', '44 gems', '46 gems', '48 gems'], correctIndex: 1},
        ],
      },
      {
        title: 'Level 3 - Equation Flames',
        tasks: [
          {question: 'Solve for x: x + 12 = 30', options: ['16', '18', '20', '22'], correctIndex: 1},
          {question: 'Solve for x: 3x = 27', options: ['9', '8', '10', '12'], correctIndex: 0},
          {question: 'Solve for x: x - 15 = 21', options: ['34', '35', '36', '37'], correctIndex: 2},
          {question: 'Solve for x: 2x + 6 = 20', options: ['6', '8', '9', '7'], correctIndex: 3},
          {question: 'Solve for x: x / 4 = 11', options: ['40', '42', '44', '48'], correctIndex: 2},
        ],
      },
      {
        title: 'Level 4 - Dragon Word Problems',
        tasks: [
          {question: 'A dragon collects 24 fire stones in the morning and 18 fire stones in the evening. Then it gives away 9. How many fire stones are left?', options: ['33', '35', '37', '42'], correctIndex: 0},
          {question: 'There are 6 dragon nests. Each nest has 7 eggs. How many eggs are there in total?', options: ['36', '40', '42', '49'], correctIndex: 2},
          {question: 'A dragon flies 15 km each hour for 4 hours. How far does it fly?', options: ['45 km', '50 km', '55 km', '60 km'], correctIndex: 3},
          {question: 'A library has 72 math scrolls. They are placed equally on 8 shelves. How many scrolls are on each shelf?', options: ['9', '8', '10', '12'], correctIndex: 0},
          {question: 'A dragon needs 5 crystals to light one torch. How many crystals are needed for 9 torches?', options: ['40', '45', '50', '55'], correctIndex: 1},
        ],
      },
      {
        title: 'Level 5 - Ancient Logic Challenge',
        tasks: [
          {question: 'Which number makes this statement true?\n8 x ? = 56', options: ['6', '7', '8', '9'], correctIndex: 1},
          {question: 'A number is doubled, then 5 is added. The result is 21. What was the original number?', options: ['8', '7', '9', '10'], correctIndex: 0},
          {question: 'Which expression equals 48?', options: ['6 x 7', '8 x 6', '9 x 6', '12 x 3'], correctIndex: 1},
          {question: 'What number is missing?\n36 / ? = 6', options: ['4', '5', '6', '8'], correctIndex: 2},
          {question: 'A dragon has 3 bags. Each bag has the same number of gems. Together there are 36 gems. How many gems are in each bag?', options: ['9', '10', '11', '12'], correctIndex: 3},
        ],
      },
      {
        title: 'Level 6 - Mixed Fire Logic',
        tasks: [
          {question: 'Solve: 12 x 4 - 18', options: ['28', '30', '32', '36'], correctIndex: 1},
          {question: 'Solve: 96 / 6 + 14', options: ['28', '29', '30', '32'], correctIndex: 2},
          {question: 'Solve: 7 x 8 - 19', options: ['37', '39', '41', '43'], correctIndex: 0},
          {question: 'Solve: 150 - 9 x 12', options: ['36', '40', '42', '48'], correctIndex: 2},
          {question: 'Solve: 45 + 72 / 8', options: ['52', '53', '54', '56'], correctIndex: 2},
        ],
      },
      {
        title: 'Level 7 - Advanced Flame Problems',
        tasks: [
          {question: 'What is 15% of 200?', options: ['20', '25', '30', '35'], correctIndex: 2},
          {question: 'A dragon reads 18 pages each day for 6 days. How many pages does it read in total?', options: ['98', '104', '108', '112'], correctIndex: 2},
          {question: 'Solve for x: 4x + 8 = 40', options: ['6', '7', '8', '9'], correctIndex: 2},
          {question: 'A fire crystal costs 12 gems. How much do 7 fire crystals cost?', options: ['72 gems', '84 gems', '96 gems', '108 gems'], correctIndex: 1},
          {question: 'What is the average of 10, 14, 18, and 22?', options: ['14', '15', '16', '18'], correctIndex: 2},
        ],
      },
      {
        title: 'Level 8 - Master Dragon Challenge',
        tasks: [
          {question: 'Solve: (36 / 4) x 7', options: ['56', '60', '63', '72'], correctIndex: 2},
          {question: 'A dragon has 120 sparks. It uses 25% of them. How many sparks are used?', options: ['20', '25', '30', '40'], correctIndex: 2},
          {question: 'Solve for x: 5x - 10 = 35', options: ['7', '8', '9', '10'], correctIndex: 2},
          {question: 'A sequence starts at 6 and adds 7 each time. What is the 5th number?\nSequence: 6, 13, 20, 27, ?', options: ['32', '33', '34', '35'], correctIndex: 2},
          {question: 'A dragon divides 96 crystals equally into 12 boxes. Then it adds 5 crystals to each box. How many crystals are in each box now?', options: ['11', '12', '13', '14'], correctIndex: 2},
        ],
      },
    ],
  },
  formula: {
    tabTitle: 'Dragon Formula Forge',
    introTitle: 'Enter the Formula Forge',
    introSubtitle: 'Complete missing formula parts, understand how each rule works, and turn tricky math into clear steps.',
    introButton: 'Start Formula Test',
    questionLabel: 'Challenge',
    levels: [
      {
        title: 'Level 1 - Geometry Sparks',
        tasks: [
          {question: 'Complete the formula:\nArea of rectangle = length x ?', options: ['height', 'radius', 'width', 'perimeter'], correctIndex: 2},
          {question: 'Complete the formula:\nPerimeter of rectangle = 2 x length + 2 x ?', options: ['width', 'area', 'radius', 'angle'], correctIndex: 0},
          {question: 'Complete the formula:\nArea of square = side x ?', options: ['width', 'side', 'height', 'diameter'], correctIndex: 1},
          {question: 'Complete the formula:\nPerimeter of square = 4 x ?', options: ['radius', 'area', 'diagonal', 'side'], correctIndex: 3},
          {question: 'Complete the formula:\nArea of triangle = base x height / ?', options: ['3', '4', '2', '10'], correctIndex: 2},
        ],
      },
      {
        title: 'Level 2 - Percent Flames',
        tasks: [
          {question: 'Complete the formula:\n10% of a number = number / ?', options: ['10', '5', '20', '100'], correctIndex: 0},
          {question: 'Complete the formula:\n50% of a number = number / ?', options: ['4', '2', '10', '100'], correctIndex: 1},
          {question: 'Complete the formula:\n25% of a number = number / ?', options: ['2', '3', '4', '5'], correctIndex: 2},
          {question: 'Complete the formula:\nPercentage value = whole x percentage / ?', options: ['10', '50', '1,000', '100'], correctIndex: 3},
          {question: 'Complete the formula:\nNew price after 20% increase = original price + ?', options: ['20% of original price', 'original price / 2', 'original price x 100', '20'], correctIndex: 0},
        ],
      },
      {
        title: 'Level 3 - Average & Ratio Forge',
        tasks: [
          {question: 'Complete the formula:\nAverage = sum of values / ?', options: ['largest value', 'number of values', 'smallest value', 'final value'], correctIndex: 1},
          {question: 'Complete the formula:\nSum of values = average x ?', options: ['number of values', 'percentage', 'radius', 'perimeter'], correctIndex: 0},
          {question: 'Complete the ratio:\nIf 2 : 4 = 1 : ?', options: ['1', '3', '2', '4'], correctIndex: 2},
          {question: 'Complete the formula:\nIf 1/4 of 80, the formula becomes:', options: ['80 x 4', '80 / 4', '80 + 4', '80 - 4'], correctIndex: 1},
          {question: 'Complete the formula:\nIf a : b = c : d, then a x d = ?', options: ['b x c', 'a x b', 'c + d', 'b / c'], correctIndex: 0},
        ],
      },
      {
        title: 'Level 4 - Speed, Time & Distance',
        tasks: [
          {question: 'Complete the formula:\nDistance = speed x ?', options: ['time', 'area', 'width', 'percentage'], correctIndex: 0},
          {question: 'Complete the formula:\nSpeed = distance / ?', options: ['time', 'height', 'radius', 'mass'], correctIndex: 0},
          {question: 'Complete the formula:\nTime = distance / ?', options: ['width', 'speed', 'area', 'total'], correctIndex: 1},
          {question: 'A dragon flies 90 km in 3 hours. Complete the formula to find speed:\nSpeed = 90 / ?', options: ['9', '30', '3', '90'], correctIndex: 2},
          {question: 'A dragon flies at 12 km/h for 5 hours. Complete the formula:\nDistance = 12 x ?', options: ['5', '12', '17', '60'], correctIndex: 0},
        ],
      },
      {
        title: 'Level 5 - Algebra Flame Forge',
        tasks: [
          {question: 'Complete the equation rule:\nTo solve x + 7 = 15, use 15 - ?', options: ['7', '15', 'x', '22'], correctIndex: 0},
          {question: 'Complete the equation rule:\nTo solve 3x = 21, use 21 / ?', options: ['7', '3', '21', '18'], correctIndex: 1},
          {question: 'Complete the formula:\nIf x - 9 = 14, then x = 14 + ?', options: ['5', '9', '14', '23'], correctIndex: 1},
          {question: 'Complete the equation step:\nFor 2x + 4 = 18, first calculate 18 - ?', options: ['2', '4', '8', '18'], correctIndex: 1},
          {question: 'Complete the formula:\nIf x / 5 = 6, then x = 6 x ?', options: ['5', '6', '11', '30'], correctIndex: 0},
        ],
      },
    ],
  },
};
