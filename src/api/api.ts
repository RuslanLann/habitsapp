import AsyncStorage from '@react-native-async-storage/async-storage';
import { DB_HABIT_GROUPS } from '../constants';

const habitGroups: HabitGroup[] = [
  {
    id: 0,
    groupName: 'Mental',
    data: [
      { id: 1, title: 'Meditation', score: 999, daysCompleted: ['03/01/2022', '04/01/2022', '06/01/2022'] },
      { id: 12, title: 'Problem Solving', score: 250, daysCompleted: ['06/01/2022'] },
    ],
    totalScore: 1249,
  },
  {
    id: 1,
    groupName: 'Physical',
    data: [{ id: 27, title: 'Gym', score: 333, daysCompleted: ['03/01/2022', '04/01/2022'] }],
    totalScore: 333,
  },
  {
    id: 2,
    groupName: 'Work',
    data: [{ id: 27, title: 'Current job tasks', score: 1000, daysCompleted: ['03/01/2022', '04/01/2022'] }],
    totalScore: 1000,
  },
  {
    id: 3,
    groupName: 'Side Projects',
    data: [{ id: 27, title: 'Habitsapp', score: 751, daysCompleted: ['03/01/2022', '04/01/2022'] }],
    totalScore: 751,
  },
  {
    id: 4,
    groupName: 'Music',
    data: [{ id: 27, title: 'Akai Pads practice', score: 430, daysCompleted: ['03/01/2022', '04/01/2022'] }],
    totalScore: 430,
  },
];

AsyncStorage.getItem(DB_HABIT_GROUPS).then((data) => {
  if (!data) {
    AsyncStorage.setItem(DB_HABIT_GROUPS, JSON.stringify(habitGroups));
  }
});

export const fetchHabits = (): Promise<HabitGroup[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      AsyncStorage.getItem(DB_HABIT_GROUPS).then((data) => {
        if (data) {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        }
      });
    }, 1000);
  });
