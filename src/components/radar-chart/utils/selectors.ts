import { IChartData, IChartMaxima, IProcessedData } from './types';

// from victory native example
export const getMaxima = (data: IChartData[]): IChartMaxima => {
  const groupedData = Object.keys(data[0]).reduce((memo: object, key) => {
    memo[key] = data.map((d: object) => d[key]);
    return memo;
  }, {});
  const chartMaxima = Object.keys(groupedData).reduce((memo, key) => {
    memo[key] = Math.max(...groupedData[key]);
    return memo;
  }, {});

  return chartMaxima as IChartMaxima;
};

// from victory native example
export const processData = (data: IChartData[]): IProcessedData[][] => {
  const maxByGroup = getMaxima(data);
  const makeDataArray = (d: object) => Object.keys(d).map((key) => ({ x: key, y: d[key] / maxByGroup[key] }));
  const processedData = data.map((datum) => makeDataArray(datum));

  return processedData;
};
