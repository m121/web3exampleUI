export default function Team() {
  return (
    <div className="sm:py-16 py-8" id="team">
      <div className="flex justify-center items-center">
        <h3 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl flex mx-auto font-mono">
          Meet our Team
        </h3>
      </div>
      <div className="flex p-16">
        <div className="mx-auto ">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-0 sm:gap-y-6 gap-y-4 font-mono">
            <div>
              <div className="flex items-center  rounded-full  team-glow sm:mt-0 mt-4  p-2 ">
                <img
                   src="/assets/nft5fith.png"
                  className="w-20 rounded-full"
                />
                <div className="ml-4 flex flex-col ">
                  <span className="text-white text-lg sm:text-2xl ">Melvin Walters</span>
                  <span className="text-white text-md sm:text-xl font-light">CTO</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  rounded-full  team-glow sm:mt-0 mt-4 p-2">
                <img
                  src="/assets/nft6sixth.png"
                  className="w-20 rounded-full"
                />
                <div className="ml-4 flex flex-col ">
                  <span className="text-white text-lg sm:text-2xl">Arron Davidson</span>
                  <span className="text-white text-md sm:text-xl font-light">CEO</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  rounded-full  team-glow sm:mt-0 mt-4 p-2 ">
                <img
                  src="/assets/nft2two.png"
                  className="w-20 rounded-full"
                />
                <div className="ml-4 flex flex-col ">
                  <span className="text-white text-lg sm:text-2xl">Lillian Bates</span>
                  <span className="text-white text-md sm:text-xl font-light">CFO</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  rounded-full  team-glow sm:mt-0 mt-4 p-2">
                <img
                   src="/assets/nft3third.png"
                  className="w-20 rounded-full"
                />
                <div className="ml-4 flex flex-col ">
                  <span className="text-white text-lg sm:text-2xl">Rosemary Wagner</span>
                  <span className="text-white text-md sm:text-xl font-light">Lead developer</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  rounded-full  team-glow sm:mt-0 mt-4 p-2 ">
                <img
                  src="/assets/nft4fourth.png"
                  className="w-20 rounded-full"
                />
                <div className="ml-4 flex flex-col ">
                  <span className="text-white text-lg sm:text-2xl">Jeanne Duncan</span>
                  <span className="text-white text-md sm:text-xl font-light">Solana expert</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  rounded-full  team-glow sm:mt-0 mt-4 p-2">
                <img
                   src="/assets/nft1one.png"
                  className="w-20 rounded-full"
                />
                <div className="ml-4 flex flex-col ">
                  <span className="text-white text-lg sm:text-2xl">Anthony Peterson</span>
                  <span className="text-white text-md sm:text-xl font-light sm:brea-normal  break-words">Community Builder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
