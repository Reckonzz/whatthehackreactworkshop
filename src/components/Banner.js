import { FaArrowDown } from "react-icons/fa"

const Banner = () => {
  return(
    <div className="p-10 flex justify-center font-bold text-4xl bg-pink-200 dark:bg-pink-900 shadow-md">
        Talk about your Interests!
        <FaArrowDown className="ml-5 animate-bounce"/>
    </div>
  )
}

export default Banner