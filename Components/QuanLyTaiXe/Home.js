import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as axios from 'axios'

export const QuanLyTaiXe = () => {
    const [taiXeCanTim, onChangeText] = useState('');
    const [data, setData] = useState([{"$id":"1","ChuxeId":1,"CMND":123456789,"HoTen":"Quang Huy","DiaChi":"Bien Hoa","GioiTinh":"Nam","NamSinh":1999,"Xes":[{"$id":"2","XeId":2,"BienSoXe":"12345","Hang":"Honda","Loai":"Vison","MauSac":"Den","Nam":2020,"TrangThai":"Hoan tat","ChuxeId":1,"Chuxe":{"$ref":"1"}},{"$id":"3","XeId":3,"BienSoXe":"23451","Hang":"Yamaha","Loai":"Exciter","MauSac":"Den","Nam":2020,"TrangThai":"Hoan tat","ChuxeId":1,"Chuxe":{"$ref":"1"}}],"ChuxevaBanglais":[{"$id":"4","ChuxeId":1,"Chuxe":{"$ref":"1"},"BanglaiId":1,"Banglai":null},{"$id":"5","ChuxeId":1,"Chuxe":{"$ref":"1"},"BanglaiId":2,"Banglai":null},{"$id":"6","ChuxeId":1,"Chuxe":{"$ref":"1"},"BanglaiId":3,"Banglai":null}]}]);
    const [taiXe, setTaiXe] = useState(null)

    const TaiXe = taiXe && taiXe.map((item, i) => {
        const renderBangLai = item.ChuxevaBanglais.map((bangLai, i) => {
            return (<Text>  |_ {bangLai.BanglaiId}</Text>)
        })
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Tên: {item.HoTen}</Text>
                    <Text>CMND: {item.CMND}</Text>
                    <Text>Địa chỉ: {item.DiaChi}</Text>
                    <Text>Giới tính: {item.GioiTinh}</Text>
                    <Text>Năm Sinh: {item.NamSinh}</Text>
                    <Text>Bằng lái sở hữu:</Text>
                    {renderBangLai}
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
                    value={taiXeCanTim}
                    placeholder = {'Tài xế cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/Chuxe/${taiXeCanTim})`)
                    setTaiXe(result.data)
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {taiXe && TaiXe}
        </SafeAreaView>
    )
}