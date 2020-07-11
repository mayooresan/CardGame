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

        let mergedArray = CARD_PAIRS_VALUE.concat(CARD_PAIRS_VALUE)
        console.log(mergedArray)
        let shuffledArray = shuffle(mergedArray)
        console.log(shuffledArray)
        setupData(shuffledArray)
    }, [])

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
      // alert(cardNumbers.length)
      // console.log(dataArray)
    }

    resetSteps = () => {
        setSteps(0)
    }

    cardTouched = (item) => {
        alert(item.title)
    }

    const renderItem = ({ item }) => (
        <CACard title={item.value} 
                width={screenWidth/3} 
                height={screenHeight/4} 
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