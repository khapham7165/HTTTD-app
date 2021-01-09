import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const BienBanViPhamDetail = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{padding: 15, backgroundColor: 'white'}}>
            <Text>BienBanViPham-detail</Text>
        </SafeAreaView>
    )
}