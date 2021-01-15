import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export const TraCuuViPham = () => {
    const [IdViPham, onChangeText] = useState('');
    const [data, setData] = useState([{"$id":"1","Xes":[{"$id":"2","Chuxe":{"$ref":"1"},"XeId":1,"BienSoXe":"12345","Hang":"Honda","Loai":"Vison","MauSac":"Den","Nam":2020,"TrangThai":"Hoan tat","ChuxeId":1},{"$id":"3","Chuxe":{"$ref":"1"},"XeId":2,"BienSoXe":"23451","Hang":"Yamaha","Loai":"Exciter","MauSac":"Den","Nam":2020,"TrangThai":"Hoan tat","ChuxeId":1}],"ChuxeId":1,"CMND":123456789,"HoTen":"Quang Huy","DiaChi":"Bien Hoa","GioiTinh":"Nam","NamSinh":1999}]);
    const [viPham, setViPham] = useState(null)
    const renderViPham = viPham && viPham.map((item, i) => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Tên: {item.HoTen}</Text>
                    <Text>CMND: {item.CMND}</Text>
                    <Text>Địa chỉ: {item.DiaChi}</Text>
                    <Text>Giới tính: {item.GioiTinh}</Text>
                    <Text>Năm sinh: {item.NamSinh}</Text>
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
                    value={IdViPham}
                    placeholder = {'Id vi phạm cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/${IdViPham}/Chuxe`)
                    setViPham(result.data)
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {viPham && renderViPham}
        </SafeAreaView>
    )
}