/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserGameRecord {
    retcode: number
    message: string
    Data: UserGameRecordData
}

export interface UserGameRecordData {
    list: List[]
}

export interface List {
    has_role: boolean
    game_id: number
    game_role_id: string
    nickname: string
    region: string
    level: number
    background_image: string
    is_public: boolean
    data: BasicGameRecord[]
    region_name: string
    url: string
    data_switches: DataSwitch[]
    h5_data_switches: any[]
}

export interface BasicGameRecord {
    name: string
    type: number
    value: string
}

export interface DataSwitch {
    switch_id: number
    is_public: boolean
    switch_name: string
}
