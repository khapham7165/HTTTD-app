import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export const TraCuuLuat = () => {
    const [IDLuat, onChangeText] = useState('');
    const [data, setData] = useState([
        {
          "$id": "1",
          "Id": 1,
          "NoiDungLuat": "Xi nhan khi chuyển làn",
          "LanCapNhat": 1,
          "NgayCapNhat": "1/10/2020",
          "MucPhat": 200000
        }
    ]);
    const [luat, setLuat] = useState(null)
    const Laws = luat && (() => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Tên: {luat.Id}</Text>
                    <Text>Chi tiết: {luat.NoiDungLuat}</Text>
                    <Text>Ngày cập nhật: {luat.NgayCapNhat}</Text>
                    <Text>Mức phạt: {luat.MucPhat} VNĐ</Text>
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
                    value={IDLuat}
                    placeholder = {'Id luật cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/LuatGiaoThong/${IDLuat}`)
                    setLuat(result.data)
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {luat && Laws()}
        </SafeAreaView>
    )
}