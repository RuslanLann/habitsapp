import { ChartMaxima, ProcessedData } from '../../../components/radar-chart/utils/types';

export interface RadarState {
  radarData: ProcessedData[][];
  radarMaxima: ChartMaxima;
  habitList: HabitGroup[];
}
