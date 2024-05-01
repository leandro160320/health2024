
export default function Section3(){
    return(
        <div className="grid justify-items-center text-center mx-2 my-12">
            <div >
             <h1 className="text-3xl font-bold">Our Special Doctors</h1>
             <h1>We take pride in our exceptional team of doctors, each a specialist in their respective fields.</h1>         
            </div>

            <div className="grid lg:grid-cols-3 gap-4"> 
            <div>
            <img className="py-8" src="/img/doctor-1.jpg.png" alt="" />
            <h1 className="font-bold text-lg">Dr. Emily Smith</h1>
            <h1>Cardiologist</h1>
            </div>

            <div>
            <img className="py-8" src="/img/doctor-2.jpg.png" alt="" />
            <h1 className="font-bold text-lg">Dr. James Anderson</h1>
            <h1>Neurosurgeon</h1>  
            </div>
            <div>
            <img className="py-8" src="/img/doctor-3.jpg.png" alt="" />
            <h1 className="font-bold text-lg">Dr. Michael Lee</h1>
            <h1>Dermatologist</h1> 
            </div>
            </div>
           
        </div>
    )
}