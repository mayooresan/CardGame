import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions
} from 'react-native';
import CAStyles from '../res/CAStyles';

const CACard = (props ) => (
    <View style={[{ backgroundColor: '#f9c2ff', height:100, margin:8}, CAStyles.ALIGN_CENTER_ROW]} width={props.width}>
      <Text style={{ fontSize: 32 }}>{props.title}</Text>
    </View>
);

export default CACard