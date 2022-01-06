const habitsGroups: HabitGroup[] = [
  {
    id: 0,
    groupName: 'Mental',
    data: [
      { id: 1, title: 'Meditation', totalScore: 999, daysCompleted: ['03/01/2022', '04/01/2022', '06/01/2022'] },
      { id: 12, title: 'Problem Solving', totalScore: 250, daysCompleted: ['06/01/2022'] },
    ],
  },
  {
    id: 1,
    groupName: 'Strength',
    data: [{ id: 27, title: 'Gym', totalScore: 333, daysCompleted: ['03/01/2022', '04/01/2022'] }],
  },
];

export const fetchHabits = (): Promise<HabitGroup[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(habitsGroups);
    }, 1000);
  });
