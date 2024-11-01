import { GenshinServer } from "src/types/url.js";
import endpoints from "../endpoints/index.js";
import ds from '../utils/ds.js';
import CoreGenJS from "./baseClient.js";

class GenshinGenJS extends CoreGenJS {
  async fetchCharacters(PlayerUID: string, server: GenshinServer): Promise<any> {
    const fetchData = {
      server: "os_asia",
      role_id: "820244971",
      character_ids: [10000052],
    };

    const fetchedData = await this.fetch.fetch('POST', endpoints.genshin.battle_chronicle.CHARACTER_DETAILED, {
      DS: ds("6s25p5ox5y14umn1p61aqyyvbvvl3lrt"),
    }, fetchData, { X_APP: true });

    console.log(JSON.stringify(fetchedData.data.data));
    this.cache.set('player_info_character', fetchedData);

    return fetchedData.data;
  }

  async fetchUserData(PlayerUID: string, server: "os_usa" | "os_euro" | "os_asia" | "os_cht"): Promise<any> {
    // Implement fetchUserData method here
  }
}

export default GenshinGenJS;