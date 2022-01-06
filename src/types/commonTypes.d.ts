interface Habit {
  id: number;
  title: string;
  score: number;
  daysCompleted: string[];
}

interface HabitGroup {
  id: number;
  groupName: string;
  data: Habit[];
  totalScore: number;
}
