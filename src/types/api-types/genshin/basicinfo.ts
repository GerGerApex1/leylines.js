export interface BasicType {
    level:                  number;
    nickname:               string;
    avatar_card_num_gained: number;
    avatar_card_num_total:  number;
    action_card_num_gained: number;
    action_card_num_total:  number;
    covers:                 Cover[];
    replays:                Replay[];
    hornor_character:       null;
    challenge_basic:        ChallengeBasic;
    is_hide_covers:         boolean;
    is_hide_replays:        boolean;
}

export interface ChallengeBasic {
    schedule: Schedule;
    nickname: string;
    uid:      string;
    win_cnt:  number;
    medal:    string;
    has_data: boolean;
}

export interface Schedule {
    id:    number;
    name:  string;
    begin: Begin;
    end:   Begin;
}

export interface Begin {
    year:   number;
    month:  number;
    day:    number;
    hour:   number;
    minute: number;
    second: number;
}

export interface Cover {
    id:          number;
    image:       string;
    category:    string;
    action_cost: ActionCost[];
    has_data:    boolean;
    image_v2:    string;
}

export interface ActionCost {
    cost_type:  string;
    cost_value: number;
}

export interface Replay {
    game_id:    string;
    self:       Opposite;
    opposite:   Opposite;
    match_type: string;
    match_time: Begin;
    is_win:     boolean;
}

export interface Opposite {
    name:        string;
    linups:      string[];
    is_overflow: boolean;
}
