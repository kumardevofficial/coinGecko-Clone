const Headline = () => {
  return (
    <>
      <div className="w-full h-[300px] mt-5  box-border ">
        <div className="w-full h-[50px] text-left flex justify-between px-6 box-border mt-5">
          <div>
            <div className="font-bold text-xl">
              Cryptocurrency Price by Market Cap
            </div>
            <div className="font-light text-sm text-topHeaderTextColor">
              The global Cryptocurrency market cap today is $2.28 Trillion, 2.7%
              change in the last 24 hours.
              <span className="underline">Read more</span>
            </div>
          </div>
          <div className="text-sm font-bold">
            <div>Highlights</div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle" class="hidden peer" />
              <label for="toggle" class="cursor-pointer">
                <div className="w-12 h-6 bg-gray-300 rounded-full p-1 duration-300 ease-in-out peer-checked:bg-blue-500">
                  <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out peer-checked:translate-x-6"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="w-[96%] m-auto b  overflow-hidden mt-5 box-border grid grid-cols-3">
          <div className="w-[390px] h-[200px]  flex flex-col gap-y-2 justify-center">
            <div className="w-[385px] h-[95px] border-2 border-solid border-black rounded-md"></div>
            <div className="w-[385px] h-[95px] border-2 border-solid border-black rounded-md">
              {" "}
            </div>
          </div>
          <div className="w-[390px] h-[200px] border-2 border-solid border-black rounded-md"></div>
          <div className="w-[390px] h-[200px] border-2 border-solid border-black rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default Headline;
