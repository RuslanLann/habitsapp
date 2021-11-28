import { ChartData, ChartMaxima, ProcessedData } from './types';

// from victory native example
export const getMaxima = (data: ChartData[]): ChartMaxima => {
  const groupedData = Object.keys(data[0]).reduce((memo: object, key) => {
    memo[key] = data.map((d: object) => d[key]);
    return memo;
  }, {});
  const chartMaxima = Object.keys(groupedData).reduce((memo, key) => {
    memo[key] = Math.max(...groupedData[key]);
    return memo;
  }, {});

  return chartMaxima as ChartMaxima;
};

// from victory native example
export const processData = (data: ChartData[]): ProcessedData[][] => {
  const maxByGroup = getMaxima(data);
  const makeDataArray = (d: object) => Object.keys(d).map((key) => ({ x: key, y: d[key] / maxByGroup[key] }));
  const processedData = data.map((datum) => makeDataArray(datum));

  return processedData;
};
