import React from 'react';
import renderer from 'react-test-renderer';

import { themeProvider } from '../../theme';
import RadarChart from './RadarChart';

test('renders correctly', () => {
  const radarChart = (
    <RadarChart
      chartData={[
        [
          {
            x: 'strength',
            y: 1,
          },
          {
            x: 'intelligence',
            y: 0.75,
          },
          {
            x: 'luck',
            y: 1,
          },
          {
            x: 'stealth',
            y: 0.75,
          },
          {
            x: 'charisma',
            y: 1,
          },
        ],
      ]}
      chartMaxima={{
        strength: 5,
        intelligence: 300,
        luck: 3,
        stealth: 80,
        charisma: 120,
      }}
      colors={{
        primary: themeProvider.colors.primary,
        notification: themeProvider.colors.notification,
        text: themeProvider.colors.text,
        additional: themeProvider.colors.turq,
      }}
    />
  );
  const tree = renderer.create(radarChart).toJSON();

  expect(tree).toMatchSnapshot();
});

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});
