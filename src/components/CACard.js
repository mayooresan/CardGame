import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CAStyles from '../res/CAStyles';

const CACard = (props ) => (
    <TouchableOpacity>
        <View style={[styles.cardContainer, CAStyles.ALIGN_CENTER]} width={props.width} height={props.height}>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    </TouchableOpacity>
    
);

const styles = StyleSheet.create({
  cardContainer: { 
    backgroundColor: '#f9c2ff', 
    margin:8
  }, textStyle: {
    fontSize: 32
  }
});

export default CACard