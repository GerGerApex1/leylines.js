import { RawChallengeBasic, RawCover, RawReplay, TCGDTO } from "../../types/genshin/tcg";

export default class TCG {
    level: number;
    nickname: string;
    avatar_card_num_gained: number;
    avatar_card_num_total: number;
    action_card_num_gained: number;
    action_card_num_total: number;
    covers: RawCover[];
    replays: RawReplay[];
    hornor_character: null;
    challenge_basic: RawChallengeBasic;
    is_hide_covers: boolean;
    is_hide_replays: boolean;

    constructor(data: TCGDTO) {
        this.level = data.level;
        this.nickname = data.nickname;
        this.avatar_card_num_gained = data.avatar_card_num_gained;
        this.avatar_card_num_total = data.avatar_card_num_total;
        this.action_card_num_gained = data.action_card_num_gained;
        this.action_card_num_total = data.action_card_num_total;
        this.covers = data.covers;
        this.replays = data.replays;
        this.hornor_character = data.hornor_character;
        this.challenge_basic = data.challenge_basic;
        this.is_hide_covers = data.is_hide_covers;
        this.is_hide_replays = data.is_hide_replays;
    }
}