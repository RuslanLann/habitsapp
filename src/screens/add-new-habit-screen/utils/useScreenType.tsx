import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export const NEW_HABIT = 'newHabit';
export const NEW_GROUP = 'newGroup';

const SINGLE_HABIT_TITLE = 'New Habit';
const GROUP_TITLE = 'New Group';

export const useScreenType = (defaultType = NEW_HABIT) => {
  const [screenType, setScreenType] = useState(defaultType);
  const [screenTitle, setScreenTitle] = useState('');

  const setScreenTypeHabit = useCallback(() => {
    setScreenType(NEW_HABIT);
  }, [setScreenType]);

  const setScreenTypeGroup = useCallback(() => {
    setScreenType(NEW_GROUP);
  }, [setScreenType]);

  useEffect(() => {
    if (screenType === NEW_HABIT) {
      setScreenTitle(SINGLE_HABIT_TITLE);
    } else {
      setScreenTitle(GROUP_TITLE);
    }
  }, [screenType]);

  return {
    screenType,
    setScreenTypeHabit,
    setScreenTypeGroup,
    screenTitle,
  };
};
