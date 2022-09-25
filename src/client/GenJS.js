import Fetch from '../requestclient/RequestClient.js'
import Cache from './cache.js'
class CoreGenJS {
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
            ltoken: this.ltoken,
            ltuid: this.uid
        })
    }
}
export default CoreGenJS