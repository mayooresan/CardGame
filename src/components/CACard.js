import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import CAStyles from '../res/CAStyles';
import CAImages from '../res/CAImages';

const CACard = (props ) => {
  const [flipped, setFlipped] = useState(false)

  getBackgroundColor = () => {
   return flipped ? '#fff' : '#fff'
  }

  flipCard = () => {
    setFlipped(!flipped)
    props.cardTouched()
  }

  return (
    <TouchableOpacity onPress={flipCard}>
        <View style={[styles.cardContainer, CAStyles.ALIGN_CENTER]} width={props.width} height={props.height} backgroundColor={getBackgroundColor()}>
          
          {
            flipped ? (
              <Text style={styles.textStyle}>{props.title}</Text>
            ) : (
              <Image
                  style={[{resizeMode: 'stretch'}]}
                  source={CAImages.BACKGROUND_CARD}
                  width={props.width}
                  height={props.height}
              />
              
            )
          }

        </View>
    </TouchableOpacity>
  )
    
};

const styles = StyleSheet.create({
  cardContainer: { 
    margin:8
  }, textStyle: {
    fontSize: 32
  }
});

export default CACard