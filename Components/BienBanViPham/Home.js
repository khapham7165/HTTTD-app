import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {axios} from 'axios';

export const BienBanViPham = () => {
    const [IDxe, onChangeText] = useState('');
    const [data, setData] = useState({"$id":"1","Chuxe":{"$id":"2","Xes":[{"$ref":"1"}],"Id":1,"CMND":2000,"HoTen":"Vu Thi Hai Yen","DiaChi":"235B Nguyen Van Cu, quan 1","GioiTinh":"Nu","NamSinh":1999},"Id":1,"BienSoXe":"51B-70000","Hang":"Vision","Loai":"Tay ga","MauSac":"Do","Nam":2020,"TrangThai":"Khong"});
    const [xe, setXe] = useState(null)
    const Xe = () => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Hãng xe: {xe.Hang}</Text>
                    <Text>Loại xe: {xe.Loai}</Text>
                    <Text>Màu sắc: {xe.MauSac}</Text>
                    <Text>Năm: {xe.Nam}</Text>
                    <Text>Trạng thái: {xe.TrangThai}</Text>
                    <Text>---------------------------</Text>
                    <Text>Chủ xe: {xe.Chuxe.HoTen}</Text>
                    <Text>Năm sinh: {xe.Chuxe.NamSinh}</Text>
                    <Text>CMND: {xe.Chuxe.CMND}</Text>
                    <Text>Địa chỉ: {xe.Chuxe.DiaChi}</Text>
                </View>
            </View>
        )
    }

    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{padding: 15, alignSelf:'stretch'}}>
            <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding : 10, borderRadius : 5, flex: 0.98, alignSelf: 'stretch'}}
                    onChangeText={text => onChangeText(text)}
                    value={IDxe}
                    placeholder = {'Biên bản cần tìm'}
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
            {xe && Xe()}
        </SafeAreaView>
    )
}