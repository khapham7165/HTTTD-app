import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ThongTinGiaoThong = () => {
    const [area, onChangeText] = useState('');
    const [data, setData] = useState('abc');
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{padding: 15, backgroundColor: 'white', alignSelf:'stretch', flex: 1}}>
            <View style = {{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding : 10, borderRadius : 5, flex: 0.98, alignSelf: 'stretch'}}
                    onChangeText={text => onChangeText(text)}
                    value={area}
                    placeholder = {'Khu vực cần tìm'}
                />
                <TouchableHighlight onPress={() => {}} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            <View style = {{height: 15}}/>
            {data &&
                <ImageBackground source = {{uri: 'https://www.mapsofworld.com/vietnam/maps/ho-chi-minh.jpg'}}
                    style = {{flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center'}}
                >
                    <TouchableHighlight onPress = {() => {navigation.navigate('Thong tin giao thong chi tiet')}}
                        underlayColor = 'clear'>
                        <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Traffic_lights_icon.svg/301px-Traffic_lights_icon.svg.png'}}
                            style = {{ height: 80, width: 40, resizeMode: 'contain'}}
                        />
                    </TouchableHighlight>
                </ImageBackground>
            }
        </SafeAreaView>
    )
}