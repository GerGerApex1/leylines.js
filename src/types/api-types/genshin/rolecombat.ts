export interface ImaginaryTheater {
    data:      Datum[];
    is_unlock: boolean;
    links:     Links;
}

export interface Datum {
    detail:          null;
    stat:            Stat;
    schedule:        Schedule;
    has_data:        boolean;
    has_detail_data: boolean;
}

export interface Schedule {
    start_time:      string;
    end_time:        string;
    schedule_type:   number;
    schedule_id:     number;
    start_date_time: DateTime;
    end_date_time:   DateTime;
}

export interface DateTime {
    year:   number;
    month:  number;
    day:    number;
    hour:   number;
    minute: number;
    second: number;
}

export interface Stat {
    difficulty_id:        number;
    max_round_id:         number;
    heraldry:             number;
    get_medal_round_list: number[];
    medal_num:            number;
    coin_num:             number;
    avatar_bonus_num:     number;
    rent_cnt:             number;
}

export interface Links {
    lineup_link:            string;
    lineup_link_pc:         string;
    strategy_link:          string;
    lineup_publish_link:    string;
    lineup_publish_link_pc: string;
}
