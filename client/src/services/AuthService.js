import axios from "axios";

export default class AuthService {
    login = (body) => {
        return axios.post("/auth/login", body);
    }

    signup = (body) => {
        return axios.post("/auth/signup", body);
    }

    logout = () => {
        return axios.delete("/auth/logout", {
            headers: {
                'Authorization': `Basic ${localStorage.getItem("token")}`
            }
        })
    }
}