const sortHeroes = require('../heroes');

test('sortHeroes sorts heroes by health in descending order', () => {
  const heroes = [
    { name: '������', health: 10 },
    { name: '���', health: 100 },
    { name: '������', health: 80 },
  ];

  const sortedHeroes = sortHeroes(heroes);

  const expectedSortedHeroes = [
    { name: '���', health: 100 },
    { name: '������', health: 80 },
    { name: '������', health: 10 },
  ];

  expect(sortedHeroes).toEqual(expectedSortedHeroes);
});

test('sortHeroes does not modify the original array', () => {
  const heroes = [
    { name: '������', health: 10 },
    { name: '���', health: 100 },
    { name: '������', health: 80 },
  ];

  const sortedHeroes = sortHeroes(heroes);

  expect(sortedHeroes).toEqual([
    { name: '���', health: 100 },
    { name: '������', health: 80 },
    { name: '������', health: 10 },
  ]);
});
