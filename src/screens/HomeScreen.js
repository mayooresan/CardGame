import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import CAColors from '../res/CAColors';
import CAStrings from '../res/CAStrings';

const HomeScreen = () => {

    useEffect(() => {
       
    }, [])

    return(
        <SafeAreaView>
            <Text>{CAStrings.TEST_STRING}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: CAColors.BG_WHITE,
    },
});
  
export default HomeScreen