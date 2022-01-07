import React, { useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, ActionSheet, TextField, Picker } from 'react-native-ui-lib';
import { useSelector } from 'react-redux';

import { ButtonWithText, ScreenWrapper } from '../../uikit';

import { themeProvider } from '../../theme';
import { useToggle } from '../../hooks';
import { NEW_GROUP, NEW_HABIT, useScreenType } from './utils';
import { RootState } from '../../store/configureStore';

const { colors } = themeProvider;

export const AddNewHabitScreen = () => {
  const habitList = useSelector((state: RootState) => state.radar.habitList);

  const [isActionSheetVisible, showActionSheet, hideActionSheet] = useToggle();
  const { screenTitle, screenType, setScreenTypeHabit, setScreenTypeGroup } = useScreenType();

  const actionSheetOptions = useMemo(
    () => [
      { label: 'Add New Habit', onPress: setScreenTypeHabit },
      { label: 'Add New Habit Group', onPress: setScreenTypeGroup },
      { label: 'Cancel', onPress: hideActionSheet },
    ],
    [setScreenTypeHabit, setScreenTypeGroup, hideActionSheet],
  );

  // useEffect(() => {
  //   !isActionSheetVisible && showActionSheet();
  // }, []);

  return (
    <ScreenWrapper>
      <ScrollView keyboardDismissMode="interactive">
        <Text color={colors.text} text50L center>
          {screenTitle}
        </Text>
        {screenType === NEW_HABIT && (
          <>
            <TextField
              style={styles.textField}
              placeholder="Enter Habit Title"
              floatingPlaceholder
              floatOnFocus
              labelColor={colors.notification}
              floatingPlaceholderColor={{
                focus: colors.notification,
                default: colors.border,
              }}
              underlineColor={{
                focus: colors.notification,
                default: colors.border,
              }}
              text70
              marginB-s4
            />
            <Picker
              placeholder="Select Habit Group"
              value={''}
              onChange={(value) => {}}
              topBarProps={{ title: 'Habit Groups' }}
              searchStyle={{ color: colors.notification, placeholderTextColor: colors.border }}
              underlineColor={colors.border}
              useNativePicker
            >
              {habitList.map((habitGroup) => (
                <Picker.Item key={habitGroup.id} value={habitGroup.id} label={habitGroup.groupName} />
              ))}
            </Picker>
          </>
        )}
        {screenType === NEW_GROUP && (
          <>
            <TextField
              placeholder="Enter Habit Group Title"
              floatingPlaceholder
              floatOnFocus
              floatingPlaceholderColor={{
                focus: colors.turq,
                default: colors.border,
              }}
              underlineColor={{
                focus: colors.turq,
                default: colors.border,
              }}
              text70
              marginB-s4
            />
            <TextField
              placeholder="Enter Habit Title"
              floatingPlaceholder
              floatOnFocus
              floatingPlaceholderColor={{
                focus: colors.turq,
                default: colors.border,
              }}
              underlineColor={{
                focus: colors.turq,
                default: colors.border,
              }}
              text70
              marginB-s4
            />
          </>
        )}
      </ScrollView>
      <ButtonWithText title="Save" isLoading={false} onPress={() => {}} type="filled" />
      <ActionSheet
        cancelButtonIndex={2}
        options={actionSheetOptions}
        visible={isActionSheetVisible}
        onDismiss={hideActionSheet}
        useNativeIOS
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  textField: {
    color: colors.text,
  },
});
