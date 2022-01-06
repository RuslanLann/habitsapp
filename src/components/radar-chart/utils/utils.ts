import { ChartMaxima, ProcessedData } from './types';

const MAX_SCORE = 2000;

export const getMaxima = (data): ChartMaxima => {
  const groupedData = data.reduce((memo: object, element) => {
    memo[element.groupName] = element.totalScore;
    return memo;
  }, {});

  return groupedData as ChartMaxima;
};

export const processData = (data): ProcessedData[][] => {
  const processedData = Object.keys(data).map((key) => ({ x: key, y: data[key] / MAX_SCORE }));

  return [processedData];
};
