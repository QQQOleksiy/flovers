const baseURL = 'http://185.107.237.179:8000/api';

const urls = {
    getAllPositions:(page, type) => `/positions/all?pag=${page}&page_size=12&category=${type}`,
    positionById:(id, same) => `/positions/?id=${id}&same=${same || 4}`,
    previousCatalog:() => '/positions/category'
}

export {
    baseURL, urls
}