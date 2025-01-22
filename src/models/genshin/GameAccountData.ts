import { GameAccountDataDTO, RawRole, RawStats, RawWorldExploration, RawHome } from "../../types/genshin/index";
import { Avatar } from "../../types/common/common";

export default class GameAccountData {
    role: RawRole;
    avatars: Avatar[];
    stats: RawStats;
    city_explorations: any[];
    world_explorations: RawWorldExploration[];
    homes: RawHome[];
    query_tool_link: string;
    query_tool_image: string;

    constructor(data: GameAccountDataDTO) {
        this.role = data.role;
        this.avatars = data.avatars;
        this.stats = data.stats;
        this.city_explorations = data.city_explorations;
        this.world_explorations = data.world_explorations;
        this.homes = data.homes;
        this.query_tool_link = data.query_tool_link;
        this.query_tool_image = data.query_tool_image;
    }
}
