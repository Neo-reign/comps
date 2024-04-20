import { useState } from "react";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  
  const handleOption = (option) => {
    setIsOpen(false)
    console.log(option)
    onSelect(option)
  }
  
  const renderOption = options.map((option) => { 
    return ( 
      <div key={option.value} onClick={() => handleOption(option)}>
      {option.label}
    </div>
    )
  });
  
  return (
    <>
      <div onClick={handleOpen}>{selection?.label || "Select.."}</div>
      {isOpen && <div>{renderOption}</div>}
    </>
  )
}

export default Dropdown