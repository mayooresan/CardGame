import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import CAColors from '../res/CAColors';

const CALinkButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {color: CAColors.LINK_COLOR, fontSize: 20},
});

export default CALinkButton;
