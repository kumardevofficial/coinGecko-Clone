import { FaRegUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
const HeaderMenu = () => {
  return (
    <>
      <div className="w-full h-12 flex justify-between items-center gap-3 text-xs box-border px-5 border-b-[1px] border-gray-400">
        <div className="flex items-center gap-3 text-xs box-border ">
          <div className="flex">
            <div className="text-topHeaderTextColor"> Coins:</div>
            <div className="hover:text-green-400"> 14579</div>
          </div>
          <div className="flex">
            <div className="text-topHeaderTextColor">Exchanges:</div>
            <div className="hover:text-green-400">1206 </div>
          </div>
          <div className="flex">
            <div className="text-topHeaderTextColor">Market Cap:</div>
            <div className="hover:text-green-400">$2.281T</div>
          </div>
          <div className="flex">
            <div className="text-topHeaderTextColor">24h Vol:</div>
            <div className="hover:text-green-400">$98.575B</div>
          </div>
          <div className="flex">
            <div className="text-topHeaderTextColor">Dominance:</div>
            <div className="flex gap-x-2">
              <div className="flex">
                <div className="text-topHeaderTextColor">BTC:</div>
                <div className="hover:text-green-400">53.4%</div>
              </div>
              <div className="flex">
                <div className="text-topHeaderTextColor">ETH:</div>
                <div className="hover:text-green-400">12.9%</div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="text-topHeaderTextColor">Gas:</div>
            <div className="hover:text-green-400">12.553735733 GWEI</div>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div
            className=" w-8 text-2xl border-2 border-solid border-black rounded-md flex justify-center items-center
          shadow-[0px_4px_0px_black] hover:shadow-[0px_6px_0px_black] cursor-pointer"
          >
            <CiSettings />
          </div>
          <div className="text-xl border-2 border-solid border-black rounded-md w-8 h-8 flex justify-center items-center shadow-[0px_4px_0px_black] hover:shadow-[0px_6px_0px_black] cursor-pointer">
            <FaRegUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
