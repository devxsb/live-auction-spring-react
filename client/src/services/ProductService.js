import axios from "axios";

export default class ProductService {
    /* getProducts = () => {
        return axios.get("http://localhost:8080/v1/products");
    }*/ // mock is easier :)


    getProductById = (id) => {
        return axios.get(`http://localhost:8080/v1/products/${id}`);
    }
}