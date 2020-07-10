import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CAColors from '../res/CAColors';
import CAStrings from '../res/CAStrings';

const HomeScreen = () => {

    useEffect(() => {
       
    }, [])

    return(
        <SafeAreaView style={styles.parentContainer}>
            <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <Button title="Reset" style={{width:'20%'}}/>
                <View style={{width:'60%'}}/>
                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row', width:'20%'}}>
                    <Text>STEPS:</Text>
                    <Text>0</Text>
                </View> 
            </View>
            <Text>{CAStrings.TEST_STRING}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
      backgroundColor: CAColors.BG_WHITE,
      flex:1
    },
});
  
export default HomeScreen