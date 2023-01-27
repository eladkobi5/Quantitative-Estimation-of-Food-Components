import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ textButton }){
    return (
        <TouchableOpacity >
            <View style= {styles.Button}>
                <Text style = {styles.buttonText} > { textButton } </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
button:{
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    bottom: -50,
},

buttonText: {
    color: 'white',
    fontWeigh: 'bold',
    fontSize: '16',
    textAlign: 'center',
    
}


})
