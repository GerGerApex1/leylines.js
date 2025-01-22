export interface RelicProperty {
	property_type: number;
	value: string;
	times: number;
}

export interface Relic {
	id: number;
	name: string;
	icon: string;
	pos: number;
	rarity: number;
	level: number;
	set: Set;
	pos_name: string;
	main_property: RelicProperty;
	sub_property_list: RelicProperty[];
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



export interface Sub_property {
	property_type: number;
	base: string;
	add: string;
	final: string;
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

