import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Grid} from './Grid';
import styles from './styles';

export const CameraGrid = () => {
  return (
    <View style={styles.cameragridcontainer}>
      <View style={styles.firstcameragrid}></View>
      <View style={styles.secondcameragrid}>
        <Grid />
        <Grid />
        <Grid />
      </View>
      <View style={styles.secondcameragrid}>
        <Grid />
        <Grid />
        <Grid />
      </View>
      <View style={styles.secondcameragrid}>
        <Grid />
        <Grid />
        <Grid />
      </View>

      <View style={styles.thirdcameragrid}></View>
    </View>
  );
};
