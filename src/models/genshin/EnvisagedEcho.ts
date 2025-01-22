import { EnvisagedEchoDTO, RawAvatarEnvisagedEcho } from "../../types/genshin/envisaged_echo";

export default class EnvisagedEcho {
    list: RawAvatarEnvisagedEcho[];
    is_unlock: boolean;

    constructor(data: EnvisagedEchoDTO) {
        this.list = data.list;
        this.is_unlock = data.is_unlock;
    }
}
