import { CountryInfo } from "../../types/country";

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
  console.log(area, population, gini);
  const [giniYear, giniValue] = gini ? gini[0] : [null, null];

  return (
    <div
      onClick={() => onClick(id)}
      className={`box-border flex flex-col items-center p-4 w-full h-full gap-4 rounded-xl shadow-md hover:shadow-lg bg-[#FCFDFF]`}
    >
      <img className="object-cover h-16 " src={flagUrl} alt="국기" />
      <h3 className="self-start text-lg font-semibold ">{name}</h3>
      <p className="self-start text-md">{capital}</p>
      <p className="self-start text-md">
        {gini ? `Gini: ${giniYear}년 - ${giniValue}` : "-"}
      </p>
      <p className="self-start text-md">
        인구: {population.toLocaleString()}명
      </p>
      <p className="self-start text-md">면적: {area.toLocaleString()}km²</p>
    </div>
  );
}

export default CountryCard;
