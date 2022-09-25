import type { BasicPlayerInfo } from "./common"
export default interface RawCharacterData {
    retcode: number
    message: string
    data: {
        avatars: CharacterData[]
        role: BasicPlayerInfo
    }
}
export interface CharacterData {
    id: number
    image: string
    icon: string
    name: string
    element: string
    fetter: number
    level: number
    rarity: number
    weapon: CharacterWeaponData
    reliquaries: ArtifactData[]
    constellations: CharacterConstellationData[]
    actived_constellation_num: 1
    costumes: [] | CharacterOutfitData
    external: null
}
export interface CharacterWeaponData {
    id: number
    name: number
    icon: string
    type: number
    rarity: number
    level: number
    promote_level: number
    type_name: string
    desc: string
    affix_level: number
}
export interface ArtifactData {
    id: number
    name: string
    icon: string
    pos: number
    rarity: number
    level: number
    set: {
        id: number
        name: string
        affixes: [
            {
                activation_number: number
                effect: string
            },
            {
                activation_number: number
                effect: string
            }
        ]
    }
    pos_name: string
}
export interface CharacterConstellationData {
    id: number
    name: string
    icon: string
    effect: string
    is_actived: boolean
    pos: number
}
export interface CharacterOutfitData {
    id: number
    name: string
    icon: string
}
