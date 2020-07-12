import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CAStyles from '../res/CAStyles';
import CALinkButton from './CALinkButton';

export default function CAHeader(props) {
  return (
    <View style={CAStyles.ALIGN_CENTER_ROW}>
      <CALinkButton
        onPress={props.onPress}
        title="Reset"
        style={styles.buttonStyle}
      />
      <View style={styles.fillerViewStyle} />
      <View style={[CAStyles.ALIGN_CENTER_ROW, styles.buttonStyle]}>
        <Text>STEPS:</Text>
        <Text>{props.steps}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '20%',
  },
  fillerViewStyle: {
    width: '60%',
  },
});
