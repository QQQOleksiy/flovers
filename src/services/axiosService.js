import axios from "axios";

import {baseURL} from "../config";


const apiService = axios.create({baseURL})

export {
    apiService
}

// import axios from "axios";
// import { baseURL } from "../config";
//
// const apiService = axios.create({baseURL});
//
// apiService.interceptors.request.use(config => {
//     config.headers["Access-Control-Allow-Origin"] = "*";
//
//     return config;
// });
//
// export { apiService };