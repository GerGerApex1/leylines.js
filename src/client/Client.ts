import type { CharacterListParams, GenshinRegion } from "../types/url.js";

//import ds from '../utils/ds.js';
import CoreGenJS from "./BaseClient.js";
import type { FILTER_OPTIONS } from "../types/characterFilter.js";
import type CharacterIDs from "../types/characterIds.js";
import { genshin_battle_chronicle, getGenshinApi } from "../types/ApiConstants.js";
import Character, { CharacterDetailedList } from "../models/genshin/Character.js";
import { GenshinCharacterListAPIResponse, GenshinCharacterListDTO } from "../types/genshin/list.js";
import { TCGAPIResponse } from "../types/genshin/tcg.js";
import { DetailedCharacterAPIResponse } from "../types/genshin/detail.js";
import TCG from "../models/genshin/TCG.js";
import CharacterList from "../models/genshin/CharacterList.js";
import GameAccountData from "../models/genshin/GameAccountData.js";
import { GameAccountDataAPIResponse } from "../types/genshin/index.js";
import SpiralAbyss from "../models/genshin/SpiralAbyss.js";
import { SpiralAbyssAPIResponse } from "../types/genshin/spiralabyss.js";
import { EnvisagedEchoAPIResponse } from "../types/genshin/envisaged_echo.js";
import EnvisagedEcho from "../models/genshin/EnvisagedEcho.js";
// DS: ds("6s25p5ox5y14umn1p61aqyyvbvvl3lrt"),
class Client extends CoreGenJS {
  async fetchAllCharacters(PlayerUID: number, server: GenshinRegion, filter?: FILTER_OPTIONS): Promise<CharacterList> {
    const cacheKey = `player_info_characters_${PlayerUID}_${server}`;
    const cachedData = this.cache.get(cacheKey) as GenshinCharacterListAPIResponse;
    if (cachedData) return new CharacterList(cachedData.data, this, PlayerUID, server);

    const fetchData: CharacterListParams = {
      server: server,
      role_id: PlayerUID,
      elements: [...(filter?.element ?? [])],
      weapon_type: [...(filter?.weapon ?? [])],
      sort_list: 1
    };
    const fetchedData = await this.request.post(getGenshinApi(genshin_battle_chronicle.CHARACTERS_LISTS), fetchData) as GenshinCharacterListAPIResponse;
    this.cache.set(cacheKey, fetchedData);

    return new CharacterList(fetchedData.data, this, PlayerUID, server);
  }

  async fetchTcgData(PlayerUID: number, server: "os_usa" | "os_euro" | "os_asia" | "os_cht"): Promise<TCG> {
    const cacheKey = `player_info_basic_tcg_${PlayerUID}_${server}`;
    const cachedData = this.cache.get(cacheKey) as TCGAPIResponse;
    if (cachedData) return new TCG(cachedData.data);

    const fetchedData = await this.request.post(getGenshinApi(genshin_battle_chronicle.BASIC_TCG_DATA), { role_id: PlayerUID, server: server }) as TCGAPIResponse;
    this.cache.set(cacheKey, fetchedData);

    return new TCG(fetchedData.data);
  }

  async fetchDetailedCharacterData(PlayerUID: number, server: "os_usa" | "os_euro" | "os_asia" | "os_cht", character_ids: Array<CharacterIDs>): Promise<CharacterDetailedList> {
    const cacheKey = `player_info_character_detailed_${PlayerUID}_${server}`;
    const cachedData = this.cache.get(cacheKey) as DetailedCharacterAPIResponse;
    if (cachedData) return new CharacterDetailedList(cachedData.data);

    const fetchedData = await this.request.post(getGenshinApi(genshin_battle_chronicle.CHARACTER_DETAILED), { role_id: PlayerUID, server: server, character_ids: character_ids }) as DetailedCharacterAPIResponse;
    this.cache.set(cacheKey, fetchedData);

    return new CharacterDetailedList(fetchedData.data);
  }

  async fetchAccountData(PlayerUID: number, server: "os_usa" | "os_euro" | "os_asia" | "os_cht", list_avatar: boolean): Promise<GameAccountData> {
    const cacheKey = `account_data_${PlayerUID}_${server}`;
    const cachedData = this.cache.get(cacheKey) as GameAccountDataAPIResponse;
    if (cachedData) return new GameAccountData(cachedData.data);

    const fetchedData = await this.request.get(getGenshinApi(genshin_battle_chronicle.INDEX), { role_id: PlayerUID, server: server, avatar_list_type: list_avatar ? 1 : 0 }) as GameAccountDataAPIResponse;
    this.cache.set(cacheKey, fetchedData);

    return new GameAccountData(fetchedData.data);
  }

  async fetchSpiralAbyssData(PlayerUID: number, server: "os_usa" | "os_euro" | "os_asia" | "os_cht", previous_lunar_phase: boolean): Promise<SpiralAbyss> {
    const cacheKey = `spiral_abyss_data_${PlayerUID}_${server}`;
    const cachedData = this.cache.get(cacheKey) as SpiralAbyssAPIResponse;
    if (cachedData) return new SpiralAbyss(cachedData.data);

    const fetchedData = await this.request.get(getGenshinApi(genshin_battle_chronicle.SPIRAL_ABYSS), { role_id: PlayerUID, server: server, schedule_type: previous_lunar_phase ? 2 : 1 }) as SpiralAbyssAPIResponse;
    this.cache.set(cacheKey, fetchedData);

    return new SpiralAbyss(fetchedData.data);
  }

  async fetchEnvisagedEchoData(PlayerUID: number, server: "os_usa" | "os_euro" | "os_asia" | "os_cht", nickname: string): Promise<EnvisagedEcho> {
    const cacheKey = `envisaged_echo_data_${PlayerUID}_${server}`;
    const cachedData = this.cache.get(cacheKey) as EnvisagedEchoAPIResponse;
    if (cachedData) return new EnvisagedEcho(cachedData.data);

    const fetchedData = await this.request.get(getGenshinApi(genshin_battle_chronicle.BASIC_TCG_DATA), { role_id: PlayerUID, server: server, nickname: nickname }) as EnvisagedEchoAPIResponse;
    this.cache.set(cacheKey, fetchedData);

    return new EnvisagedEcho(fetchedData.data);
  }
}
export default Client