import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CAColors from '../res/CAColors';
import CAStrings from '../res/CAStrings';
import CAStyles from '../res/CAStyles';

const HomeScreen = () => {
   const [steps, setSteps] = useState(0)

    useEffect(() => {
       
    }, [])

    resetSteps = () => {
        setSteps(0)
    }

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

            <View style={{backgroundColor:CAColors.BLUE}}>
                <Text style={{color:CAColors.WHITE}}>?</Text>
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