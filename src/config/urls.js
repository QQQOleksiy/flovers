const baseURL = 'http://1florcentre.ru/back/api';

const urls = {
    getAllPositions:(page, type) => `/positions/all?pag=${page}&page_size=12&category=${type}`,
    positionById:(id, same) => `/positions/?id=${id}&same=${same || 4}`,
    previousCatalog:() => '/positions/category',
    randomPosition:(count) => `/positions/random?count=${count}`,
    sendData: () => '/buy/',
    getCategoryList: () => `/category-list/`
}

export {
    baseURL, urls
}