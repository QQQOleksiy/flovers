import {apiService} from "./axiosService";
import {urls} from "../config";

const floversService = {
    getAll: (page, type) => apiService.get(urls.getAllPositions(page, type)),
    getById: (id, same) => apiService.get(urls.positionById(id, same)),
    getCategory: () => apiService.get(urls.previousCatalog())
}

export {floversService}