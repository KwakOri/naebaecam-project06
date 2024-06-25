export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    svg: string;
  };
}

export interface CountryInfo {
  id: string;
  name: string;
  capital: string;
  isFavorite: boolean;
  flagUrl: string;
}
