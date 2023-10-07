import {apiService} from "./axiosService";
import {urls} from "../config";

const floversService = {
    getAll: (page, type) => apiService.get(urls.getAllPositions(page, type)),
    getById: (id) => apiService.get(urls.positionById(id)),
    getCategory: () => apiService.get(urls.previousCatalog())
}

export {floversService}