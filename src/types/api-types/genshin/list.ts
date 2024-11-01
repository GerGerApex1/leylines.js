export interface ListCharacters {
    list: List[];
}

export interface List {
    id:                        number;
    icon:                      string;
    name:                      string;
    element:                   Element;
    fetter:                    number;
    level:                     number;
    rarity:                    number;
    actived_constellation_num: number;
    image:                     string;
    is_chosen:                 boolean;
    side_icon:                 string;
    weapon_type:               number;
    weapon:                    Weapon;
}

export enum Element {
    Anemo = "Anemo",
    Cryo = "Cryo",
    Dendro = "Dendro",
    Electro = "Electro",
    Geo = "Geo",
    Hydro = "Hydro",
    Pyro = "Pyro",
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
