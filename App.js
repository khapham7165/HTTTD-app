import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {LoginFrom} from './Components/Login'
import {Home} from './Components/Home'

import {BienBanViPham} from './Components/BienBanViPham/Home'
import {BienBanViPhamDetail} from './Components/BienBanViPham/Detail'

import {CanhBaoKetXe} from './Components/CanhBaoKetXe/Home'
import {CanhBaoKetXeDetail} from './Components/CanhBaoKetXe/Detail'

import {QuanLyBangLai} from './Components/QuanLyBangLai/Home'
import {QuanLyBangLaiDetail} from './Components/QuanLyBangLai/Detail'

import {QuanLyTaiXe} from './Components/QuanLyTaiXe/Home'
import {QuanLyTaiXeDetail} from './Components/QuanLyTaiXe/Detail'

import {QuanLyXe} from './Components/QuanLyXe/Home'
import {QuanLyXeDetail} from './Components/QuanLyXe/Detail'

import {ThongTinGiaoThong} from './Components/ThongTinGiaoThong/Home'
import {ThongTinGiaoThongDetail} from './Components/ThongTinGiaoThong/Detail'

import {TraCuuLuat} from './Components/TraCuuLuat/Home'
import {TraCuuLuatDetail} from './Components/TraCuuLuat/Detail'

import {TraCuuViPham} from './Components/TraCuuViPham/Home'
import {TraCuuViPhamDetail} from './Components/TraCuuViPham/Detail'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const LoginScreen = () => {
  return (
    <LoginFrom/>
  )
}

const HomeScreen = () => {
  return (
    <Home/>
  )
}

const QuanLyTaiXeScreen = () => {
  return (
    <QuanLyTaiXe/>
  )
}

const QuanLyTaiXeDetailScreen = () => {
  return (
    <QuanLyTaiXeDetail/>
  )
}

const QuanLyBangLaiScreen = () => {
  return (
    <QuanLyBangLai/>
  )
}

const QuanLyBangLaiDetailScreen = () => {
  return (
    <QuanLyBangLaiDetail/>
  )
}

const QuanLyXeScreen = () => {
  return (
    <QuanLyXe/>
  )
}

const QuanLyXeDetailScreen = () => {
  return (
    <QuanLyXeDetail/>
  )
}

const TraCuuViPhamScreen = () => {
  return (
    <TraCuuViPham/>
  )
}

const TraCuuViPhamDetailScreen = () => {
  return (
    <TraCuuViPhamDetail/>
  )
}

const TraCuuLuatScreen = () => {
  return (
    <TraCuuLuat/>
  )
}

const TraCuuLuatDetailScreen = () => {
  return (
    <TraCuuLuatDetail/>
  )
}

const CanhBaoKetXeScreen = () => {
  return (
    <CanhBaoKetXe/>
  )
}

const CanhBaoKetXeDetailScreen = () => {
  return (
    <CanhBaoKetXeDetail/>
  )
}

const ThongTinGiaoThongScreen = () => {
  return (
    <ThongTinGiaoThong/>
  )
}

const ThongTinGiaoThongDetailScreen = () => {
  return (
    <ThongTinGiaoThongDetail/>
  )
}

const BienBanViPhamScreen = () => {
  return (
    <BienBanViPham/>
  )
}

const BienBanViPhamDetailScreen = () => {
  return (
    <BienBanViPhamDetail/>
  )
}

const MainStackContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainStack">
        <Stack.Screen name="Login" component={LoginScreen} options = {{
          headerShown: false
        }}/>
        <Stack.Screen name="Home" component={HomeScreen}/>

        <Stack.Screen name={"Quan ly tai xe"} component={QuanLyTaiXeScreen}/>
        <Stack.Screen name={"Quan ly tai xe chi tiet"} component={QuanLyTaiXeDetailScreen}/>

        <Stack.Screen name={"Quan ly bang lai"} component={QuanLyBangLaiScreen}/>
        <Stack.Screen name={"Quan ly bang lai chi tiet"} component={QuanLyBangLaiDetailScreen}/>

        <Stack.Screen name={"Quan ly xe"} component={QuanLyXeScreen}/>
        <Stack.Screen name={"Quan ly xe chi tiet"} component={QuanLyXeDetailScreen}/>

        <Stack.Screen name={"Tra cuu vi pham"} component={TraCuuViPhamScreen}/>
        <Stack.Screen name={"Tra cuu vi pham chi tiet"} component={TraCuuViPhamDetailScreen}/>

        <Stack.Screen name={"Tra cuu luat"} component={TraCuuLuatScreen}/>
        <Stack.Screen name={"Tra cuu luat chi tiet"} component={TraCuuLuatDetailScreen}/>

        <Stack.Screen name={"Canh bao ket xe"} component={CanhBaoKetXeScreen}/>
        <Stack.Screen name={"Canh bao ket xe chi tiet"} component={CanhBaoKetXeDetailScreen}/>

        <Stack.Screen name={"Thong tin giao thong"} component={ThongTinGiaoThongScreen}/>
        <Stack.Screen name={"Thong tin giao thong chi tiet"} component={ThongTinGiaoThongDetailScreen}/>

        <Stack.Screen name={"Bien ban vi pham"} component={BienBanViPhamScreen}/>
        <Stack.Screen name={"Bien ban vi pham chi tiet"} component={BienBanViPhamDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <MainStackContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
