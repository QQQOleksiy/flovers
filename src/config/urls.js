const baseURL = 'http://185.107.237.179:8000/api';

const urls = {
    getAllPositions:() => '/positions/all',
    positionById:(id) => `/positions/?id=${id}`,
    positionByName:(name) => `/positions/?name=${name}`
}

export {
    baseURL, urls
}