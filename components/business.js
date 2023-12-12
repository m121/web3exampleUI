export default function business(){
    return (<div className="sm:py-16 py-8">
        <div className="flex justify-center items-center">
            <h3 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl flex mx-auto font-mono">Our sponsors</h3>
            </div>
        <div className="flex p-16">
            <div className="mx-auto">
                    <div className="flex sm:flex-row flex-col sm:m-0 mx-auto sm:gap-8 gap-4">
                        <div className="w-full sm:w-1/3">
                            <img src ="/assets/solana.svg "className="sm:mt-2 mt-0 sm:w-48 w-60" />
                        </div>
                        <div className="w-full sm:w-1/3">
                        <img src ="/assets/pointer.svg "className="w-48" />
                        </div>
                        <div className="w-full sm:w-1/3">
                        <img src ="/assets/cardano.svg "className="w-48" />
                        </div>

                    </div>
                </div>

        </div>
    </div>)
}