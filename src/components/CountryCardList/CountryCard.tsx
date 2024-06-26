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
}: CountryCardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`box-border flex flex-col items-center p-4 w-full h-full gap-4 rounded-xl shadow-md hover:shadow-lg bg-[#FCFDFF]`}
    >
      <img className="object-cover w-24 " src={flagUrl} alt="국기" />
      <h3 className="self-start text-lg font-semibold ">{name}</h3>
      <p className="self-start text-md">{capital}</p>
    </div>
  );
}

export default CountryCard;
