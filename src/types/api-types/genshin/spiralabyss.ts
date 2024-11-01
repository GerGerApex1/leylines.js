export interface SpiralAbyss {
    retcode: number;
    message: string;
    data:    Data;
}

export interface Data {
    schedule_id:           number;
    start_time:            string;
    end_time:              string;
    total_battle_times:    number;
    total_win_times:       number;
    max_floor:             string;
    reveal_rank:           Rank[];
    defeat_rank:           Rank[];
    damage_rank:           Rank[];
    take_damage_rank:      Rank[];
    normal_skill_rank:     Rank[];
    energy_skill_rank:     Rank[];
    floors:                Floor[];
    total_star:            number;
    is_unlock:             boolean;
    is_just_skipped_floor: boolean;
    skipped_floor:         string;
}

export interface Rank {
    avatar_id:   number;
    avatar_icon: string;
    value:       number;
    rarity:      number;
}

export interface Floor {
    index:             number;
    icon:              string;
    is_unlock:         boolean;
    settle_time:       string;
    star:              number;
    max_star:          number;
    levels:            Level[];
    settle_date_time:  null;
    ley_line_disorder: string[];
}

export interface Level {
    index:                     number;
    star:                      number;
    max_star:                  number;
    battles:                   Battle[];
    top_half_floor_monster:    HalfFloorMonster[];
    bottom_half_floor_monster: HalfFloorMonster[];
}

export interface Battle {
    index:            number;
    timestamp:        string;
    avatars:          Avatar[];
    settle_date_time: SettleDateTime;
}

export interface Avatar {
    id:     number;
    icon:   string;
    level:  number;
    rarity: number;
}

export interface SettleDateTime {
    year:   number;
    month:  number;
    day:    number;
    hour:   number;
    minute: number;
    second: number;
}

export interface HalfFloorMonster {
    name:  string;
    icon:  string;
    level: number;
}
