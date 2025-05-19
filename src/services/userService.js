import axios from "axios";
import {  API_USER_URL } from "../config/apiConfig";

export function fetchUserAxios(){
    return axios.get(API_USER_URL + "/users");
}