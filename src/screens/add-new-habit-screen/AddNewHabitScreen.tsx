import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, ActionSheet, TextField } from 'react-native-ui-lib';

import { ScreenWrapper } from '../../uikit';

import { themeProvider } from '../../theme';
import { useToggle } from '../../hooks';
import { NEW_GROUP, NEW_HABIT, useScreenType } from './utils';

export const AddNewHabitScreen = () => {
  const [isActionSheetVisible, showActionSheet, hideActionSheet] = useToggle();
  const { screenTitle, screenType, setScreenTypeHabit, setScreenTypeGroup } = useScreenType();

  useEffect(() => {
    !isActionSheetVisible && showActionSheet();
  }, []);

  return (
    <ScreenWrapper>
      <ScrollView keyboardDismissMode="interactive">
        <Text color={themeProvider.colors.text} text50L center>
          {screenTitle}
        </Text>
        {screenType === NEW_HABIT && (
          <TextField
            placeholder="Enter Habit Title"
            floatingPlaceholder
            floatOnFocus
            labelColor={themeProvider.colors.notification}
            floatingPlaceholderColor={{
              focus: themeProvider.colors.notification,
              default: themeProvider.colors.border,
            }}
            underlineColor={{
              focus: themeProvider.colors.notification,
              default: themeProvider.colors.border,
            }}
            text70
            marginB-s4
          />
        )}
        {screenType === NEW_GROUP && (
          <>
            <TextField
              placeholder="Enter Habit Group Title"
              floatingPlaceholder
              floatOnFocus
              floatingPlaceholderColor={{
                focus: themeProvider.colors.turq,
                default: themeProvider.colors.border,
              }}
              underlineColor={{
                focus: themeProvider.colors.turq,
                default: themeProvider.colors.border,
              }}
              text70
              marginB-s4
            />
            <TextField
              placeholder="Enter Habit Title"
              floatingPlaceholder
              floatOnFocus
              floatingPlaceholderColor={{
                focus: themeProvider.colors.turq,
                default: themeProvider.colors.border,
              }}
              underlineColor={{
                focus: themeProvider.colors.turq,
                default: themeProvider.colors.border,
              }}
              text70
              marginB-s4
            />
          </>
        )}
      </ScrollView>
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
  newHabitInput: {
    borderColor: themeProvider.colors.notification,
    borderBottomWidth: 1,
  },
});
