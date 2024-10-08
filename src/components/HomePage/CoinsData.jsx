import { MdLeaderboard } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { BsCapsule } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";

const CoinsData = () => {
  return (
    <>
      <div className="w-[96%] m-auto  flex ">
        <div className="w-[90%] h-[40px]   overflow-x-auto text-sm font-bold items-center">
          <ul className="flex w-[100.1%] justify-between">
            <li className="flex items-center">
              <MdLeaderboard />
              <a href="#">All</a>
            </li>
            <li className="flex items-center">
              <FaListOl />
              <a href="#">Highlights</a>
            </li>
            <li className="flex items-center">
              <BsCapsule />
              <a href="#">Pump.fun Ecosystem</a>
              <FaExternalLinkAlt />
            </li>
            <li className="flex items-center">
              <MdCategory />
              <a href="#">Categories</a>
            </li>
            <li className="flex items-center">
              <BsFire />
              <a href="#">Binance Launchpoll</a>
            </li>
            <li className="flex items-center">
              <BsFire />
              <a href="#">Circle Ventures Portfolio</a>
            </li>
            <li className="flex items-center">
              <BsFire />
              <a href="#">Binance Labs Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-[10%] gap-x-1 bg-serachBackground">
          <FaMagic />
          <div> Customise</div>
        </div>
      </div>
    </>
  );
};

export default CoinsData;
