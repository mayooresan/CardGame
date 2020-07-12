import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CAStyles from '../res/CAStyles';
import CAImages from '../res/CAImages';
import CAColors from '../res/CAColors';

const CACard = (props) => {
  return (
    <TouchableOpacity onPress={props.cardTouched}>
      <View
        style={[styles.cardContainer, CAStyles.ALIGN_CENTER]}
        width={props.width}
        height={props.height}>
        {props.flipped ? (
          <Text style={styles.textStyle}>{props.title}</Text>
        ) : (
          <Image
            style={styles.imageStyle}
            source={CAImages.BACKGROUND_CARD}
            width={props.width}
            height={props.height}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
    backgroundColor: CAColors.WHITE,
  },
  textStyle: {
    fontSize: 32,
  },
  imageStyle: {resizeMode: 'stretch'},
});

export default CACard;
