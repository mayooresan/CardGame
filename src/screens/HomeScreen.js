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
import CAColors from '../res/CAColors';
import CAStrings from '../res/CAStrings';
import CAStyles from '../res/CAStyles';
import CACard from '../components/CACard'
import { shuffle } from '../Utils/SupportFun';

const HomeScreen = () => {
   const [steps, setSteps] = useState(0)
   const screenWidth = Math.round(Dimensions.get('window').width) - 48;
   const screenHeight = Math.round(Dimensions.get('window').height) - 160;

   const CARD_PAIRS_VALUE = [1,2,3,4,5,6]
   const [cardNumbers, setCardNumbers] = useState([])

    useEffect(() => {
        shuffleCards()
    }, [])

    useEffect(() => {
     console.log("useEffect", cardNumbers)
    }, [cardNumbers])

    shuffleCards = () => {
      let mergedArray = CARD_PAIRS_VALUE.concat(CARD_PAIRS_VALUE)
      let shuffledArray = shuffle(mergedArray)
      setupData(shuffledArray)
    }

    setupData = (shuffledArray) => {
      let dataArray = []
      shuffledArray.map((number, index)=>{
        let data = {
          value: number,
          id:index,
          flipped:false,
          matched:false,
        }
        dataArray.push(data)
      })
      
      setCardNumbers(dataArray)
    }

    resetSteps = () => {
        setSteps(0)
        //reset cards
        shuffleCards()
    }

    cardTouched = async(item) => {
      //flip logic
      let newItem = item
      newItem.flipped = true
      let newArray = [...cardNumbers]
      newArray[item.id] = newItem
      setCardNumbers(newArray)

      //count logic
      setSteps(steps + 1)
    }

    const renderItem = ({ item }) => (
        <CACard title={item.value} 
                width={screenWidth/3} 
                height={screenHeight/4} 
                flipped={item.flipped}
                cardTouched={()=>{cardTouched(item)}}/>
    );

    return(
        <SafeAreaView style={styles.parentContainer}>
            <View style={CAStyles.ALIGN_CENTER_ROW}>
                <Button title="Reset" 
                        style={{width:'20%'}}
                        onPress={resetSteps}
                    />
                <View style={{width:'60%'}}/>
                <View style={[CAStyles.ALIGN_CENTER_ROW, {width:'20%'}]}>
                    <Text>STEPS:</Text>
                    <Text>{steps}</Text>
                </View> 
            </View>

            <FlatList
                data={cardNumbers}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
      backgroundColor: CAColors.BG_WHITE,
      flex:1
    }
});
  
export default HomeScreen