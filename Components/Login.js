import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LoginFrom = () => {
    const navigation = useNavigation();
    const [username, onChangeText] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    return (
        <SafeAreaView style = {{padding: 15, backgroundColor: 'white'}}>
            <Text style = {{fontSize: 40, fontWeight: '500', letterSpacing: 3}}>LOG IN</Text>
            <View style = {{height: 15}}/>
            <Text style = {{fontSize: 20}}>User name</Text>
            <View style = {{height: 15}}/>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding : 10, borderRadius : 5}}
                onChangeText={text => onChangeText(text)}
                value={username}
            />
            <View style = {{height: 15}}/>
            <Text style = {{fontSize: 20}}>Password</Text>
            <View style = {{height: 15}}/>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding : 10, borderRadius : 5}}
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <View style = {{height: 30}}/>
            <Button title = 'LOG IN' onPress = {() => {
                navigation.navigate('Home')
            }}></Button>
        </SafeAreaView>
    )
}