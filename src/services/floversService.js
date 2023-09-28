import {apiService} from "./axiosService";
import {urls} from "../config";

const floversService = {
    getAll: () => apiService.get(urls.getAllPositions()),
    getById: (id) => apiService.get(urls.positionById(id)),
    getByName: (name) => apiService.get(urls.positionByName())
}

export {floversService}