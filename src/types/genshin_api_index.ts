import type { BasicPlayerInfo } from "./common"
export default interface PlayerData {
    role: BasicPlayerInfo
    avatars: CharacterData[]
    stats: PlayerStats
    city_exploration: []
    world_exploration: PlayerWorldExploration[]
    homes: HomesPlayer[]
}
export interface RawPlayerData {
    retcode: number
    message: string
    data: PlayerData
}
interface CharacterData {
    id: number
    image: string
    name: string
    element: string
    fetter: number
    level: number
    rarity: number
    actived_constellation_num: number
    card_image: string
    is_chosen: boolean
}
interface PlayerStats {
    active_day_number: number
    achievement_number: number
    anemoculus_number: number
    geoculus_number: number
    avatar_number: number
    way_point_number: number
    domain_number: number
    spiral_abyss: string
    precious_chest_number: number
    luxurious_chest_number: number
    exquisite_chest_number: number
    common_chest_number: number
    electroculus_number: number
    magic_chest_number: number
    dendroculus_number: number
}
interface PlayerWorldExploration {
    level: number
    exploration_percentage: number
    icon: string
    name: string
    type: string
    offerings: WorldExplorationOfferings[]
    id: number
    parent_id: number
    map_url: string
    strategy_url: string
    background_image: string
    inner_icon: string
    cover: string
}
interface WorldExplorationOfferings {
    name: string
    level: number
    icon: string
}
interface HomesPlayer {
    level: number
    visit_num: number
    comform_num: number
    item_num: number
    name: string
    icon: string
    comform_level_name: string
    comform_level_icon: string
}
