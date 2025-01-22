import { Element, Weapon } from "../common/common";
import { ApiResponse } from "../url";
import { RawCharacterBasic } from "./detail";

export type GenshinCharacterListAPIResponse = ApiResponse<GenshinCharacterListDTO>
export interface GenshinCharacterListDTO {
    list: RawCharacterBasic[];
}

