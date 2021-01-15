import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export const TraCuuLuat = () => {
    const [tuKhoa, onChangeText] = useState('');
    const [data, setData] = useState([{"$id":"1","Id":2,"NoiDungLuat":"Xi nhan khi chuyển làn","LanCapNhat":1,"NgayCapNhat":"1/10/2020","MucPhat":200000,"ViPhamLuatGTs":null},{"$id":"2","Id":3,"NoiDungLuat":"Xi nhan khi chuyển hướng","LanCapNhat":1,"NgayCapNhat":"1/10/2020","MucPhat":500000,"ViPhamLuatGTs":null},{"$id":"3","Id":6,"NoiDungLuat":"Không xi nhan, còi khi vượt trước","LanCapNhat":1,"NgayCapNhat":"1/10/2020","MucPhat":200000,"ViPhamLuatGTs":null}]);
    const [luat, setLuat] = useState(null)
    const Laws = luat && luat.map((item, i) => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Tên: {item.Id}</Text>
                    <Text>Chi tiết: {item.NoiDungLuat}</Text>
                    <Text>Ngày cập nhật: {item.NgayCapNhat}</Text>
                    <Text>Mức phạt: {item.MucPhat} VNĐ</Text>
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
                    value={tuKhoa}
                    placeholder = {'Id luật cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/LuatGiaoThong/search/${tuKhoa}`)
                    setLuat(result.data)
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            {luat && Laws}
        </SafeAreaView>
    )
}