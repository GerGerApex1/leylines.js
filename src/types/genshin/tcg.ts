import { ApiResponse } from "../url";

export type TCGAPIResponse = ApiResponse<TCGDTO>
export interface TCGDTO {
    level:                  number;
    nickname:               string;
    avatar_card_num_gained: number;
    avatar_card_num_total:  number;
    action_card_num_gained: number;
    action_card_num_total:  number;
    covers:                 RawCover[];
    replays:                RawReplay[];
    hornor_character:       null;
    challenge_basic:        RawChallengeBasic;
    is_hide_covers:         boolean;
    is_hide_replays:        boolean;
}

export interface RawChallengeBasic {
    schedule: RawTCGPhaseSchedule[];
    nickname: string;
    uid:      string;
    win_cnt:  number;
    medal:    string;
    has_data: boolean;
}

export interface RawTCGPhaseSchedule {
    id:    number;
    name:  string;
    begin: RawBegin;
    end:   RawBegin;
}

export interface RawBegin {
    year:   number;
    month:  number;
    day:    number;
    hour:   number;
    minute: number;
    second: number;
}

export interface RawCover {
    id:          number;
    image:       string;
    category:    string;
    action_cost: RawActionCost[];
    has_data:    boolean;
    image_v2:    string;
}

export interface RawActionCost {
    cost_type:  string;
    cost_value: number;
}

export interface RawReplay {
    game_id:    string;
    self:       RawOpposite;
    opposite:   RawOpposite;
    match_type: string;
    match_time: RawBegin;
    is_win:     boolean;
}

export interface RawOpposite {
    name:        string;
    linups:      string[];
    is_overflow: boolean;
}
