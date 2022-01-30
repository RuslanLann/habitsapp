import React, { FC, useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, ActionSheet, TextField, Picker, Dialog, Button } from 'react-native-ui-lib';
import colorAlpha from 'color-alpha';

import { ScreenWrapper } from '../../uikit';

import { themeProvider } from '../../theme';
import { useToggle } from '../../hooks';
import { NEW_GROUP, NEW_HABIT, useScreenType } from './hooks';
import { borderRadius } from '../../theme/sizes';
import { RADAR_SCREEN } from '../../constants/screenNames';
import { RadarChartStore } from '../../store-mobx';

const { colors } = themeProvider;

// TODO: new component
const renderDialog = modalProps => {
  const { visible, children, toggleModal } = modalProps;

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

interface AddNewHabitScreenProps extends StackScreenProps<any> {}

export const AddNewHabitScreen: FC<AddNewHabitScreenProps> = ({ navigation }) => {
  const { habitList, addNewHabitToGroup } = RadarChartStore;

  const [isActionSheetVisible, showActionSheet, hideActionSheet] = useToggle();
  const { screenTitle, screenType, setScreenTypeHabit, setScreenTypeGroup } = useScreenType();

  const [habitName, setHabitName] = useState('');
  const [habitGroupName, setHabitGroupName] = useState('');

  const addHabitToGroup = () => {
    addNewHabitToGroup({ newHabitTitle: habitName, groupName: habitGroupName });
    navigation.navigate(RADAR_SCREEN);
  };

  const onPickerChange = useCallback(
    data => {
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
            {/* // TODO: new Picker component */}
            <Picker
              placeholder="Select Habit Group"
              value={habitGroupName}
              onChange={onPickerChange}
              topBarProps={{ title: 'Habit Groups' }}
              underlineColor={habitGroupName ? colors.notification : colors.border}
              renderCustomModal={renderDialog}
              style={styles.pickerLabel}
            >
              {habitList.map(habitGroup => (
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
        {/* // TODO: NewGroup component */}
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
      <Button
        style={styles.button}
        label="Save"
        onPress={addHabitToGroup}
        backgroundColor={colors.primary}
        disabled={!habitName || !habitGroupName}
        disabledBackgroundColor={colorAlpha(colors.border, 0.2)}
        animateLayout
      />
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
