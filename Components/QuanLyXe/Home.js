import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const QuanLyXe = () => {
    const [IDxe, onChangeText] = useState('');
    const [data, setData] = useState([{"$id":"1","XeId":2,"BienSoXe":"12345","Hang":"Honda","Loai":"Vison","MauSac":"Den","Nam":2020,"TrangThai":"Hoan tat","ChuxeId":1,"Chuxe":{"$id":"2","ChuxeId":1,"CMND":123456789,"HoTen":"Quang Huy","DiaChi":"Bien Hoa","GioiTinh":"Nam","NamSinh":1999,"Xes":[{"$ref":"1"}],"ChuxevaBanglais":null}}]);
    const [xe, setXe] = useState(null)
    const Xe = xe && xe.map((item, i) => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Biển số xe: {item.BienSoXe}</Text>
                    <Text>Hãng xe: {item.Hang}</Text>
                    <Text>Loại xe: {item.Loai}</Text>
                    <Text>Màu sắc: {item.MauSac}</Text>
                    <Text>Năm: {item.Nam}</Text>
                    <Text>Trạng thái: {item.TrangThai}</Text>
                    <Text>Chủ xe: {item.ChuxeId}</Text>
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
                    value={IDxe}
                    placeholder = {'Tài xế cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/Xe/${IDxe}`)
                    setXe(result.data)
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {xe && Xe}
        </SafeAreaView>
    )
}