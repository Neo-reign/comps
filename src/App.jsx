import { useState } from "react";

import Dropdown from './components/Dropdown';
import CounterPage from "./pages/CounterPage";

const App = () => {
  const [selection, setSelection] = useState(null);

    const options = [
      {label: "Red", value: "red"},
      {label: "Green", value: "green"},
      {label: "Blue", value: "blue"}
    ]
    
    const handleSelect = () => {
      setSelection(option)
    }
  return (
    <div className="container mx-auto mt-4">
     {/*<Dropdown 
        options={options}  
        selection={selection} 
        onSelect={handleSelect}
     />*/}
      <CounterPage />
    </div>
  )
}

export default App;