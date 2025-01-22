export enum WEAPONS_FILTER  {
    SWORD = 1,
    CLAYMORE = 11,
    BOW = 12,
    POLEARM = 13,
    CATALYST = 10,
}
export enum ELEMENTS_FILTER {
    PYRO = "Pyro",
    GEO = "Geo",
    DENDRO = "Dendro",
    ANEMO = "Anemo",
    ELECTRO = "Electro",
    CRYO = "Cryo",
    HYDRO = "Hydro",
}

export type FILTER_OPTIONS = {
    weapon : [WEAPONS_FILTER],
    element : [ELEMENTS_FILTER],
}