import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, ActionSheet } from 'react-native-ui-lib';

import { ScreenWrapper } from '../../uikit';

import { themeProvider } from '../../theme';
import { useToggle } from '../../hooks';
import { useScreenType } from './utils';

export const AddNewHabitScreen = () => {
  const [isActionSheetVisible, showActionSheet, hideActionSheet] = useToggle();
  const { screenTitle, setScreenTypeHabit, setScreenTypeGroup } = useScreenType();

  useEffect(() => {
    !isActionSheetVisible && showActionSheet();
  }, []);

  return (
    <ScreenWrapper>
      <Text color={themeProvider.colors.text} text50L center>
        {screenTitle}
      </Text>
      <ActionSheet
        cancelButtonIndex={2}
        options={[
          { label: 'Add New Habit', onPress: setScreenTypeHabit },
          { label: 'Add New Habit Group', onPress: setScreenTypeGroup },
          { label: 'Cancel', onPress: hideActionSheet },
        ]}
        visible={isActionSheetVisible}
        onDismiss={hideActionSheet}
        useNativeIOS
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {},
});
