import { ChartMaxima, ProcessedData } from '../../../components/radar-chart/utils/types';

interface RadarState {
  radarData: ProcessedData[][];
  radarMaxima: ChartMaxima;
  habitList: HabitGroup[];
}
