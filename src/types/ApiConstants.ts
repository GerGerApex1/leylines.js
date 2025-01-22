export const HOYOLAB_API_BASE_URL = "https://sg-public-api.hoyolab.com"
export const GENSHIN = "/event/game_record/genshin/api"
export const HONKAI =  "/event/game_record/genshin/api"
export const genshin_battle_chronicle = {
    INDEX: '/index',
    TOOL_OVERSEA: "/tool_oversea",
    SPIRAL_ABYSS: '/spiralAbyss',
    ACTIVITIES: "/activities",
    CHARACTERS_LISTS: "/character/list",
    CHARACTER_DETAILED: "/character/detail",
    ENVISAGED_ECHO: "/char_master",
    BASIC_TCG_DATA: "/gcg/basic_info",
}
export const honkai_battle_chronicle = {
    INDEX: '/index',
    BATTLE_FIELD_REPORT: "/battleFieldReport",
    LATEST_OLD_ABYSS_REPORT: '/latestOldAbyssReport',
    GOD_WAR: "/godWar",
    CHARACTERS: "/characters"
}
export function getGenshinApi(endpoint: string): string {
    return `${GENSHIN}${endpoint}`
}
export function getFullGenshinApi(endpoint: string): string {
    return `${HOYOLAB_API_BASE_URL}${GENSHIN}${endpoint}`
}
export function getHonkaiApi(endpoint: string): string {
    return `${GENSHIN}${endpoint}`
}
export function getFullHonkaiApi(endpoint: string): string {
    return `${HOYOLAB_API_BASE_URL}${GENSHIN}${endpoint}`
}