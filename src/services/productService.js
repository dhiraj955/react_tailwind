import axios from "axios";
import { API_PRODUCT_URL } from "../config/apiConfig";

export function fetchProductAxios(){
    return axios.get(API_PRODUCT_URL + "/products");
}