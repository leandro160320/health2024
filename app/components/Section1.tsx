
export default function Section1(){
    return(
        <div className=" text-center py-12 mx-2">
            <h1 className="text-3xl font-bold">Our Special service</h1>
            <h1>Beyond simply providing medical care, 
                our commitment lies in delivering unparalleled service 
                tailored to your unique needs.</h1>

            <div className="grid lg:grid-cols-3">
            <div className="grid mt-12 justify-items-center shadow-xl rounded-md">
                <div className="bg-[#E9F7F7] rounded-full px-8 ">
                <img className="py-8" src="/img/i.ri-microscope-line.png" alt="" />
                </div>
            
            <h1 className="text-xl font-bold">Laboratory Test</h1>
            <h1>Accurate Diagnostics, Swift Results: Experience
            top-notch Laboratory Testing at our facility.
            </h1>
            <h1 className="text-[#12AC8E]">Learn More</h1>
            </div>

            <div className="grid mt-12 justify-items-center shadow-xl rounded-md">
                <div className="bg-[#E9F7F7] rounded-full px-8 ">
                 <img className="py-8" src="/img/Icon.png" alt="" />
                </div>
            
            <h1 className="text-xl font-bold">Health Check</h1>
            <h1>Accurate Diagnostics, Swift Results: Experience
            top-notch Laboratory Testing at our facility.
            </h1>
            <h1 className="text-[#12AC8E]">Learn More</h1>
            </div>

            <div className="grid mt-12 justify-items-center shadow-xl rounded-md">

                <div className="bg-[#E9F7F7] rounded-full px-8 ">
                <img className="py-8" src="/img/i.ri-hospital-line.png" alt="" />
                </div>
            
            <h1 className="text-xl font-bold">General Dentistry</h1>
            <h1>Accurate Diagnostics, Swift Results: Experience
            top-notch Laboratory Testing at our facility.
            </h1>
            <h1 className="text-[#12AC8E]">Learn More</h1>
            </div>
            </div>

        </div>
       
        
    )
}