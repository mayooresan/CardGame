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

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '?',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '?',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '?',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '?',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '?',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '?',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '?',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '?',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '?',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '?',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '?',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '?',
      },

  ];
  
  const Item = (props ) => (
    <View style={[{ backgroundColor: '#f9c2ff', height:100, margin:8}, CAStyles.ALIGN_CENTER_ROW]} width={props.width}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );


const HomeScreen = () => {
   const [steps, setSteps] = useState(0)
   const screenWidth = Math.round(Dimensions.get('window').width) - 48;

    useEffect(() => {
       console.log(screenWidth)
    }, [])

    resetSteps = () => {
        setSteps(0)
    }

    const renderItem = ({ item }) => (
        <Item title={item.title} width={screenWidth/3}/>
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
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
            <Text>{CAStrings.TEST_STRING}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
      backgroundColor: CAColors.BG_WHITE,
      flex:1
    },item: {
        backgroundColor: '#f9c2ff',
        height:100,
        margin:8,
      },
      title: {
        fontSize: 32,
      },
});
  
export default HomeScreen