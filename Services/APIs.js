import * as axios from 'axios'

export const getThongTinDen = async (id) => {
    return await axios.get(`https://localhost:44399/api/DenGiaoThong/${id}`)
}

export const getTatCaThongTinViPham = async () => {
    return await axios.get(`https://localhost:44399/api/BaoCao`)
}