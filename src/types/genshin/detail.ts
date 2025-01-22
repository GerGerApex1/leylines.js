import { Weapon, Relic } from '../common/common.js';
import { ApiResponse } from '../url.js';

export type DetailedCharacterAPIResponse = ApiResponse<DetailedCharacterDTO>
export interface DetailedCharacterDTO {
	list: RawDetailedCharacterData[];
	property_map: Properties;
	relic_property_options: RawRelicPropertyOptions;
	relic_wiki: ItemWikiProperty;
	weapon_wiki: ItemWikiProperty;
	avatar_wiki: ItemWikiProperty;
}

export interface RawCharacterBasic {
	id: number;
	icon: string;
	name: string;
	element: string;
	fetter: number;
	level: number;
	rarity: number;
	actived_constellation_num: number;
	image: string;
	is_chosen: boolean;
	side_icon: string;
	weapon_type: number;
	weapon: Weapon;
}

export interface RawDetailedCharacterData {
	base: RawCharacterBasic;
	weapon: Weapon;
	relics: Relic[];
	constellations: RawConstellation[];
	costumes: any[];
	selected_properties: RawCharacterStat[];
	base_properties: RawCharacterStat[];
	extra_properties: RawCharacterStat[];
	element_properties: RawCharacterStat[];
	skills: RawSkill[];
	recommend_relic_property: RawRecommendedRelic;
}

export interface RawCharacterOutfit {
	id: number;
	name: string;
	icon: string;
}
export interface RawAffixe {
	activation_number: number;
	effect: string;
}

export interface RawConstellation {
	id: number;
	name: string;
	icon: string;
	effect: string;
	is_actived: boolean;
	pos: number;
}

export interface RawCharacterStat {
	property_type: number;
	base: string;
	add: string;
	final: string;
}

export interface RawSkill_affix_list {
	name: string;
	value: string;
}

export interface RawSkill {
	skill_id: number;
	skill_type: number;
	level: number;
	desc: string;
	skill_affix_list: RawSkill_affix_list[];
	icon: string;
	is_unlock: boolean;
	name: string;
}

export interface RawRecommend_property {
	sand_main_property_list: number[];
	goblet_main_property_list: number[];
	circlet_main_property_list: number[];
	sub_property_list: number[];
}

export interface RawRecommendedRelic {
	recommend_properties: RawRecommend_property;
	custom_properties?: any;
	has_set_recommend_prop: boolean;
}

export type Properties = {
    [key: string]: {
        property_type: number;
        name: string;
        icon: string;
        filter_name: string;
    };
};

export type ItemWikiProperty = {
    [key: string]: string
};

export interface RawRelicPropertyOptions {
	sand_main_property_list: number[];
	goblet_main_property_list: number[];
	circlet_main_property_list: number[];
	sub_property_list: number[];
}

export interface RawRelic_wiki {
	77553: string;
	94513: string;
	94524: string;
	94534: string;	
	94543: string;
}