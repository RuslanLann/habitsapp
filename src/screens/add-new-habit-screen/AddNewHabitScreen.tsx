import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, ActionSheet, TextField, Picker, Dialog, Button } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import colorAlpha from 'color-alpha';

import { ButtonWithText, ScreenWrapper } from '../../uikit';

import { themeProvider } from '../../theme';
import { useToggle } from '../../hooks';
import { NEW_GROUP, NEW_HABIT, useScreenType } from './utils';
import { RootState } from '../../store/configureStore';
import { radarSlice } from '../radar-screen/store';
import { borderRadius } from '../../theme/sizes';

const { colors } = themeProvider;

const renderDialog = (modalProps) => {
  const { visible, children, toggleModal, onDone } = modalProps;

  return (
    <Dialog
      containerStyle={{ paddingBottom: 15, paddingTop: 30, backgroundColor: colors.background }}
      visible={visible}
      onDismiss={toggleModal}
      width="100%"
      height="45%"
      bottom
      overlayBackgroundColor={colorAlpha(colors.primary, 0.2)}
    >
      <ScrollView>{children}</ScrollView>
    </Dialog>
  );
};

export const AddNewHabitScreen = () => {
  const [isActionSheetVisible, showActionSheet, hideActionSheet] = useToggle();
  const { screenTitle, screenType, setScreenTypeHabit, setScreenTypeGroup } = useScreenType();

  const [habitName, setHabitName] = useState('');
  const [habitGroupName, setHabitGroupName] = useState('');

  const habitList = useSelector((state: RootState) => state.radar.habitList);

  const dispatch = useDispatch();
  const addNewHabitToGroup = () =>
    dispatch(radarSlice.actions.addNewHabitToGroup({ newHabitTitle: habitName, groupName: habitGroupName }));

  const actionSheetOptions = useMemo(
    () => [
      { label: 'Add New Habit', onPress: setScreenTypeHabit },
      { label: 'Add New Habit Group', onPress: setScreenTypeGroup },
      { label: 'Cancel', onPress: hideActionSheet },
    ],
    [setScreenTypeHabit, setScreenTypeGroup, hideActionSheet],
  );

  const onPickerChange = useCallback(
    (data) => {
      console.log(data.value, 'v <<<<<<<<<<<');
      setHabitGroupName(data.value);
    },
    [setHabitGroupName],
  );

  useEffect(() => {
    !isActionSheetVisible && showActionSheet();
  }, []);

  return (
    <ScreenWrapper>
      <ScrollView keyboardDismissMode="interactive">
        <Text color={colors.text} text50L center marginB-30>
          {screenTitle}
        </Text>
        {screenType === NEW_HABIT && (
          <>
            <TextField
              style={styles.textField}
              placeholder="Enter Habit Title"
              labelColor={colors.notification}
              value={habitName}
              onChangeText={setHabitName}
              underlineColor={{
                focus: colors.notification,
                default: habitName ? colors.notification : colors.border,
              }}
              text70
              marginB-s4
            />
            <Picker
              placeholder="Select Habit Group"
              value={habitGroupName}
              onChange={onPickerChange}
              topBarProps={{ title: 'Habit Groups' }}
              underlineColor={habitGroupName ? colors.notification : colors.border}
              renderCustomModal={renderDialog}
              style={styles.pickerLabel}
            >
              {habitList.map((habitGroup) => (
                <Picker.Item
                  key={habitGroup.id}
                  value={habitGroup.groupName}
                  label={habitGroup.groupName}
                  // @ts-ignore
                  labelStyle={styles.pickerLabel}
                />
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
      {/* <ButtonWithText title="Save" isLoading={false} onPress={addNewHabitToGroup} type="filled" disa /> */}
      <Button
        style={styles.button}
        label="Save"
        onPress={addNewHabitToGroup}
        backgroundColor={colors.primary}
        disabled={!habitName || !habitGroupName}
        disabledBackgroundColor={colorAlpha(colors.border, 0.2)}
        animateLayout
      />
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
  pickerLabel: {
    color: colors.text,
  },
  button: {
    borderRadius,
  },
});
