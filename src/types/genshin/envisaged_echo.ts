import { ApiResponse } from "../url";

export type EnvisagedEchoAPIResponse = ApiResponse<EnvisagedEchoDTO>
export interface EnvisagedEchoDTO {
	list: RawAvatarEnvisagedEcho[];
	is_unlock: boolean;
}

export interface RawAvatarEnvisagedEcho {
	avatar_id: number;
	name: string;
	icon: string;
	status: number;
	has_red_dot: boolean;
	level_id: number;
}