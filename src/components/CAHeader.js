import React from 'react'
import { View, Text, Button } from 'react-native'
import CAStyles from '../res/CAStyles'

export default function CAHeader(props) {
    return (
        <View style={CAStyles.ALIGN_CENTER_ROW}>
            <Button title="Reset" 
                    style={{width:'20%'}}
                    onPress={props.onPress}
                />
            <View style={{width:'60%'}}/>
            <View style={[CAStyles.ALIGN_CENTER_ROW, {width:'20%'}]}>
                <Text>STEPS:</Text>
                <Text>{props.steps}</Text>
            </View> 
        </View>
    )
}
