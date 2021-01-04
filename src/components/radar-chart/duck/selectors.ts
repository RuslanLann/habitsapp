import { IChartData, IChartMaxima } from '../../../types/chartData';

// from victory native example
const getMaxima = (data: IChartData[]): IChartMaxima => {
  const groupedData = Object.keys(data[0]).reduce((memo: object, key) => {
    memo[key] = data.map((d: object) => d[key]);
    return memo;
  }, {});
  return Object.keys(groupedData).reduce((memo, key) => {
    memo[key] = Math.max(...groupedData[key]);
    return memo;
  }, {});
};

// from victory native example
const processData = (data: IChartData[]) => {
  const maxByGroup = getMaxima(data);
  const makeDataArray = (d: object) => Object.keys(d).map((key) => ({ x: key, y: d[key] / maxByGroup[key] }));
  return data.map((datum) => makeDataArray(datum));
};

export default {
  getMaxima,
  processData,
};
