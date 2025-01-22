import CharacterIDs, { formatCharacterName, getCharacterIdByName } from "../../types/characterIds";
import { Relic, Weapon } from "../../types/common/common";
import { DetailedCharacterDTO, RawDetailedCharacterData, Properties, RawRelicPropertyOptions, ItemWikiProperty, RawConstellation, RawCharacterStat, RawCharacterBasic, RawRecommendedRelic, RawSkill } from "../../types/genshin/detail";


export default class Character {
    // Base character properties
    base: RawCharacterBasic;
    weapon: Weapon;
    relics: Relic[];
    constellations: RawConstellation[];
    costumes: any[];
    
    // Stats properties
    selected_properties: RawCharacterStat[];
    base_properties: RawCharacterStat[];
    extra_properties: RawCharacterStat[];
    element_properties: RawCharacterStat[];
    skills: RawSkill[];
    recommend_relic_property: RawRecommendedRelic;

    constructor(data: RawDetailedCharacterData) {
        this.base = data.base;
        this.weapon = data.weapon;
        this.relics = data.relics;
        this.constellations = data.constellations;
        this.costumes = data.costumes;
        this.selected_properties = data.selected_properties;
        this.base_properties = data.base_properties;
        this.extra_properties = data.extra_properties;
        this.element_properties = data.element_properties;
        this.skills = data.skills;
        this.recommend_relic_property = data.recommend_relic_property;
    }
}
// TODO: make this better
type CharacterList = {
    id: number;
    name: string;
    data: Character
}
// TODO: What the hell is Wiki?
export class CharacterDetailedList {
    list: CharacterList[];
    property_map: Properties;
    relic_property_options: RawRelicPropertyOptions;
    relic_wiki: ItemWikiProperty;
    weapon_wiki: ItemWikiProperty;
    avatar_wiki: ItemWikiProperty;

    constructor(data: DetailedCharacterDTO) {
        this.list = []
        this.property_map = data.property_map;
        this.relic_property_options = data.relic_property_options;
        this.relic_wiki = data.relic_wiki;
        this.weapon_wiki = data.weapon_wiki;
        this.avatar_wiki = data.avatar_wiki;

        for (let index = 0; index < data.list.length; index++) {
            const element = data.list[index];
            this.list.push({ name : element.base.name, id: element.base.id, data: new Character(element) });
        }
    }
    /**
     * Retrieves a character object by its unique identifier.
     *
     * @param id - The unique identifier of the character.
     * @returns The character object if found, otherwise `undefined`.
     */
    getCharacterById(id: number | CharacterIDs): Character | undefined {
        return this.list.find(c => c.id === id)?.data;
    }

    getCharacterByName(name: string): Character | undefined {
        return this.list.find(c => getCharacterIdByName(name) === c.id)?.data;
    }
    
    getCharacterByIndex(index: number): Character | undefined {
        return this.list[index]?.data;
    }
}