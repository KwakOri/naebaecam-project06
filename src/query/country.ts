import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/api.countries";
import { Country, CountryInfo } from "../types/schemas";

export const useCountries = () => {
  return useQuery<Country[], Error, CountryInfo[]>({
    queryKey: ["countries"],
    queryFn: getData,
    select: (data: Country[]) => {
      return data.map((country) => {
        return {
          id: crypto.randomUUID(),
          isFavorite: false,

          name: country.name.common,
          capital: country.capital?.[0],
          flagUrl: country.flags.svg,
          gini: country.gini ? Object.entries(country.gini) : null,
          area: country.area,
          population: country.population,
        };
      });
    },
  });
};
