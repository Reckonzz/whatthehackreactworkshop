import Banner from "../components/Banner";
import Description from "../components/Description";
import Card from "../components/Card";
import { GiRobotGolem } from "react-icons/gi"
import { FaCode, FaSchool, FaMoon } from "react-icons/fa"
import { IoPerson, IoSunny } from "react-icons/io5"


const HomePage = props => {
  let cards = [
      {
        icon: <GiRobotGolem/>, 
        text: "Hands down the two best clubs to join are coding and robotics clubs"
      },
      {
        icon: <FaCode/>, 
        text: "Code is for the swag and cool people ;). Hackathons are not for the weak hearted"
      },
      {
        icon: <FaSchool/>, 
        text: "Ask not what the school can do for you, but what you can do for the school"
      },
      {
        icon: <IoPerson/>, 
        text: "Workshop organisers are humans too! feel free to talk to us after the workshop"
      }
    ]
  return (
    <div className="min-h-screen dark:bg-indigo-900 dark:text-white bg-purple-50">
      <Banner/>
      <Description/>
      <div className="flex flex-row max-w-screen-xl m-auto">
        {cards.map(detail => <Card icon={detail.icon} text={detail.text}/> )}
      </div>  
      <div className="flex max-w-screen-xl m-auto py-5">
        <button className="self-end text-6xl text-black dark:text-yellow-400" onClick={props.toggleDarkMode}>{props.isDarkMode ? <IoSunny/>:<FaMoon/>}</button>
      </div> 
    </div>
  )
}
export default HomePage







