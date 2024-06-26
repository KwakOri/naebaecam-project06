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
  isFavorite: boolean;

  name: string;
  capital: string;
  flagUrl: string;
}
