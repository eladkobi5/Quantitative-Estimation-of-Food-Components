import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler, Button  } from 'react-native';
import { FlatList } from 'react-native';
import FlatButton from '../components/buttons.js';


const data = [
    {id:1,name:'Name', pos:'x'},
    {id:2,name:'Estimated weight', pos:'x'},
    {id:3,name:'Calories', pos:'x'},
    {id:4,name:'Total fat', pos:'x'},
    {id:5,name:'Cholesterol', pos:'x'},
    {id:6,name:'Sodium', pos:'x'},
    {id:7,name:'Potassium', pos:'x'},
    {id:8,name:'Total Carbohydrates', pos:'x'},
    {id:9,name:'Sugars', pos:'x'},
    {id:10,name:'Protein', pos:'x'},
];



export default function ResultsScreen({navigation}) {
    const item = ({item})=>{
        return(
            <View style= {{flexDirection: 'row'}}>
                <View style={{width: 100, backgroundColor:'white'}}>
                    <Text>{item.id}</Text>
                </View>
                <View style={{width: 100, backgroundColor:'white'}}>
                    <Text>{item.name}</Text>
                </View>
                <View style={{width: 100, backgroundColor:'white'}}>
                    <Text>{item.pos}</Text>
                </View>
            </View>

        );
    };
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:'10%'}}>
                <View style= {{flexDirection: 'row'}}>
                <View style={{width: 100, backgroundColor:'blue'}}>
                    <Text style={{color: 'white'}}>id</Text>
                </View>
                <View style={{width: 100, backgroundColor:'blue'}}>
                    <Text style={{color: 'white'}}>Type</Text>
                </View>
                <View style={{width: 100, backgroundColor:'blue'}}>
                    <Text style={{color: 'white'}}>Value</Text>
                </View>
            </View>
            <FlatList
            data={data}
            renderItem={item}
            
            keyExtractor={(item,index)=>index.toString()}
            />
            <View>
            <FlatButton textButton={"Save the meal?"} num={'5'}/>
            <Button title='done' onPress={() => navigation.navigate('WelcomeScreen')}/>
            </View>
        </View>
    );

}


const exitFunc = () => {
    BackHandler.exitApp();
  };