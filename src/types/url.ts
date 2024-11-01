export type GenshinServer = 'os_asia' | 'os_usa' | 'os_euro' | 'os_cht';
export interface BasicInfoParams extends BaseApiParams { }
export interface IndexParams extends BaseApiParams {
    avatar_list_type: 1 | 2
}
export interface CharacterListParams extends BaseApiParams { }
export interface ImaginaryTheatherParams extends BaseApiParams {
    need_detail: boolean
}
export interface BaseApiParams {
    server: GenshinServer;
    role_id: number;
}