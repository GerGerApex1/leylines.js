const GENSHIN_BASE_URL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api/"
const HONKAI_BASE_URL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api/"
const genshin_battle_chronicle = {
    INDEX: GENSHIN_BASE_URL + 'index',
    TOOL_OVERSEA: GENSHIN_BASE_URL + "tool_oversea",
    SPIRAL_ABYSS: GENSHIN_BASE_URL + 'spiralAbyss',
    ACTIVITIES: GENSHIN_BASE_URL + "activities",
    CHARACTERS_LISTS: GENSHIN_BASE_URL + "character/list",
    CHARACTER_DETAILED: GENSHIN_BASE_URL + "character/detail"
}
const honkai_battle_chronicle = {
    INDEX: HONKAI_BASE_URL + 'index',
    BATTLE_FIELD_REPORT: HONKAI_BASE_URL + "battleFieldReport",
    LATEST_OLD_ABYSS_REPORT: HONKAI_BASE_URL + 'latestOldAbyssReport',
    GOD_WAR: HONKAI_BASE_URL + "godWar",
    CHARACTERS: HONKAI_BASE_URL + "characters"
}
export {
    honkai_battle_chronicle,
    genshin_battle_chronicle
}