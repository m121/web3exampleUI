import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero(){
    return (<div className="bg-gray-900">
      

 
  
  <div className="bg-gray-900">
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 font-mono">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white text-glow font-black leading-7 md:leading-10">
        Start building  
          <span className="text-blue-400"> the future </span>
          of the internet. 
        </h1>
        <p className="mt-5 sm:mt-10 lg:w-10/12 text-white font-normal text-center text-2xl sm:text-xl ">Learn how to use and contribute to decentralized apps, earning tokens based on your on-chain activity. </p>
      </div>
      <div className="flex justify-center items-center">
        <AnchorLink href="#learn" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm btn text-center">Start learning</AnchorLink>
        <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm btn btn-glow">Join Discord</button>
      </div>
    </div>
  </div>

    </div>)
}