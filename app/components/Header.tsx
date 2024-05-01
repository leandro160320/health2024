
export default function Header(){
    return(
        <div className="bg-[#12AC8EE5] pt-4 text-white px-3 pb-12">
            <div className="grid grid-cols-2 ">
                <h1 className="text-xl font-bold">Health<span className="text-[#FB923C]">Care</span></h1>
                <button className="bg-[#FB923C] rounded px-4 py-2 text-xs">Contact Us</button>
            </div>
            <div>
                <h1 className=" text-5xl mt-16">Providing an Exceptional Patient Experience</h1>
                <h1>
                Welcome, where exceptional patient experiences are 
                our priority. With compassionate care, state-of-the-art
                facilities, and a patient-centered approach, we're
                dedicated to your well-being. Trust us with your health
                and experience the difference.
                </h1>
                <button className="bg-[#FB923C] rounded px-6 py-2 my-4">Contact Us</button>
            </div>
            <div></div>
            <div></div>
        </div>

    )
}