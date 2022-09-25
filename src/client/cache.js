class Cache {
    /**
     * 
     * @param {booleen} enableDebug 
     */
    constructor(enableDebug = false) {
        this.cachedData = {}
        this.debug = enableDebug
    }
    get(key) {
        const requestedCache = this.cachedData[key]
        if(requestedCache) {
            return requestedCache
        } else {
            requestedCache
        }
    }
    set(key, value) {
        if(key) {
            this.cachedData[key] = value
            return;
        } else {
            return;
        }
    }
}
export default Cache