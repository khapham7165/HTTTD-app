import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {{padding: 15}}>
            <ScrollView>
                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Quan ly tai xe')}}>
                    <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                        <Text style = {{fontSize : 20, letterSpacing: 3}}>Quản lý tài xế</Text>
                        <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                    </View>
                </TouchableHighlight>
                <View style = {{height: 15}}/>
                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Quan ly bang lai')}}>
                    <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                        <Text style = {{fontSize : 20, letterSpacing: 3}}>Quản lý bằng lái</Text>
                        <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                    </View>
                </TouchableHighlight>
                <View style = {{height: 15}}/>
                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Quan ly xe')}}>
                <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>Quản lý xe</Text>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                </View>
                </TouchableHighlight>
                <View style = {{height: 15}}/>

                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Tra cuu vi pham')}}>
                <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>Tra cứu vi phạm</Text>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                </View>
                </TouchableHighlight>

                <View style = {{height: 15}}/>

                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Tra cuu luat')}}>
                <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>Tra cứu luật</Text>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                </View>
                </TouchableHighlight>

                <View style = {{height: 15}}/>

                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Canh bao ket xe')}}>
                <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>Cảnh báo kẹt xe</Text>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                </View>
                </TouchableHighlight>

                <View style = {{height: 15}}/>
                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Thong tin giao thong')}}>
                    <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                        <Text style = {{fontSize : 20, letterSpacing: 3}}>Thông tin giao thông</Text>
                        <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                    </View>
                </TouchableHighlight>
                <View style = {{height: 15}}/>

                <TouchableHighlight underlayColor = {'white'} onPress={() => {navigation.navigate('Bien ban vi pham')}}>
                <View style = {{backgroundColor: 'white', padding: 15, justifyContent: 'space-between', flexDirection: 'row', borderRadius: 5}}>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>Biên bản vi phạm</Text>
                    <Text style = {{fontSize : 20, letterSpacing: 3}}>{'>'}</Text>
                </View>
                </TouchableHighlight>

                <View style = {{height: 15}}/>
            </ScrollView>
        </SafeAreaView>
    )
}