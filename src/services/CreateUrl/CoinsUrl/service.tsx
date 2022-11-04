
const API_BASE = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1'
// const PARAM_REFERENCE = 'referenceCurrencyUuid=yhjMzLPhuIDl'
// const PARAM_TIME = 'timePeriod=24h'
// const PARAM_TIERS = 'tiers%5B0%5D=1'
const PARAM_ORDER_BY = 'orderBy='
const PARAM_DIRECTION = 'orderDirection='
const PARAM_LIMIT = 'limit='
const PARAM_OFFSET = 'offset='
const PARAM_SEARCH = 'search='

const getNewCoinsUrl = (
    order: string,
    direction: string, 
    limit: number, 
    offset: number,
    search: string) => {
    return `${API_BASE}&${PARAM_ORDER_BY}${order}&${PARAM_DIRECTION}${direction}&${PARAM_LIMIT}${limit}&${PARAM_OFFSET}${offset}&${PARAM_SEARCH}${search}`}

export default getNewCoinsUrl