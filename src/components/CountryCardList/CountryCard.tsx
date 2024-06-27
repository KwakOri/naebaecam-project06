import { CountryInfo } from "../../types/schemas";

interface CountryCardProps extends CountryInfo {
  onClick: (id: string) => void;
}

function CountryCard({
  id,
  onClick,
  name,
  flagUrl,
  capital,
  area,
  population,
  gini,
}: CountryCardProps) {
  const [giniYear, giniValue] = gini ? gini[0] : [null, null];

  return (
    <div
      onClick={() => onClick(id)}
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
