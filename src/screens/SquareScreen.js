import React, { useState } from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import SquareDetails from '../components/SquareDetails.js';



const SquareScreen = () => {

    const IntervalSign = 15;
    const Initial_color = 0;
    const [Red, setRed] = useState(Initial_color);
    const [Green, setGreen] = useState(Initial_color);
    const [Blue, setBlue] = useState(Initial_color);

    const setColor = (colorType, sign) => {
        // ColorType: string: Red || Green || Blue
        // sign: string: -1 || 1

        let Interval=sign*IntervalSign       

        switch(colorType){
            case 'Red':
                if(Red+Interval<=255 && Red+Interval>=0){
                    setRed(Red+Interval);
                }
                break;
            case 'Green':
                if(Green+Interval<=255 && Green+Interval>=0){
                    setGreen(Green+Interval);
                }
                break;
            case 'Blue':
                if(Blue+Interval<=255 && Blue+Interval>=0){
                    setBlue(Blue+Interval);
                }
        }
        
        // if(colorType==='Red'){
        //     if(Red+Interval<=255 && Red+Interval>=0){
        //         setRed(Red+Interval)
        //     }
        // }else if(colorType==='Green'){
        //     if(Green+Interval<=255 && Green+Interval>=0){
        //         setGreen(Green+Interval)
        //     }
        // }else if(colorType==='Blue'){
        //     if(Blue+Interval<=255 && Blue+Interval>=0){
        //         setBlue(Blue+Interval)
        //     }
        // }
    };
   
    return(
        <View>
            <SquareDetails 
                title="Red" 
                onIncreas={()=>{setColor('Red', 1)}}
                onDecreas={()=>{setColor('Red', -1)}}
                colorValue = {Red}
            />
            <SquareDetails 
                title="Green"
                onIncreas={()=>{setColor('Green', 1)}}
                onDecreas={()=>{setColor('Green', -1)}}
                colorValue = {Green}
            />
            <SquareDetails 
                title="Blue"
                onIncreas={()=>{setColor('Blue', 1)}}
                onDecreas={()=>{setColor('Blue', -1)}}
                colorValue = {Blue}
            />
            <View style= {{height: 100, width: 100, backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`}}>
                <Text>rgb({Red}, {Green}, {Blue})</Text>
            </View>
            <Text>rgb({Red}, {Green}, {Blue})</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;