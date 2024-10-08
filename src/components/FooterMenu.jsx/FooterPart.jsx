const FooterPart = () => {
  return (
    <>
      <div className="w-[96%] m-auto grid md:grid-cols-[500px_170px_170px_170px_170px] grid-cols-1 gap-y-5 mt-10 pt-5 pb-5 border-t-[1px] border-b-[1px]border-gray-400">
        <div className=" py-5 ">
          <div className="w-[145px] h-[40px] mb-5">
            <img
              src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
              alt="gecko"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm">
            CoinGecko provides a fundamental analysis of the crypto market. IN
            addition to tracking price,volume andmarket capitalisation,
            CoinGecko tracks community growth,open-source code developmen, major
            events and on-chain metrics.
          </div>
        </div>
        <div className=" box-border pl-2 text-sm">
          <div className="mb-5">
            <div className="mb-2 font-bold">Resource</div>
            <div>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a href="#">Crypto News</a>
                </li>
                <li>
                  <a href="#">Bitcoin Treasury</a>
                </li>
                <li>
                  <a href="#">Crypto Heatmap</a>
                </li>
                <li>
                  <a href="#">Cypto API</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-2 font-bold ">Donations</div>
            <ul className="flex flex-col gap-y-3">
              <li>
                <a href="#">Bitcoin</a>
              </li>
              <li>
                <a href="#">Ethereum</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" pl-2  text-sm">
          <div className="text-sm font-bold mb-2">Support</div>
          <ul className="flex flex-col gap-y-4">
            <li>
              <a href="#">Request Form</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Candy Rewards Listing</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Bug Bounty</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className=" pl-2  text-sm">
          <div className="font-bold mb-2">About CoinGecko</div>
          <ul className="flex flex-col gap-y-4">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">
                Careers <span className="bg-green-300">Join Us</span>
              </a>
            </li>
            <li>
              <a href="#">Company Blog</a>
            </li>
            <li>
              <a href="#">Branding Guide</a>
            </li>
            <li>
              <a href="#">Methodology</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Ad Policy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
        </div>
        <div className=" pl-2  text-sm">
          <div className="font-bold mb-2">Community</div>
          <ul className="flex flex-col gap-y-4">
            <li>
              <a href="#">X/Twitter</a>
            </li>
            <li>
              <a href="#">Telegram Chat</a>
            </li>
            <li>
              <a href="#">Telegram News</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Reddit</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterPart;
