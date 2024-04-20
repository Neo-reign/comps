import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)
  
  const handleclick= (nextIndex)=>{
    if(expandedIndex === nextIndex){
      setExpandedIndex(-1)
    } else{
       setExpandedIndex(nextIndex)
    }
  }
    
  
  //To show a list to the user 
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex
    
    const icon = <span className="text-2xl">
      {isExpanded ? <GoChevronDown />: <GoChevronLeft />}
    </span>
    
  /*  if (index === expandedIndex) {
      console.log("expanded")
    } else {
      console.log("collapsed")
    } */

    return (
      /*The top level element must have an KEY&&ID*/
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center" onClick={()=>handleclick(index)}>
        {item.label}
        {icon}
        </div>
         {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })


  return (
    <div className="border-x border-t rounded">
     {renderedItems}
    </div>
  )
}

export default Accordion
