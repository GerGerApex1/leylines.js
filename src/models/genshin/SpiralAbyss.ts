import { SpiralAbyssDTO, RawRank, RawFloor } from "../../types/genshin/spiralabyss";

export default class SpiralAbyss {
    scheduleId: number;
    startTime: string;
    endTime: string;
    totalBattles: number;
    totalWins: number;
    maxFloor: string;
    totalStars: number;
    isUnlock: boolean;
    revealRank: RawRank[];
    floors: RawFloor[];

    constructor(data: SpiralAbyssDTO) {
        this.scheduleId = data.schedule_id;
        this.startTime = data.start_time;
        this.endTime = data.end_time;
        this.totalBattles = data.total_battle_times;
        this.totalWins = data.total_win_times;
        this.maxFloor = data.max_floor;
        this.totalStars = data.total_star;
        this.isUnlock = data.is_unlock;
        this.revealRank = data.reveal_rank;
        this.floors = data.floors;
    }
}
