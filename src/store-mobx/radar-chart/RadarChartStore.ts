import { makeAutoObservable } from 'mobx';
import { fetchHabits } from '../../api';
import { getMaxima, processData } from '../../components/radar-chart/utils';

import { ChartMaxima, ProcessedData } from '../../components/radar-chart/utils/types';

class RadarChart {
  radarData: ProcessedData[][] = [];
  radarMaxima: ChartMaxima = {};
  habitList: HabitGroup[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRadarData(processedData: ProcessedData[][]) {
    this.radarData = processedData;
  }

  setRadarMaxima(radarMaxima: ChartMaxima) {
    this.radarMaxima = radarMaxima;
  }

  setHabitList(habitList: HabitGroup[]) {
    this.habitList = habitList;
  }

  addNewHabitToGroup(habitData: { groupName: string; newHabitTitle: string }) {
    const { groupName, newHabitTitle } = habitData;

    this.habitList = this.habitList?.map(habitGroup => {
      if (habitGroup.groupName === groupName) {
        habitGroup.data = [...habitGroup.data, { id: Date.now(), title: newHabitTitle, score: 0, daysCompleted: [] }];
      }

      return habitGroup;
    });
  }

  fetchHabitsAndSetChartData = async () => {
    try {
      const habits = await fetchHabits();

      if (habits) {
        this.setHabitList(habits);

        const chartMaxima = getMaxima(habits);
        const chartData = processData(chartMaxima);
        this.setRadarMaxima(chartMaxima);
        this.setRadarData(chartData);
      }
    } catch (error) {
      __DEV__ && console.log(error, 'ERROR in fetchHabitsAndSetChartData');
    }
  };
}

export const RadarChartStore = new RadarChart();
