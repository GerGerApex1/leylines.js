class Cache {
    cachedData: { [key: string]: { value: object, timestamp: number } };
    debug: boolean;
    timeLimit: number;

    /**
     * 
     * @param {boolean} enableDebug 
     * @param {number} timeLimit - Time limit in milliseconds
     */
    constructor(enableDebug = false, timeLimit = 300000) {
        this.cachedData = {};
        this.debug = enableDebug;
        this.timeLimit = timeLimit;
    }

    get(key: string) {
        const requestedCache = this.cachedData[key];
        if (requestedCache) {
            const currentTime = Date.now();
            if (currentTime - requestedCache.timestamp < this.timeLimit) {
                return requestedCache.value;
            } else {
                delete this.cachedData[key];
            }
        }
        return null;
    }

    set(key: string, value: any) {
        if (key) {
            this.cachedData[key] = { value: value, timestamp: Date.now() };
        }
    }
}

export default Cache;