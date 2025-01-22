import { RawRoleCombat } from "../../types/genshin/index";

export default class ImaginaryTheater {
    is_unlock: boolean;
    max_round_id: number;
    has_data: boolean;
    has_detail_data: boolean;

    constructor(data: RawRoleCombat) {
        this.is_unlock = data.is_unlock;
        this.max_round_id = data.max_round_id;
        this.has_data = data.has_data;
        this.has_detail_data = data.has_detail_data;
    }
}
