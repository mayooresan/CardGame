import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CAStyles from '../res/CAStyles';

const CACard = (props ) => (
    <View style={[{ backgroundColor: '#f9c2ff', margin:8}, CAStyles.ALIGN_CENTER]} width={props.width} height={props.height}>
      <Text style={{ fontSize: 32 }}>{props.title}</Text>
    </View>
);

export default CACard