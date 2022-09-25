/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserFullInfo {
    retcode: number
    message: string
    data: UserFullInfoData
}

export interface UserFullInfoData {
    user_info: UserInfo
    follow_relation: null
    auth_relations: any[]
    perm_game_list: any[]
    perm_common_list: any[]
    creator_info: CreatorInfo
    paladin_info: PaladinInfo
    perm_expr_list: any[]
    collection_info: CollectionInfo
}

export interface CollectionInfo {
    num: number
}

export interface CreatorInfo {
    show_beta: boolean
    can_top: boolean
    can_collect: boolean
    card_type: string
    card_url: string
}

export interface PaladinInfo {
    path: string
}

export interface UserInfo {
    uid: string
    nickname: string
    introduce: string
    avatar: string
    gender: number
    certification: null
    level_exps: UserGameExp[]
    achieve: Achieve
    community_info: CommunityInfo
    avatar_url: string
    level_exp: null
    level: Level
    pendant: string
    community_email: string
    bg_url: string
    pc_bg_url: string
    nickname_times_left: string
}

export interface Achieve {
    like_num: string
    post_num: string
    replypost_num: string
    follow_cnt: string
    followed_cnt: string
    topic_cnt: string
    new_follower_num: string
    good_post_num: string
    like_num_unit: string
    post_num_unit: string
    replypost_num_unit: string
    follow_cnt_unit: string
    followed_cnt_unit: string
    topic_cnt_unit: string
    new_follower_num_unit: string
    good_post_num_unit: string
}

export interface CommunityInfo {
    is_realname: boolean
    agree_status: boolean
    silent_end_time: number
    forbid_end_time: number
    info_upd_time: number
    privacy_invisible: PrivacyInvisible
    notify_disable: NotifyDisable
    silent_end_time_v2: string
    forbid_end_time_v2: string
    info_upd_time_v2: string
}

export interface NotifyDisable {
    reply: boolean
    upvote: boolean
    follow: boolean
    system: boolean
    system_v2: boolean
    activity: boolean
    award: boolean
    admin: boolean
    creator: boolean
}

export interface PrivacyInvisible {
    post: boolean
    collect: boolean
    watermark: boolean
    gamerecord: boolean
    follow: boolean
    follower: boolean
    recommend: Recommend
}

export interface Recommend {
    is_opened: boolean
    hint_type: number
    expire: string
    is_hint: boolean
    is_operation: boolean
}

export interface Level {
    level: number
    exp: number
    level_desc: string
    bg_color: string
    bg_image: string
}

export interface UserGameExp {
    level: number
    exp: number
    game_id: number
}
