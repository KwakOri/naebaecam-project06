import { useToast } from "../../contexts/Toast.context";
import { useCountriesStore } from "../../store/store";
import { CountryInfo } from "../../types/country.types";

interface CountryCardProps extends CountryInfo {}

function CountryCard({
  id,
  name,
  flagUrl,
  capital,
  area,
  population,
  gini,
}: CountryCardProps) {
  const { countries, setCountries } = useCountriesStore();
  const toast = useToast();

  const [giniYear, giniValue] = gini ? gini[0] : [null, null];

  const handleToggleIsFavorite = (id: CountryInfo["id"]) => {
    const newCountries = countries.map((country) => {
      if (country.id !== id) return country;

      if (country.isFavorite) {
        toast.add({
          type: "Delete",
          title: `목록 제거`,
          content: `"${country.name}"이 목록에서 제거되었습니다.`,
          time: 5000,
        });
      } else {
        toast.add({
          type: "Add",
          title: `목록 추가`,
          content: `"${country.name}"이 목록에 추가되었습니다.`,
          time: 5000,
        });
      }
      return { ...country, isFavorite: !country.isFavorite };
    });
    setCountries(newCountries);
  };

  return (
    <div
      onClick={() => handleToggleIsFavorite(id)}
      className={`transition box-border flex flex-col items-center p-4 w-full h-[360px] gap-4 rounded-xl shadow-md hover:shadow-inner bg-[#FCFDFF] hover:bg-[#f3f3f3] cursor-pointer`}
    >
      <img className="object-cover h-16 " src={flagUrl} alt="국기" />
      <h3 className="text-lg font-semibold ">{name}</h3>
      <p className="self-start text-md">{capital}</p>
      {gini ? (
        <p className="self-start text-md">
          Gini: {giniValue}{" "}
          <span className="text-sm text-gray-400 ">{giniYear}년</span>
        </p>
      ) : (
        <p className="self-start text-md">Gini: -</p>
      )}
      <p className="self-start text-md">
        인구: {population.toLocaleString()}명
      </p>
      <p className="self-start text-md">면적: {area.toLocaleString()}km²</p>
    </div>
  );
}

export default CountryCard;
