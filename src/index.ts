import Client from "./client/Client.js"
import CharacterIDs from "./types/characterIds.js"
import type { FILTER_OPTIONS, ELEMENTS_FILTER } from "./types/characterFilter.js"

// Export main classes and types
export {
    CharacterIDs,
    FILTER_OPTIONS,
    ELEMENTS_FILTER,
    Client as default
}

// Export all type definitions
export * from './types/genshin/index.js'
export * from './types/genshin/detail.js'
export * from './types/genshin/rolecombat.js'
export * from './types/genshin/spiralabyss.js'
export * from './types/genshin/envisaged_echo.js'
export * from './types/genshin/tcg.js'
export * from './types/common/common.js'
export * from './types/url.js'

// Export API constants
export {
    HOYOLAB_API_BASE_URL,
    GENSHIN,
    genshin_battle_chronicle,
    getGenshinApi
} from './types/ApiConstants.js'

// Export models
export { default as Character } from './models/genshin/Character.js'
export { default as TCG } from './models/genshin/TCG.js'
export { default as SpiralAbyss } from './models/genshin/SpiralAbyss.js'
export { default as EnvisagedEcho } from './models/genshin/EnvisagedEcho.js'
export { default as ImaginaryTheater } from './models/genshin/ImaginaryTheater.js'
export { default as GameAccountData } from './models/genshin/GameAccountData.js'
export { default as CharacterList } from './models/genshin/CharacterList.js'