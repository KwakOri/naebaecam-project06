export type Order =
  | "PopularDesc"
  | "PopularAsc"
  | "AreaDesc"
  | "AreaAsc"
  | null;

export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    svg: string;
  };
  gini: object;
  population: number;
  area: number;
}

export interface CountryInfo {
  id: string;
  isFavorite: boolean;

  name: string;
  capital: string;
  flagUrl: string;
  population: number;
  area: number;
  gini: [string, number][] | null;
}
