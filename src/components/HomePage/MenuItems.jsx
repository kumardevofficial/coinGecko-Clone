import { GiMasonJar } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
const MenuItems = () => {
  return (
    <>
      <div className=" w-full h-12 flex justify-between items-center py-7 px-8 overflow-hidden border-b-[1px] border-gray-400  box-border">
        <div className="flex justify-start gap-x-8 h-full items-center w-3/5 ">
          <div className="w-[145px] h-[40px]">
            <img
              src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
              alt="gecko"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-3/5 text-sm font-bold ">
            <ul className="flex w-full justify-between">
              <li>
                <a href="#">Cryptocurrencies</a>
              </li>
              <li>
                <a href="#">Exchanges</a>
              </li>
              <li>
                <a href="#">NFT</a>
              </li>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  gap-2 text-sm font-bold">
          <div className="flex items-center gap-x-1">
            <GiMasonJar />
            <div>Candy</div>
          </div>
          <div className="flex items-center gap-x-1">
            <FaStar className="text-yellow-500 " />
            <div>Portfolio</div>
          </div>
          <div className="relative ">
            <IoIosSearch className="absolute top-[8px] left-2 text-xl text-gray-400" />
            <span className=" w-4 h-6 flex justify-center items-center rounded-md bg-gray-300 absolute right-[10px] top-1">
              /
            </span>
            <input
              type="search"
              placeholder="search"
              className="bg-serachBackground text-left box-border px-8
            w-[170px] rounded-md h-8 text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
