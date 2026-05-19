export type WisdomCategory =
  | 'Quick Math Tricks'
  | 'Formula Sparks'
  | 'Number Logic'
  | 'Dragon Facts'
  | 'Problem Solving Tips';

export type WisdomTip = {
  id: string;
  category: WisdomCategory;
  title: string;
  shortDescription: string;
  fullExplanation: string[];
};

export const wisdomCategories: WisdomCategory[] = [
  'Quick Math Tricks',
  'Formula Sparks',
  'Number Logic',
  'Dragon Facts',
  'Problem Solving Tips',
];

export const wisdomTips: WisdomTip[] = [
  {
    id: 'break-numbers-apart',
    category: 'Quick Math Tricks',
    title: 'Break Numbers Apart',
    shortDescription: 'Make big numbers easier by splitting them into smaller pieces.',
    fullExplanation: [
      'When a number looks too large, break it into smaller parts that are easier to handle. This method helps you solve the problem step by step instead of trying to keep everything in your head at once. For example, instead of solving 47 + 36 in one move, split 36 into 30 and 6. First calculate 47 + 30 = 77, then add the remaining 6, so 77 + 6 = 83.',
      'This trick works especially well with addition and subtraction because your brain usually handles round numbers faster. You can also use it with subtraction: 92 - 37 can become 92 - 30 = 62, then 62 - 7 = 55. The main idea is to turn one difficult-looking problem into a few smaller, cleaner steps.',
      'A little dragon tip: if the numbers feel too big, do not fight the whole dragon at once. Break it into smaller flames and solve one flame at a time.',
    ],
  },
  {
    id: 'multiply-by-9-fast',
    category: 'Quick Math Tricks',
    title: 'Multiply by 9 Fast',
    shortDescription: 'Use a simple pattern to multiply by 9.',
    fullExplanation: [
      'Multiplying by 9 becomes much easier when you remember that 9 is one less than 10. Instead of multiplying directly by 9, multiply the number by 10 first, then subtract the original number once. For example, 9 x 7 can be solved as 10 x 7 = 70, then 70 - 7 = 63. So, 9 x 7 = 63.',
      'This works because multiplying by 10 creates one extra group. When you subtract one group, you are left with exactly 9 groups. Another example: 9 x 12 becomes 10 x 12 = 120, then 120 - 12 = 108. This is often faster than memorizing every single multiplication result.',
      'You can also use this trick mentally during bigger calculations. If you see 9 x 18, think 180 - 18 = 162. It turns a multiplication problem into one multiplication by 10 and one subtraction, which is much easier for most learners.',
    ],
  },
  {
    id: 'add-near-tens',
    category: 'Quick Math Tricks',
    title: 'Add Near Tens',
    shortDescription: 'Round numbers first, then adjust.',
    fullExplanation: [
      'When a number is close to a round ten, it is usually faster to round it first and then fix the small difference. For example, 58 + 19 can feel slightly annoying because 19 is not a round number. But 19 is very close to 20. So calculate 58 + 20 = 78, then subtract 1, because you added one too many. The final answer is 77.',
      'This method is useful because round numbers like 10, 20, 30, 50, and 100 are easier to calculate with. Another example: 76 + 29 becomes 76 + 30 = 106, then 106 - 1 = 105. For subtraction, you can also use the same idea: 84 - 39 becomes 84 - 40 = 44, then add 1 back, so the answer is 45.',
      'The key is to always ask: "Did I add too much or take away too much?" Then adjust by the same amount. This keeps your answer accurate while making the calculation faster.',
    ],
  },
  {
    id: 'double-and-half',
    category: 'Quick Math Tricks',
    title: 'Double and Half',
    shortDescription: 'Make multiplication easier by doubling one number and halving the other.',
    fullExplanation: [
      'Some multiplication problems become much easier if you double one number and halve the other. The total value stays the same because one factor becomes larger while the other becomes smaller in a matching way. For example, 16 x 5 can be changed into 8 x 10. Since 8 x 10 = 80, the answer is 80.',
      'This trick is especially useful when one number can easily become 10, 20, 50, or 100 after doubling. For example, 25 x 12 can become 50 x 6, which is 300. Another example: 18 x 5 can become 9 x 10, which is 90. These versions are often much simpler than the original problem.',
      'The trick works best when one of the numbers is even, because it can be divided by 2 cleanly. It also helps learners understand that multiplication is flexible. You do not always have to solve the problem exactly as it appears. Sometimes you can reshape it into something friendlier.',
    ],
  },
  {
    id: 'opposite-operation',
    category: 'Quick Math Tricks',
    title: 'Check with the Opposite Operation',
    shortDescription: 'Use reverse operations to check your answer.',
    fullExplanation: [
      'One of the best ways to check your math is to use the opposite operation. Addition and subtraction are opposites. Multiplication and division are opposites. If you solve a problem and want to know whether your answer makes sense, reverse it. For example, if you solve 42 / 6 = 7, you can check it by doing 7 x 6 = 42. Since the result matches the original number, your answer is correct.',
      'This trick also works with addition. If you calculate 38 + 27 = 65, check it with subtraction: 65 - 27 = 38. If you get back to the number you started with, the answer is probably right. For subtraction, if 91 - 46 = 45, check it with 45 + 46 = 91.',
      'Using the opposite operation is like asking math to prove itself. It is especially helpful during quizzes, homework, or longer problems where one small mistake can change everything. A careful dragon always checks the trail before flying forward.',
    ],
  },
  {
    id: 'rectangle-area',
    category: 'Formula Sparks',
    title: 'Rectangle Area',
    shortDescription: 'Learn why rectangle area uses length times width.',
    fullExplanation: [
      'The area of a rectangle is found with length x width because you are counting how many square units fit inside the shape. Imagine a rectangle drawn on a grid. If it is 6 units long and 4 units wide, that means there are 6 spaces across and 4 spaces down. You can think of this as 4 rows with 6 squares in each row, or 6 columns with 4 squares in each column. Either way, the total is 6 x 4 = 24 square units.',
      'Area is not about the outside edge of the shape. It is about the space inside it. That is why the answer is written in square units, such as square centimeters, square meters, or square inches. If a rectangle is 5 meters long and 3 meters wide, the area is 15 square meters, because 15 small one-meter squares could fit inside.',
      'A useful dragon tip: when solving area problems, always look for the two measurements that describe the inside space, usually length and width. If you only add the sides, you are finding the border, not the area.',
    ],
  },
  {
    id: 'perimeter-power',
    category: 'Formula Sparks',
    title: 'Perimeter Power',
    shortDescription: 'Perimeter means distance around a shape.',
    fullExplanation: [
      'Perimeter is the total distance around the outside of a shape. You can imagine walking along the edge of a rectangle. The full distance you walk around all sides is the perimeter. For a rectangle, opposite sides are equal, so there are two lengths and two widths. That is why the formula is 2 x length + 2 x width.',
      'For example, if a rectangle has a length of 8 and a width of 3, the perimeter is 8 + 8 + 3 + 3 = 22. You can also calculate it as 2 x 8 = 16 and 2 x 3 = 6, then 16 + 6 = 22. Both methods give the same result.',
      'Perimeter is useful when you need to know how much border, fence, ribbon, or frame is needed around something. If area tells you how much space is inside, perimeter tells you how far it is around the outside. Do not mix them up: area fills the shape, perimeter walks around it.',
    ],
  },
  {
    id: 'average-made-simple',
    category: 'Formula Sparks',
    title: 'Average Made Simple',
    shortDescription: 'Average means sharing numbers equally.',
    fullExplanation: [
      'An average shows what number you would get if several values were shared equally. To find an average, add all the numbers together, then divide by how many numbers there are. For example, with 4, 6, and 8, first add them: 4 + 6 + 8 = 18. There are 3 numbers, so divide by 3: 18 / 3 = 6. The average is 6.',
      'You can imagine three dragons collecting fire crystals. One dragon has 4, another has 6, and another has 8. Together, they have 18 crystals. If they share them equally, each dragon gets 6. That equal share is the average.',
      'Average is helpful when you want to understand a general result instead of focusing on every separate number. For example, you can find an average score, average temperature, average speed, or average number of tasks completed. A simple rule: add first, then divide.',
    ],
  },
  {
    id: 'percentage-basics',
    category: 'Formula Sparks',
    title: 'Percentage Basics',
    shortDescription: 'Percent means out of 100.',
    fullExplanation: [
      'A percentage shows how many parts out of 100. The word percent means per hundred. So 25% means 25 out of 100. This is the same as one quarter, because 25 is one fourth of 100. Percentages are used everywhere: discounts, test scores, progress bars, statistics, and comparisons.',
      'To find 10% of a number, divide it by 10. For example, 10% of 80 = 8. Once you know 10%, you can find other percentages more easily. 20% of 80 is double 10%, so it is 16. 5% of 80 is half of 10%, so it is 4.',
      'Percentages become easier when you connect them to fractions. 50% means half, 25% means one quarter, 75% means three quarters, and 100% means the whole amount. A useful trick: always ask, "What is the whole?"',
    ],
  },
  {
    id: 'speed-time-distance',
    category: 'Formula Sparks',
    title: 'Speed, Time, Distance',
    shortDescription: 'Use one formula triangle for travel problems.',
    fullExplanation: [
      'The basic relationship between speed, time, and distance is distance = speed x time. This means that if you know how fast something moves and how long it moves, you can calculate how far it travels. For example, if a dragon flies at 20 km per hour for 3 hours, it travels 20 x 3 = 60 km.',
      'The formula can also be rearranged depending on what you need to find. If you know distance and time, you can find speed: speed = distance / time. If you know distance and speed, you can find time: time = distance / speed.',
      'This formula is useful for travel, movement, races, maps, and word problems. The most important part is choosing the right formula based on what the question asks. Dragon tip: check the units.',
    ],
  },
  {
    id: 'even-and-odd',
    category: 'Number Logic',
    title: 'Even and Odd Clues',
    shortDescription: 'The last digit tells if a number is even or odd.',
    fullExplanation: [
      'A number is even if its last digit is 0, 2, 4, 6, or 8. A number is odd if its last digit is 1, 3, 5, 7, or 9. The useful part is that you do not need to check the whole number. Only the final digit matters.',
      'For example, 4,728 is even because it ends in 8. Even though the number is large, the last digit gives the answer immediately. Another example: 13,951 is odd because it ends in 1.',
      'This works because even numbers can be split into two equal groups with nothing left over. Odd numbers always leave one extra. Dragon tip: when a number looks huge, look at its tail, the last digit tells the secret.',
    ],
  },
  {
    id: 'patterns-in-sequences',
    category: 'Number Logic',
    title: 'Patterns in Sequences',
    shortDescription: 'Look for what changes from one number to the next.',
    fullExplanation: [
      'To solve a number sequence, compare each number with the next one and look for a rule. Ask yourself: is the sequence adding, subtracting, multiplying, or dividing? For example, in 3, 6, 12, 24, each number is multiplied by 2, so the next number is 48.',
      'Some sequences use addition: 5, 10, 15, 20 adds 5 each time. Some use subtraction: 40, 35, 30, 25 subtracts 5 each time. Others may multiply or divide: 2, 6, 18, 54 multiplies by 3 each time.',
      'Harder sequences may have changing steps. For example, 2, 4, 7, 11, 16 increases by 2, then 3, then 4, then 5. The next increase should be 6, so the next number is 22.',
    ],
  },
  {
    id: 'multiples',
    category: 'Number Logic',
    title: 'Multiples Are Repeated Steps',
    shortDescription: 'Multiples are numbers you get by skip-counting.',
    fullExplanation: [
      'Multiples are numbers you get when you multiply a number by 1, 2, 3, 4, and so on. For example, the multiples of 5 are 5, 10, 15, 20, 25, 30. These are the same numbers you get when you skip-count by 5.',
      'Multiples are useful because they help with multiplication, division, fractions, and patterns. If a number appears in the multiplication table for 6, then it is a multiple of 6. For example, 24 is a multiple of 6 because 6 x 4 = 24.',
      'You can also use multiples to check division. If 36 is a multiple of 9, then 36 / 9 will divide evenly. Since 9 x 4 = 36, the answer is 4 with no remainder.',
    ],
  },
  {
    id: 'prime-number-sparks',
    category: 'Number Logic',
    title: 'Prime Number Sparks',
    shortDescription: 'Prime numbers have exactly two factors.',
    fullExplanation: [
      'A prime number has exactly two factors: 1 and itself. That means it can only be divided evenly by those two numbers. For example, 7 is prime because the only whole-number multiplication that makes 7 is 1 x 7.',
      'A number that has more than two factors is called a composite number. For example, 8 is not prime because it can be made by 1 x 8 and 2 x 4. Since it has more than two factors, it is composite.',
      'Some prime numbers are 2, 3, 5, 7, 11, 13, 17, and 19. The number 2 is special because it is the only even prime number. Prime numbers are like building blocks for other numbers.',
    ],
  },
  {
    id: 'place-value',
    category: 'Number Logic',
    title: 'Place Value Matters',
    shortDescription: 'Each digit has a different value depending on its position.',
    fullExplanation: [
      'Place value means that a digit changes its value depending on where it is in a number. In 352, the digit 3 means 300, the digit 5 means 50, and the digit 2 means 2. The same digit can mean very different things in different places.',
      'For example, in 507, the 5 means 500. But in 75, the 5 means only 5. In 5,000, the 5 means five thousand. The digit is the same, but its position gives it power.',
      'A useful way to think about place value is to split a number apart. 4,681 means 4,000 + 600 + 80 + 1. Once you see numbers this way, large numbers become easier to understand.',
    ],
  },
  {
    id: 'zero-changed-everything',
    category: 'Dragon Facts',
    title: 'Zero Changed Everything',
    shortDescription: 'Zero is small, but it changed mathematics forever.',
    fullExplanation: [
      'Zero may look simple, but it is one of the most important ideas in mathematics. It means nothing, but it also helps numbers work in a clear and organized way. Without zero, it would be very difficult to write numbers like 10, 100, 1,000, or 10,000.',
      'For example, 105 is very different from 15. The zero in the middle tells us there are no tens, but it keeps the 1 in the hundreds place. Without zero, place value would become confusing very quickly.',
      'Zero is also powerful in calculations. Adding zero does not change a number: 8 + 0 = 8. Subtracting zero also keeps the number the same: 8 - 0 = 8. But multiplying by zero turns everything into zero: 8 x 0 = 0.',
    ],
  },
  {
    id: 'infinity',
    category: 'Dragon Facts',
    title: 'Infinity Is Not a Normal Number',
    shortDescription: 'Infinity means something goes on forever.',
    fullExplanation: [
      'Infinity is not a regular number like 5, 100, or 1,000. You cannot count to infinity, write the final number, or place it at the end of a number line. Infinity means that something keeps going forever without stopping.',
      'This makes infinity different from very large numbers. A million is huge, and a billion is even bigger, but both are still normal numbers. Infinity is not just very big. It means there is no final point.',
      'A useful way to understand infinity is to think of it as an idea, not a destination. You never arrive at infinity. You use it to describe something endless.',
    ],
  },
  {
    id: 'math-in-nature',
    category: 'Dragon Facts',
    title: 'Math Lives in Nature',
    shortDescription: 'Patterns and shapes appear naturally around us.',
    fullExplanation: [
      'Math is not only found in notebooks, classrooms, or calculators. It appears all around us in nature. Flowers, shells, honeycombs, snowflakes, leaves, waves, and tree branches often follow patterns, symmetry, or repeating structures.',
      'For example, honeycombs are made of hexagons. This shape is useful because hexagons fit together neatly without leaving gaps. Snowflakes often show symmetry, meaning parts of the shape match or repeat in a balanced way.',
      'This does not mean nature is sitting with a pencil solving equations. It means many natural forms follow rules, balance, repetition, and structure. Math helps us describe what we see.',
    ],
  },
  {
    id: 'ancient-math',
    category: 'Dragon Facts',
    title: 'Ancient People Used Math Daily',
    shortDescription: 'Math helped early civilizations build, trade, and measure.',
    fullExplanation: [
      'Ancient people used math long before modern schools existed. They needed it for practical everyday life: counting goods, measuring land, building structures, tracking time, trading items, planning journeys, and organizing communities.',
      'Builders used measurement and geometry to create temples, walls, roads, and houses. Farmers used counting and calendars to understand seasons, planting times, and harvest cycles. Traders used arithmetic to count products and compare values.',
      'Ancient civilizations also used math to study the sky. They watched the movement of the sun, moon, and stars to create calendars and plan important events. Math has always been connected to real life.',
    ],
  },
  {
    id: 'circle-points',
    category: 'Dragon Facts',
    title: 'A Circle Has Endless Points',
    shortDescription: 'A circle looks simple, but it is mathematically deep.',
    fullExplanation: [
      'A circle may look like one of the simplest shapes, but it contains many important mathematical ideas. A circle is made of points that are all the same distance from the center. That distance is called the radius.',
      'The distance around the outside of a circle is called the circumference. This is similar to perimeter, but for a circle. Circles also connect to a famous number called pi.',
      'Circles appear everywhere: wheels, clocks, coins, plates, planets, bubbles, buttons, and many designs. A circle also has a special endless feeling. You can move around its edge forever and never find a corner or final stop.',
    ],
  },
  {
    id: 'read-twice',
    category: 'Problem Solving Tips',
    title: 'Read the Question Twice',
    shortDescription: 'Slow reading prevents fast mistakes.',
    fullExplanation: [
      'Before solving a math problem, read the question two times. The first reading helps you understand the story or situation. The second reading helps you find exactly what the problem is asking. Many mistakes happen not because the math is too difficult, but because the question was rushed.',
      'For example, a word problem might say that a dragon has 24 fire stones, gives 6 to a friend, and then finds 8 more. If you read too quickly, you might only notice 24 and 6, then subtract and stop. But the full problem also includes finding 8 more.',
      'On the second reading, look for the final question. Is it asking for the total, the difference, the missing number, the amount left, or the number of groups? Once you know what the question wants, choosing the correct operation becomes much easier.',
    ],
  },
  {
    id: 'key-numbers',
    category: 'Problem Solving Tips',
    title: 'Find the Key Numbers',
    shortDescription: 'Not every number in a problem matters.',
    fullExplanation: [
      'Some word problems include extra information. Not every number in the text is needed to solve the final question. Your job is to find the numbers that connect directly to what the problem asks.',
      'For example, a problem might say: "A dragon has 3 baskets. Each basket has 12 gems. The dragon is 7 years old. How many gems are there in total?" The number 7 is not needed. The useful numbers are 3 and 12, so the answer comes from 3 x 12 = 36.',
      'To find key numbers, look for clue words and the final question. If the problem asks about total cost, focus on prices and quantities. Extra details are just noise. Ignore the smoke, find the fire.',
    ],
  },
  {
    id: 'draw-it-out',
    category: 'Problem Solving Tips',
    title: 'Draw It Out',
    shortDescription: 'A quick sketch can make a hard problem easier.',
    fullExplanation: [
      'If a problem feels confusing, draw a simple picture, line, table, or diagram. You do not need to be good at art. The drawing only needs to help you understand what is happening.',
      'For example, if a problem says there are 4 groups of 6, you can draw 4 circles and place 6 dots in each one. Then it becomes easier to see that the total is 24. If a problem is about distance, draw a line and mark the starting point, ending point, and stops.',
      'Drawing is especially useful for word problems, fractions, geometry, and comparison questions. The goal is not to decorate the page. It is to turn words into something your eyes can understand.',
    ],
  },
  {
    id: 'estimate-first',
    category: 'Problem Solving Tips',
    title: 'Estimate Before Solving',
    shortDescription: 'Guess the rough answer first to catch mistakes.',
    fullExplanation: [
      'Before calculating the exact answer, make a quick estimate. An estimate is not a random guess. It is a rough answer that helps you understand what the final result should be close to.',
      'For example, 49 x 6 is close to 50 x 6, which equals 300. So the real answer should be close to 300. The exact answer is 294. If you calculate and get 2,940, you can immediately see that something went wrong.',
      'You can estimate by rounding numbers to friendly values like 10, 50, 100, or 1,000. After that, solve the problem exactly and compare. Estimate first, calculate second.',
    ],
  },
  {
    id: 'work-backward',
    category: 'Problem Solving Tips',
    title: 'Work Backward',
    shortDescription: 'Some problems are easier from the end.',
    fullExplanation: [
      'Some problems are easier to solve if you start from the final result and move backward. This is called working backward. It is especially useful when the problem tells you what happened at the end but asks for the starting number.',
      'To work backward, use opposite operations. Addition is reversed by subtraction. Subtraction is reversed by addition. Multiplication is reversed by division. Division is reversed by multiplication. If a number was doubled and became 18, work backward with 18 / 2 = 9.',
      'For multi-step problems, reverse each step in the opposite order. If a number was multiplied by 3, then 4 was added, and the result was 25, start with 25 - 4 = 21, then 21 / 3 = 7.',
    ],
  },
];

export function findWisdomTip(id: string) {
  return wisdomTips.find(tip => tip.id === id);
}
