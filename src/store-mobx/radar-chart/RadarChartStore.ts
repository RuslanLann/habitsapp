import { makeAutoObservable } from 'mobx';

import { ChartMaxima, ProcessedData } from '../../components/radar-chart/utils/types';

export class RadarChartStore {
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

    this.habitList = this.habitList.map((habitGroup) => {
      if (habitGroup.groupName === groupName) {
        habitGroup.data = [...habitGroup.data, { id: Date.now(), title: newHabitTitle, score: 0, daysCompleted: [] }];
      }

      return habitGroup;
    });
  }
}
