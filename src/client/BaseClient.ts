import Fetch from './request.js'
import Cache from './cache.js'
import { HOYOLAB_API_BASE_URL } from '../types/ApiConstants.js'
class CoreGenJS {
    cache: Cache
    request: Fetch
    /**
     * 
     * @param {string} token 
     * @param {string} uid 
     */
    constructor(
        token: string,
        uid: number
    ) {
        this.cache = new Cache(),
        this.request = new Fetch(HOYOLAB_API_BASE_URL, {
            "Cookie": `ltoken_v2=${token}; ltuid_v2=${uid}; mi18nLang=en-us;`,
            "x-rpc-app_version": "1.5.0",
            "x-rpc-client_type": "5",
            "x-rpc-language": "en-us",
        })
    }
}
export default CoreGenJS