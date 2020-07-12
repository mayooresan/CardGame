import React from 'react'
import { View, Text, Button } from 'react-native'
import CAStyles from '../res/CAStyles'
import CALinkButton from './CALinkButton'

export default function CAHeader(props) {
    return (
        <View style={CAStyles.ALIGN_CENTER_ROW}>
            <CALinkButton
                onPress={props.onPress}
                title="Reset" 
                style={{width:'20%'}}
            />
            <View style={{width:'60%'}}/>
            <View style={[CAStyles.ALIGN_CENTER_ROW, {width:'20%'}]}>
                <Text>STEPS:</Text>
                <Text>{props.steps}</Text>
            </View> 
        </View>
    )
}
