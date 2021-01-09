import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export const ThongTinGiaoThongDetail = () => {
    const route = useRoute()
    const navigation = useNavigation();
    const data = route.params
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