const Card = props => {
  return(
    <div className="
      transform 
      hover:-translate-y-2 
      h-96 
      transition-all 
      bg-purple-300 
      rounded
      dark:bg-black  
      flex-1 
      mr-5 
      p-5 
      flex 
      flex-col 
      items-center"
    > 
      <div className="text-7xl dark:text-yellow-400 pb-5">{props.icon}</div>      
      <div className="text-2xl text-center">{props.text}</div>
    </div>
  )   
}

export default Card




