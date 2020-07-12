import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
  Alert
} from 'react-native';
import CAColors from '../res/CAColors';
import CAStrings from '../res/CAStrings';
import CACard from '../components/CACard'
import { shuffle, createArrayOfNumbers, mergeTwoArrays, checkWhetherAllCardsMatched } from '../Utils/SupportFun';
import CAHeader from '../components/CAHeader';

const HomeScreen = () => {
  //this will be used to decide the hard height / width based on screen size
   const screenWidth = Math.round(Dimensions.get('window').width) - 48;
   const screenHeight = Math.round(Dimensions.get('window').height) - 160;

   //unique number array
   const CARD_PAIRS_VALUE = createArrayOfNumbers()
   //unique number array duplicated and shuffled here
   const [cardNumbers, setCardNumbers] = useState([])
   //number of steps
   const [steps, setSteps] = useState(0)
   //number of cards flipped at a given time
   const [flipCount, setFlipCount] = useState(0)
   //details of the cards that are flipped
   const [firstFlippedCard, setFirstFlippedCard] = useState(null)
   const [secondFlippedCard, setSecondFlippedCard] = useState(null)


    useEffect(() => {
        shuffleCards()
    }, [])

    useEffect(() => {
     if(flipCount > 1) {
        checkMatchedCards()
     }
    }, [flipCount])

    shuffleCards = () => {
      let mergedArray = mergeTwoArrays(CARD_PAIRS_VALUE, CARD_PAIRS_VALUE)
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
        }
        dataArray.push(data)
      })
      
      setCardNumbers(dataArray)
    }

    resetSteps = () => {
        //reset count
        setSteps(0)
        //reset cards
        shuffleCards()
        //reset flip count
        setFlipCount(0)
    }

    checkMatchedCards = () => {
      if (firstFlippedCard.value === secondFlippedCard.value) {
        setFlipCount(0)
        //check whether all matched
        if (checkWhetherAllCardsMatched(cardNumbers)) {
          Alert.alert(
            "WON",
            `${CAStrings.CONGRATULATION_TEXT} ${steps} ${CAStrings.STEPS}`,
            [
              {
                text: "Play Again",
                onPress: () => resetSteps()
              }
            ],
            { cancelable: false }
          );
        }
      } else {
        //flip back timer
        setTimeout(() => {
          flipCardsAsNotMatched()
        }, 1000);
      }
    }

    flipCardsAsNotMatched = () => {
      let newArray = [...cardNumbers]
      newArray.map((cardItem)=>{
        if (firstFlippedCard.id === cardItem.id || secondFlippedCard.id === cardItem.id) {
          cardItem.flipped = false
        }
        
      })

      setCardNumbers(newArray)
      setFlipCount(0)
    }

    // checkWhetherAllCardsMatched = () => {
    //   let isAllMatched = true
    //   cardNumbers.map((cardItem)=>{
    //     if(cardItem.flipped === false) {
    //       isAllMatched = false
    //     }
    //   })

    //   return isAllMatched
    // }

    cardTouched = async(item) => {
      if(flipCount > 1) {
        return
      }

      //flip logic
      let newItem = item
      newItem.flipped = true
      let newArray = [...cardNumbers]
      newArray[item.id] = newItem
      setCardNumbers(newArray)

      //count logic
      setSteps(steps + 1)

      //match logic
      setFlipCount(flipCount + 1)
      if (flipCount == 0) {
        setFirstFlippedCard(newItem)
      }

      if (flipCount === 1) {
        setSecondFlippedCard(newItem)
      }


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
           <CAHeader steps={steps} onPress={resetSteps}/>

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