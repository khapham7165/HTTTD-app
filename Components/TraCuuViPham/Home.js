import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as axios from 'axios'

export const TraCuuViPham = () => {
    const [nguoiViPham, onChangeText] = useState('');
    const [isViPham, setIsViPham] = useState(false)
    const [isTatCaViPham, setIsTatCaViPham] = useState(false)
    const [viPham, setViPham] = useState({
        "$id": "1",
        "Id": 2,
        "NguoiViPham": 123456789,
        "DiaDiemPhat": "Nguyen Van Cu",
        "ThoiGianLap": "10/01/2021",
        "TienPhat": 100,
        "TinhTrangNopPhat": "Chua",
        "ViPhamLuatGTs": [
          {
            "$id": "2",
            "Id": 5,
            "Id_BaoCao": 2,
            "BaoCao": {
              "$ref": "1"
            },
            "Id_LuatGiaoThong": 8,
            "LuatGiaoThong": null
          },
          {
            "$id": "3",
            "Id": 6,
            "Id_BaoCao": 2,
            "BaoCao": {
              "$ref": "1"
            },
            "Id_LuatGiaoThong": 9,
            "LuatGiaoThong": null
          }
        ]
      })

    const [tatCaViPham,setTatCaViPham] = useState([
        {
        "$id": "1",
        "Id": 2,
        "NguoiViPham": 123456789,
        "DiaDiemPhat": "Nguyen Van Cu",
        "ThoiGianLap": "10/01/2021",
        "TienPhat": 100,
        "TinhTrangNopPhat": "Chua",
        "ViPhamLuatGTs": [
        {
        "$id": "2",
        "Id": 5,
        "Id_BaoCao": 2,
        "BaoCao": {
        "$ref": "1"
        },
        "Id_LuatGiaoThong": 8,
        "LuatGiaoThong": null
        },
        {
        "$id": "3",
        "Id": 6,
        "Id_BaoCao": 2,
        "BaoCao": {
        "$ref": "1"
        },
        "Id_LuatGiaoThong": 9,
        "LuatGiaoThong": null
        }
        ]
        },
        {
        "$id": "4",
        "Id": 3,
        "NguoiViPham": 905123456,
        "DiaDiemPhat": "Linh Trung",
        "ThoiGianLap": "9/01/2021",
        "TienPhat": 100,
        "TinhTrangNopPhat": "Chua",
        "ViPhamLuatGTs": [
        {
        "$id": "5",
        "Id": 7,
        "Id_BaoCao": 3,
        "BaoCao": {
        "$ref": "4"
        },
        "Id_LuatGiaoThong": 10,
        "LuatGiaoThong": null
        }
        ]
        },
        {
        "$id": "6",
        "Id": 4,
        "NguoiViPham": 285123647,
        "DiaDiemPhat": "Thu Duc",
        "ThoiGianLap": "8/01/2021",
        "TienPhat": 100,
        "TinhTrangNopPhat": "Roi",
        "ViPhamLuatGTs": [
        {
        "$id": "7",
        "Id": 8,
        "Id_BaoCao": 4,
        "BaoCao": {
        "$ref": "6"
        },
        "Id_LuatGiaoThong": 9,
        "LuatGiaoThong": null
        }
        ]
        }])

    const renderTatCaViPham = tatCaViPham.map((item, i) => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Người vi phạm: {item.NguoiViPham}</Text>
                    <Text>Địa điểm phạt: {item.DiaDiemPhat}</Text>
                    <Text>Thời gian lập: {item.ThoiGianLap}</Text>
                    <Text>Số tiền phạt: {item.TienPhat}k</Text>
                    <Text>Tình trạng nộp phạt: {item.TinhTrangNopPhat}</Text>
                </View>
            </View>
        )
    })

    const renderViPham = () => {
        return (
            <View>
                <View style = {{height: 15}}/>
                <View style = {{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
                    <Text>Người vi phạm: {viPham[0].NguoiViPham}</Text>
                    <Text>Địa điểm phạt: {viPham[0].DiaDiemPhat}</Text>
                    <Text>Thời gian lập: {viPham[0].ThoiGianLap}</Text>
                    <Text>Số tiền phạt: {viPham[0].TienPhat}k</Text>
                    <Text>Tình trạng nộp phạt: {viPham[0].TinhTrangNopPhat}</Text>
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
                    value={nguoiViPham}
                    placeholder = {'Tài xế cần tìm'}
                />
                <TouchableHighlight onPress={async() => {
                    const result = await axios.get(`https://localhost:44399/api/BaoCao/${nguoiViPham}`)
                    setViPham(result.data)
                    console.log('result.data :>> ', result.data);
                    setIsViPham(true)
                    setIsTatCaViPham(false)
                }} underlayColor = 'white'>
                    <Image
                        source = {{uri: 'https://static.thenounproject.com/png/3134345-200.png'}}
                        style = {{width: 40, height: 40, resizeMode: 'contain', tintColor: 'black'}}
                    />
                </TouchableHighlight>
            </View>
            <View style = {{height: 15}}/>
            <Button title = {'Xem tất cả vi phạm'} onPress = {async() => {
                const result = await axios.get(`https://localhost:44399/api/BaoCao`)
                setTatCaViPham(result.data)
                setIsViPham(false)
                setIsTatCaViPham(true)
            }}/>
            {isTatCaViPham && renderTatCaViPham}
            {isViPham && renderViPham()}
        </SafeAreaView>
    )
}