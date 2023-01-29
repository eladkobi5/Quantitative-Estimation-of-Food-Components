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
        if (num==3) {
            return (
                <TouchableOpacity onPress={onPress} >
                <View style= {styles.buttonChatWithUs}>
                    <Text style = {styles.buttonText} > { textButton } </Text>
                </View>
                </TouchableOpacity>

            )
        }
        if (num==4) {
            return (
                <TouchableOpacity onPress={onPress} >
                <View style= {styles.buttonExit}>
                    <Text style = {styles.buttonText} > { textButton } </Text>
                </View>
                </TouchableOpacity>

            )
        }
        if (num==5) {
            return (
                <TouchableOpacity onPress={onPress} >
                <View style= {styles.buttonSaveMeal}>
                    <Text style = {styles.buttonText} > { textButton } </Text>
                </View>
                </TouchableOpacity>

            )
        }
        if (num==6) {
            return (
                <TouchableOpacity onPress={onPress} >
                <View style= {styles.buttonDone}>
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
    
},

    buttonChatWithUs: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        bottom: -200,
    },

    buttonExit: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'red',
        bottom: -300,
        right : 100,
    },
    buttonSaveMeal: {
        borderRadius: 2,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        bottom: 400,
        right : 100,
        left: 5,
    },
    buttonDone: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'lime',
        bottom: -35,
    },



})
