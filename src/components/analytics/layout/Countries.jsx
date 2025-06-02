import { countries } from '../../../../data';


export default function Countries() {
  return (
    <div className="bg-white p-[30px] text-[#3A3541] rounded-lg shadow-sm">
      <h4 className="text-[20.25px] font-medium mb-[30px]">Device Category</h4>
      <ul className="space-y-[30px]">
        {countries.map((country, index) => {
          const flagUrl = `https://flagcdn.com/w40/${country.flagCode}.png`;
          return (
            <li key={index} className="flex justify-between">
              <div className="flex">
                <div className="bg-[#F4F5F9] w-[34px] h-[34px] mr-[15px] overflow-hidden rounded shadow-sm">
                  <img
                    src={flagUrl}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h6 className="font-medium">{country.name}</h6>
              </div>
              <h6>{`${country.percentage}%`}</h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
