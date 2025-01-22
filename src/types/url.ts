export type GenshinRegion = 'os_asia' | 'os_usa' | 'os_euro' | 'os_cht';
export enum SpiralAbyssSchedule {
    CURRENT = 1,
    PREVIOUS = 2,
}   
export interface BasicInfoParams extends BaseApiParams { }
export interface IndexParams extends BaseApiParams {
    avatar_list_type: 1 | 2
}
export interface CharacterListParams extends BaseApiParams { 
    sort_list?:  1 | 2,
    elements: Array<string>,
    weapon_type: Array<number>
}
export interface ImaginaryTheatherParams extends BaseApiParams {
    need_detail: boolean
}
export interface BaseApiParams {
    server: GenshinRegion;
    role_id: number;
}
export interface CharacterDetailParams extends BaseApiParams {
    character_ids: Array<number>
}
export interface SpiralAbyssParams extends BaseApiParams {
    schedule_type: SpiralAbyssParams
}
export interface ApiResponse<T>  {
    message: string;
    retcode: number;
    data: T;
}