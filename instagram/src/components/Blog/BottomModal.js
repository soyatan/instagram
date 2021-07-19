import React, {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const BottomModal = ({isModalShown, setisModalShown}) => {
  //const [shown, setshown] = useState(false);
  console.log(isModalShown);
  useEffect(() => {
    if (isModalShown) {
      handlePresentModalPress();
    }
  }, [isModalShown]);

  // ref
  const bottomSheetModalRef = useRef(BottomSheetModal);
  // variables
  const snapPoints = useMemo(() => ['25%', '35%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      setisModalShown(false);
    }
  }, []);
  /*    <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />*/
  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.contentelement}>
              <Text>Report... </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentelement}>
              <Text>Turn on Post Notifications </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentelement}>
              <Text>Share to... </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentelement}>
              <Text>Unfollow </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',

    //padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  contentelement: {alignItems: 'flex-start', paddingVertical: 10},
});

export default BottomModal;
