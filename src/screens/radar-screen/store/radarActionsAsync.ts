import { radarSlice } from './radarReducer';
import { fetchHabits } from '../../../api';
import { getMaxima, processData } from '../../../components/radar-chart/utils';

const oldData = [
  // { strength: 1, intelligence: 250, luck: 1, stealth: 40, charisma: 50 },
  { strength: 1, intelligence: 250, luck: 1, stealth: 40, charisma: 50 },
  { strength: 2, intelligence: 300, luck: 2, stealth: 80, charisma: 90 },
  { strength: 5, intelligence: 225, luck: 3, stealth: 60, charisma: 120 },
];

export const fetchHabitsAndSetChartData = () => async (dispatch) => {
  try {
    const habits = await fetchHabits();

    if (habits) {
      dispatch(radarSlice.actions.setHabitList(habits));

      const chartMaxima = getMaxima(habits);
      const chartData = processData(chartMaxima);
      dispatch(radarSlice.actions.setRadarMaxima(chartMaxima));
      dispatch(radarSlice.actions.setRadarData(chartData));
    }
  } catch (e) {
    __DEV__ && console.log(e, 'ERROR in fetchHabits');
  }
};
