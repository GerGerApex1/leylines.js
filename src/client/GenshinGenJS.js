import endpoints from "../endpoints/index.js";
import ds from '../utils/ds.js'
import CoreGenJS from "./GenJS.js";
class GenshinGenJS extends CoreGenJS {
    /**
     * @param {string} PlayerUID
     * @param {"os_usa" |"os_euro" |"os_asia" |"os_cht" |}
     */
    async fetchCharacters(PlayerUID, server) {
        const fetchData = {
            role_id: PlayerUID,
            server
        }
        const fetchedData = await this.fetch.fetch('POST', endpoints.genshin.battle_chronicle.CHARACTERS, {
            DS: ds("6s25p5ox5y14umn1p61aqyyvbvvl3lrt")
        }, fetchData, { X_APP: true })
        this.cache.set('player_info_character', fetchedData.data)
        console.log(fetchedData.data)
        return fetchedData.data.avatars
    }
    /**
     * @param {string} PlayerUID
     * @param {"os_usa" |"os_euro" |"os_asia" |"os_cht" |}
     */
    async fetchUserData(PlayerUID, server) {

    }
}
export default GenshinGenJS