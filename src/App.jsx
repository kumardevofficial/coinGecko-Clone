import "./App.css";
import FooterPart from "./components/FooterMenu.jsx/FooterPart";
import ActualCoinsData from "./components/HomePage/ActualCoinsData";
import CoinsData from "./components/HomePage/CoinsData";
import HeaderMenu from "./components/HomePage/HeaderMenu";
import Headline from "./components/HomePage/Headline";
import LatestCryptoNews from "./components/HomePage/LatestCryptoNews";
import MenuItems from "./components/HomePage/MenuItems";
function App() {
  return (
    <>
      <HeaderMenu />
      <MenuItems />
      <Headline />
      <CoinsData />
      <ActualCoinsData />
      <LatestCryptoNews />
      <FooterPart />
      {/* <Button>Button</Button> */}
    </>
  );
}

export default App;
