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
// // Додаємо перехопник для обробки CORS-заголовків
// apiService.interceptors.request.use(config => {
//     // Додаємо заголовки для CORS
//     config.headers["Access-Control-Allow-Origin"] = "*";
//     // Додайте інші необхідні заголовки тут
//
//     return config;
// });
//
// export { apiService };