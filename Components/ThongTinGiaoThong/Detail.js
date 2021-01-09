import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ThongTinGiaoThongDetail = () => {
    const navigation = useNavigation();
    const [data, getData] = useState({"$id":"1","KhuVuc":{"$id":"2","DenGiaoThongs":[{"$ref":"1"},{"$id":"3","KhuVuc":{"$ref":"2"},"Id":3,"Do":12,"Vang":23,"Xanh":30,"TrangThai":1},{"$id":"4","KhuVuc":{"$ref":"2"},"Id":4,"Do":30,"Vang":3,"Xanh":30,"TrangThai":1}],"Id":1,"TenKhuVuc":"Lam dong"},"Id":2,"Do":12,"Vang":23,"Xanh":42,"TrangThai":1})
    return (
        <SafeAreaView style = {{padding: 15}}>
            <View>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Khu vực: {data.KhuVuc.TenKhuVuc}</Text>
                    <Text>Thời gian đèn đỏ: {data.Do}</Text>
                    <Text>Thời gian đèn vàng: {data.Vang}</Text>
                    <Text>Thời gian đèn xanh: {data.Xanh}</Text>
                    <Text>Trạng thái: {data.TrangThai ? 'Đang hoạt động' : 'Không hoạt động'}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}