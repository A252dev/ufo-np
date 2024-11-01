import router from "@/router";
import axios from "axios";
import authService from "./auth.service";

const URL = 'http://127.0.0.1:8000/api';

class ActionService {

    async tranfer(transferData) {

        return await axios.post(URL + '/user/transfer', transferData, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        });

    }

    async addBalance(addBalanceData) {

        return await axios.post(URL + '/user/addbalance', addBalanceData, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        });

    }

    async convert(convertData) {

        return await axios.post(URL + '/user/convert', convertData, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            },
        });

    }

}


export default new ActionService(); 