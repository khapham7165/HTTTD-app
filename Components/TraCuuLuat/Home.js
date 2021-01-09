import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const TraCuuLuat = () => {
    const [area, onChangeText] = useState('');
    const [data, setData] = useState([
        {
            name: 'Luat 1',
            description: 'Chi tiet cho luat 1',
        },
        {
            name: 'Luat 2',
            description: 'Chi tiet cho luat 2',
        }
    ]);

    const Laws = data.map((item, i) => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Tên: {data[i].name}</Text>
                    <Text>Chi tiết: {data[i].description}</Text>
                </View>
            </View>
        )
    })
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{padding: 15, alignSelf:'stretch'}}>
            <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding : 10, borderRadius : 5, flex: 0.98, alignSelf: 'stretch'}}
                    onChangeText={text => onChangeText(text)}
                    value={area}
                    placeholder = {'Luật cần tìm'}
                />
                <TouchableHighlight onPress={() => {}} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {Laws}
        </SafeAreaView>
    )
}