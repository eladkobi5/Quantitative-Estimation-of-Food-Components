import React from "react";
import { StyleSheet, Text, View,TextInput } from "react-native";

export default function InputLabel({inputText, num}){
    if (num==1) {
    return (
        <TextInput style={styles.inputStyle1} placeholder={inputText}>
        </TextInput>
    )
    }

    if (num==2) {
        return (
            <TextInput style={styles.inputStyle2} placeholder={inputText}>
            </TextInput>
        ) 
    }

}




const styles = StyleSheet.create({
    inputStyle1:{
        borderWidth : 1,
        borderColor: '#777',
        padding: 8,
        margin : 10,
        width: 150,
        bottom: 220,
        color : 'black',
    },

    inputStyle2:{
            borderWidth : 1,
            borderColor: '#777',
            padding: 8,
            margin : 10,
            width: 150,
            //height : 20,
            bottom: 210,
            color : 'black',
        },
    

 
    
    })