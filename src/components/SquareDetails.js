import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const SquareDetails = (props) => {

    let isDisableIncreas = (props.colorValue>254) ? true : false;
    let isDisableDecreas = (props.colorValue<1) ? true : false;
    return(

        <View>
            <Text>{props.title}</Text>
            <Button disabled={isDisableIncreas} title="+" onPress={props.onIncreas}/>
            <Button disabled={isDisableDecreas} title="-" onPress={props.onDecreas}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareDetails;