import axios from "axios";

export default class ProductService {
    /* getProducts = () => {
        return axios.get("/products");
    }*/ // mock is easier :)


    getProductById = (id) => {
        return axios.get(`/products/${id}`);
    }
}