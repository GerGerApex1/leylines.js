import { ApiResponse } from "../url";

export type SpiralAbyssAPIResponse = ApiResponse<SpiralAbyssDTO>;

export interface SpiralAbyssDTO {
    schedule_id:           number;
    start_time:            string;
    end_time:              string;
    total_battle_times:    number;
    total_win_times:       number;
    max_floor:             string;
    reveal_rank:           RawRank[];
    defeat_rank:           RawRank[];
    damage_rank:           RawRank[];
    take_damage_rank:      RawRank[];
    normal_skill_rank:     RawRank[];
    energy_skill_rank:     RawRank[];
    floors:                RawFloor[];
    total_star:            number;
    is_unlock:             boolean;
    is_just_skipped_floor: boolean;
    skipped_floor:         string;
}

export interface RawRank {
    avatar_id:   number;
    avatar_icon: string;
    value:       number;
    rarity:      number;
}

export interface RawFloor {
    index:             number;
    icon:              string;
    is_unlock:         boolean;
    settle_time:       string;
    star:              number;
    max_star:          number;
    levels:            RawLevel[];
    settle_date_time:  null;
    ley_line_disorder: string[];
}

export interface RawLevel {
    index:                     number;
    star:                      number;
    max_star:                  number;
    battles:                   RawBattle[];
    top_half_floor_monster:    RawHalfFloorMonster[];
    bottom_half_floor_monster: RawHalfFloorMonster[];
}

export interface RawBattle {
    index:            number;
    timestamp:        string;
    avatars:          RawSpiralAbyssAvatar[];
    settle_date_time: RawSettleDateTime;
}

export interface RawSpiralAbyssAvatar {
    id:     number;
    icon:   string;
    level:  number;
    rarity: number;
}

export interface RawSettleDateTime {
    year:   number;
    month:  number;
    day:    number;
    hour:   number;
    minute: number;
    second: number;
}

export interface RawHalfFloorMonster {
    name:  string;
    icon:  string;
    level: number;
}
