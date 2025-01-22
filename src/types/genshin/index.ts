import type { Weapon, Relic, Avatar } from "../common/common.js";
import { ApiResponse } from "../url.js";

export type GameAccountDataAPIResponse = ApiResponse<GameAccountDataDTO>
export interface GameAccountDataDTO {
    role:               RawRole;
    avatars:            Avatar[];
    stats:              RawStats;
    city_explorations:  any[];
    world_explorations: RawWorldExploration[];
    homes:              RawHome[];
    query_tool_link:    string;
    query_tool_image:   string;
}

export interface RawHome {
    level:              number;
    visit_num:          number;
    comfort_num:        number;
    item_num:           number;
    name:               string;
    icon:               string;
    comfort_level_name: string;
    comfort_level_icon: string;
}

export interface RawRole {
    AvatarUrl:      string;
    nickname:       string;
    region:         string;
    level:          number;
    game_head_icon: string;
}

export interface RawStats {
    active_day_number:      number;
    achievement_number:     number;
    anemoculus_number:      number;
    geoculus_number:        number;
    avatar_number:          number;
    way_point_number:       number;
    domain_number:          number;
    spiral_abyss:           string;
    precious_chest_number:  number;
    luxurious_chest_number: number;
    exquisite_chest_number: number;
    common_chest_number:    number;
    electroculus_number:    number;
    magic_chest_number:     number;
    dendroculus_number:     number;
    hydroculus_number:      number;
    pyroculus_number:       number;
    field_ext_map:          { [key: string]: RawFieldEXTMap };
    role_combat:            RawRoleCombat;
    full_fetter_avatar_num: number;
}

export interface RawFieldEXTMap {
    link:        string;
    backup_link: string;
}

export interface RawRoleCombat {
    is_unlock:       boolean;
    max_round_id:    number;
    has_data:        boolean;
    has_detail_data: boolean;
}

export interface RawWorldExploration {
    level:                  number;
    exploration_percentage: number;
    icon:                   string;
    name:                   string;
    type:                   RawType;
    offerings:              RawOffering[];
    id:                     number;
    parent_id:              number;
    map_url:                string;
    strategy_url:           string;
    background_image:       string;
    inner_icon:             string;
    cover:                  string;
    area_exploration_list:  RawAreaExplorationList[];
    boss_list:              RawBossList[];
    is_hot:                 boolean;
    index_active:           boolean;
    detail_active:          boolean;
    seven_statue_level:     number;
    natan_reputation:       RawNatanReputation | null;
    world_type:             number;
}

export interface RawAreaExplorationList {
    name:                   string;
    exploration_percentage: number;
}

export interface RawBossList {
    name:     string;
    kill_num: number;
}

export interface RawNatanReputation {
    tribal_list: RawTribalList[];
}

export interface RawTribalList {
    icon:  string;
    image: string;
    name:  string;
    id:    number;
    level: number;
}

export interface RawOffering {
    name:  string;
    level: number;
    icon:  string;
}

export enum RawType {
    Offering = "Offering",
    Reputation = "Reputation",
    TypeUnknown = "TypeUnknown",
}
