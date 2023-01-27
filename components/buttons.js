import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ textButton,onPress,num }){
        if (num==1) {
            return (
                <TouchableOpacity onPress={onPress} >
                <View style= {styles.buttonNext}>
                    <Text style = {styles.buttonText} > { textButton } </Text>
                </View>
                </TouchableOpacity>
            )
        

        }
        if (num==2) {
            return (
                <TouchableOpacity onPress={onPress} >
                <View style= {styles.buttonNewMember}>
                    <Text style = {styles.buttonText} > { textButton } </Text>
                </View>
                </TouchableOpacity>

            )
        }
}




const styles = StyleSheet.create({
buttonNext:{
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'lime',
    bottom: -30,
},

buttonNewMember:{
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'lime',
    bottom: -65,
},



buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    
}


})
