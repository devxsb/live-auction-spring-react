import axios from "axios";

export default class AuthService {
    login = (body) => {
        return axios.post("http://localhost:8080/v1/auth/login", body);
    }

    signup = (body) => {
        return axios.post("http://localhost:8080/v1/auth/signup", body);
    }

    logout = () => {
        return axios.post("http://localhost:8080/v1/auth/logout", null, {
            headers: {
                'Authorization': `Basic ${localStorage.getItem("token")}`
            }
        })
    }
}