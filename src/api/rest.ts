import FeatureListItem from '../components/feature-list-item/FeatureListItem';

export interface CharacterData {
  strength: number;
  intelligence: number;
  luck: number;
  stealth: number;
  charisma: number;
}

const characterData: CharacterData[] = [
  { strength: 1, intelligence: 250, luck: 1, stealth: 40, charisma: 50 },
  { strength: 2, intelligence: 300, luck: 2, stealth: 80, charisma: 90 },
  { strength: 5, intelligence: 225, luck: 3, stealth: 60, charisma: 120 },
];

const fetchFeatureListData1 = [
  { title: 'Intelligence', data: characterData },
  { title: 'Strength', data: characterData },
  { title: 'Charisma', data: characterData },
  { title: 'Stealth', data: characterData },
  { title: 'Luck', data: characterData },
];

export const fetchChartData = (): Promise<CharacterData[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(characterData);
    }, 100);
  });

export const fetchFeatureListData = (): Promise<FeatureListItem[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchFeatureListData1);
    }, 1000);
  });
