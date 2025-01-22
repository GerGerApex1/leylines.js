import { ApiResponse } from "../url";

export type ImaginaryTheaterAPIResponse = ApiResponse<ImaginaryTheaterDTO>

export interface ImaginaryTheaterDTO {
    data:      RawDatum[];
    is_unlock: boolean;
    links:     RawLinks;
}

export interface RawDatum {
    detail:          null;
    stat:            RawStat;
    schedule:        RawSchedule;
    has_data:        boolean;
    has_detail_data: boolean;
}

export interface RawSchedule {
    start_time:      string;
    end_time:        string;
    schedule_type:   number;
    schedule_id:     number;
    start_date_time: RawDateTime;
    end_date_time:   RawDateTime;
}

export interface RawDateTime {
    year:   number;
    month:  number;
    day:    number;
    hour:   number;
    minute: number;
    second: number;
}

export interface RawStat {
    difficulty_id:        number;
    max_round_id:         number;
    heraldry:             number;
    get_medal_round_list: number[];
    medal_num:            number;
    coin_num:             number;
    avatar_bonus_num:     number;
    rent_cnt:             number;
}

export interface RawLinks {
    lineup_link:            string;
    lineup_link_pc:         string;
    strategy_link:          string;
    lineup_publish_link:    string;
    lineup_publish_link_pc: string;
}
