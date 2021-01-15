import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const QuanLyBangLai = () => {
    const [inputText, onChangeText] = useState('');
    const [data, setData] = useState([{"$id":"1","BanglaiId":2,"LoaiBang":"A2","ThongTin":"Cho xe may","ChuxevaBanglais":null}]);
    const [bangLai, setBangLai] = useState(null);

    const navigation = useNavigation();

    const BangLai = bangLai && bangLai.map((item, i) => { //render Bang lai
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Loại bằng lái: {item.LoaiBang}</Text>
                    <Text>Thông tin: {item.ThongTin}</Text>
                </View>
            </View>
        )
    })
    return (
        <SafeAreaView style = {{padding: 15, alignSelf:'stretch'}}>
            <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding : 10, borderRadius : 5, flex: 0.98, alignSelf: 'stretch'}}
                    onChangeText={text => onChangeText(text)}
                    value={inputText}
                    placeholder = {'Bằng lái cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/banglai/${inputText}`);
                    console.log('result - ' + result)
                    setBangLai(result.data);
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {bangLai && BangLai}
        </SafeAreaView>
    )
}