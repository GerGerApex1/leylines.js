class Cache {
    cachedData: {}
    debug: boolean
    /**
     * 
     * @param {booleen} enableDebug 
     */
    constructor(enableDebug = false) {
        this.cachedData = {}
        this.debug = enableDebug
    }
    get(key:any) {
        const requestedCache = this.cachedData[key]
        if(requestedCache) {
            return requestedCache
        } else {
            requestedCache
        }
    }
    set(key: any, value:any ) {
        if(key) {
            this.cachedData[key] = value
            return;
        } else {
            return;
        }
    }
}
export default Cache