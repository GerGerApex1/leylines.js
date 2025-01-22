import Client from "../../client/Client";
import { RawCharacterBasic } from "../../types/genshin/detail";
import { GenshinCharacterListDTO } from "../../types/genshin/list";
import { GenshinRegion } from "../../types/url";
import Character from "./Character";

export default class CharacterList {
    list: RawCharacterBasic[];
    private client: Client;
    private PlayerUID: number;
    private region: GenshinRegion
    constructor(data: GenshinCharacterListDTO, client: Client, PlayerUID: number, region: GenshinRegion) {
        this.list = data.list;
        this.client = client;
        this.PlayerUID = PlayerUID;
        this.region = region;
    }
    async fetchDetailedCharacter(character: RawCharacterBasic): Promise<Character> {
        const characterData = await this.client.fetchDetailedCharacterData(this.PlayerUID, this.region, [character.id])
        return characterData.list[0].data;
    }
}
