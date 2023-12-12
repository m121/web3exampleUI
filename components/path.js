export default function Path(){
    return (<div className="sm:py-16 py-8" id="learn">
         <div>
      <div className="flex justify-center items-center ">
        <h3 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl flex mx-auto font-mono">
          Enjoy learning Web3
        </h3>
      </div>
      <div className="flex justify-center items-center p-16 container">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3 sm:gap-24 sm:gap-y-0 gap-y-10 font-mono">
            <div className="box ">
              <div className="flex flex-col items-center  rounded-full   content ">
              <img src="/assets/dao3.png"  className=" w-60 h-56"/>
              <h2>DAO </h2>
              
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
      <a className="btn btn-glow hover:bg-gray-200 hover:text-indigo-700 font-semibold " href="#">Read More</a>
              </div>
            </div>
            <div className="box">
              <div className="flex flex-col items-center  rounded-full   content ">
              <img src="/assets/defi2.png"  className=" w-60 h-56"/>
              <h2 className="text-white text-md">DEFI</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
      <a className="btn btn-glow hover:bg-gray-200 hover:text-indigo-700 font-semibold" href="#">Read More</a>
     
              </div>
            </div>
            <div className="box ">
              <div className="flex flex-col items-center  rounded-full   content ">
              <img src="/assets/nft.png"  className=" w-60 h-56"/>
              <h2>NFT </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
      <a className="btn btn-glow hover:bg-gray-200 hover:text-indigo-700 font-semibold" href="#">Read More</a>
     
              </div>
            </div>
           
            
            
           
          </div>
        </div>
      </div>
    </div>
    </div>)
}