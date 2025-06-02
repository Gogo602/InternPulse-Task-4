import { deviceData } from '../../../../data'

export default function Device() {
  return (
    <div className="bg-white p-[30px] text-[#3A3541] rounded-lg shadow-sm">
      <h4 className="text-[20.25px] font-medium mb-[30px]">Device Category</h4>
      <ul className="space-y-[30px]">
        {deviceData.map((device, index) => (
          <li key={index} className="flex justify-between">
            <div className="flex">
              <div className="bg-[#F4F5F9] w-[34px] h-[34px] rounded-lg flex items-center justify-center mr-[15px]">
                <img src={device.icon} />
              </div>
              <h6 className="font-medium">{device.name}</h6>
            </div>
            <h6>{`${device.rate}%`}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
