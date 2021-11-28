export interface ChartData extends Record<string, number> {}

export interface ChartMaxima extends Record<string, number> {}

export interface ProcessedData {
  x: string;
  y: number;
}
