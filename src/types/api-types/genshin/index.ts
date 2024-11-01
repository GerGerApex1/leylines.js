export interface Index {
    role:               Role;
    avatars:            Avatar[];
    stats:              Stats;
    city_explorations:  any[];
    world_explorations: WorldExploration[];
    homes:              Home[];
    query_tool_link:    string;
    query_tool_image:   string;
}

export interface Avatar {
    id:                        number;
    image:                     string;
    name:                      string;
    element:                   string;
    fetter:                    number;
    level:                     number;
    rarity:                    number;
    actived_constellation_num: number;
    card_image:                string;
    is_chosen:                 boolean;
    weapon:                    Weapon;
    relics:                    Relic[];
}

export interface Relic {
    id:                number;
    name:              string;
    icon:              string;
    pos:               number;
    rarity:            number;
    level:             number;
    set:               Set;
    pos_name:          string;
    main_property:     null;
    sub_property_list: any[];
}

export interface Set {
    id:      number;
    name:    string;
    affixes: Affix[];
}

export interface Affix {
    activation_number: number;
    effect:            string;
}

export interface Weapon {
    id:          number;
    icon:        string;
    type:        number;
    rarity:      number;
    level:       number;
    affix_level: number;
    name:        string;
}

export interface Home {
    level:              number;
    visit_num:          number;
    comfort_num:        number;
    item_num:           number;
    name:               string;
    icon:               string;
    comfort_level_name: string;
    comfort_level_icon: string;
}

export interface Role {
    AvatarUrl:      string;
    nickname:       string;
    region:         string;
    level:          number;
    game_head_icon: string;
}

export interface Stats {
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
    field_ext_map:          { [key: string]: FieldEXTMap };
    role_combat:            RoleCombat;
    full_fetter_avatar_num: number;
}

export interface FieldEXTMap {
    link:        string;
    backup_link: string;
}

export interface RoleCombat {
    is_unlock:       boolean;
    max_round_id:    number;
    has_data:        boolean;
    has_detail_data: boolean;
}

export interface WorldExploration {
    level:                  number;
    exploration_percentage: number;
    icon:                   string;
    name:                   string;
    type:                   Type;
    offerings:              Offering[];
    id:                     number;
    parent_id:              number;
    map_url:                string;
    strategy_url:           string;
    background_image:       string;
    inner_icon:             string;
    cover:                  string;
    area_exploration_list:  AreaExplorationList[];
    boss_list:              BossList[];
    is_hot:                 boolean;
    index_active:           boolean;
    detail_active:          boolean;
    seven_statue_level:     number;
    natan_reputation:       NatanReputation | null;
    world_type:             number;
}

export interface AreaExplorationList {
    name:                   string;
    exploration_percentage: number;
}

export interface BossList {
    name:     string;
    kill_num: number;
}

export interface NatanReputation {
    tribal_list: TribalList[];
}

export interface TribalList {
    icon:  string;
    image: string;
    name:  string;
    id:    number;
    level: number;
}

export interface Offering {
    name:  string;
    level: number;
    icon:  string;
}

export enum Type {
    Offering = "Offering",
    Reputation = "Reputation",
    TypeUnknow = "TypeUnknow",
}
