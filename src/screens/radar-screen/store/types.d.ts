import FeatureListItem from '../../../components/feature-list-item/FeatureListItem';
import { ChartMaxima, ProcessedData } from '../../../components/radar-chart/utils/types';

interface RadarState {
  radarData: ProcessedData[][];
  radarMaxima: ChartMaxima;
  featureList: FeatureListItem[];
}
