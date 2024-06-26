export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    svg: string;
  };
}

export interface CountryInfo extends Country {
  id: string;
  isFavorite: boolean;
}
