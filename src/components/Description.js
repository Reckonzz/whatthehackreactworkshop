import underwaterVehicle from "../assets/underwaterVehicle.png"

const Description = () => {
  return(
    <div className="max-w-screen-xl flex justify-center m-auto py-10"> 
      <div className="w-72 mr-10">
        <div className="rounded-full p-5 bg-blue-400 hover:bg-green-400 transition-all">
          <img src={underwaterVehicle} alt="underwater vehicle"/>  
        </div> 
      </div>
      <div className="p-10 flex-1 text-xl bg-blue-200 dark:bg-purple-700 shadow-lg rounded-lg">
        <div className="font-bold pb-5">Autonomous Underwater Vehicles</div>
        <div> 
          An Underwater Vehicle is an Awesome creation! This particular kind resembles that of a drone but don't be fooled 
          because the conditions in water is very different from that in air. Physics and math empowers you to do really cool things...
          oh lets not forget coding too!
        </div>        
      </div>
    </div>
  )
}
export default Description