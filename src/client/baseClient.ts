import Fetch from '../requestclient/RequestClient.js'
import Cache from './cache.js'
class CoreGenJS {
    ltoken: string
    uid: number
    cache: Cache
    fetch: Fetch
    /**
     * 
     * @param {string} token 
     * @param {string} uid 
     */
    constructor(
        token,
        uid
    ) {
        this.ltoken = token,
        this.uid = uid
        this.cache = new Cache()
        this.fetch = new Fetch({
            ltoken_v2: this.ltoken,
            ltuid_v2: this.uid
        })
    }
}
export default CoreGenJS