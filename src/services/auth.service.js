import axios from "axios";

const URL = 'http://127.0.0.1:8000/api';

class AuthService {

    async getInfo() {

        if (localStorage.getItem('jwt') != null) {
            return await axios.post(URL + '/user/index', null, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('jwt'),
                },
            });
        } else {
            return null;
        }
    }

    login(user) {

        // console.log(user);

        return axios
            .post(URL + '/login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                console.log(response.data.data.access_token);
                if (response.data.data.access_token) {
                    localStorage.setItem('jwt', response.data.data.access_token);
                }

                return response.data.data.access_token;
            })
    }

    logout() {
        localStorage.removeItem('jwt');
    }
}

export default new AuthService();