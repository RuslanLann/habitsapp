interface Habit {
  id: number;
  title: string;
  totalScore: number;
  daysCompleted: string[];
}

interface HabitGroup {
  id: number;
  groupName: string;
  data: Habit[];
}
