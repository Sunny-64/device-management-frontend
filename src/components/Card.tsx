import { laptop, phone } from "../assets";

interface CardProps {
  device: string;
  ip: string;
  lastLogin: string;
}

const Card = ({ device, ip, lastLogin }: CardProps) => {
  return (
    <div className="bg-white w-full flex items-center gap-4 p-2 rounded-md shadow-lg sm:py-6 sm:px-6">
      <div className="w-1/3 rounded-md">
        <img src={device === "phone" ? phone : laptop} alt="Device" />
      </div>
      <div className="w-full">
        <p className="font-bold mb-2">#{device || "Iphone 12 Pro Max"}</p>
        <div className="flex gap-4 mb-1">
          <p className="text-sm font-medium">IP Address</p>
          <p className="text-sm text-left">{ip || "192.168.18"}</p>
        </div>
        <div className="flex gap-4 mb-1">
          <p className="text-sm font-medium">Last login</p>
          <p className="text-sm text-left">{lastLogin || "12 december 2022"}</p>
        </div>
        <div className="flex justify-between">
          <button className="bg-secondary-light text-black px-4 py-2 rounded-md mt-2 text-sm">
            Logs
          </button>
          <button className="bg-accent text-white px-4 py-2 rounded-md mt-2 text-sm">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
