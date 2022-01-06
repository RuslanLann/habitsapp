import React, { FC, ReactElement, useCallback, useEffect } from 'react';
import { StyleSheet, SectionList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated from 'react-native-reanimated';

import FeatureListHeader from '../feature-list-header/FeatureListHeader';
import FeatureListItem from '../feature-list-item/FeatureListItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { radarSlice } from '../../screens/radar-screen/store';
import { screenHeight } from '../../theme/sizes';
import { fetchFeatureListData } from '../../api/rest';

const RADAR_CARD_HEIGHT = screenHeight / 2.5;

interface FeatureList {
  onScroll:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | Animated.Node<((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined>
    | undefined;
}

const FeatureList: FC<FeatureList> = ({ onScroll }): ReactElement => {
  const dispatch = useDispatch();
  const setFeatureList = (data: FeatureListItem[]) => dispatch(radarSlice.actions.setFeatureList(data));

  const featureList = useSelector((state: RootState) => state.radar.featureList);

  const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

  useEffect(() => {
    fetchFeatureListData().then((data) => {
      setFeatureList(data);
    });
  }, []);

  const renderSectionHeader = useCallback(({ section: { title } }) => <FeatureListHeader title={title} />, []);

  return (
    <AnimatedSectionList
      contentContainerStyle={styles.contentContainerStyle}
      sections={featureList}
      renderSectionHeader={renderSectionHeader}
      renderItem={({ item, index }) => {
        const itemKeyValue = Object.keys(item);

        return <FeatureListItem title={itemKeyValue[1]} index={index} />;
      }}
      keyExtractor={(item: FeatureListItem) => `${item.title}`} // TODO: добавить id
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: RADAR_CARD_HEIGHT * 0.4,
    paddingTop: RADAR_CARD_HEIGHT - RADAR_CARD_HEIGHT * 0.4,
    paddingBottom: RADAR_CARD_HEIGHT / 2 + 15,
  },
});

export default FeatureList;
