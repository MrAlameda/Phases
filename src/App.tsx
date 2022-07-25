import QuoteBox from './components/QuoteBox'
import { useEffect, useState } from "react";
import { Quotes } from "./types/types"
import Phases from "./quotes.json"

import "./styles/index.css"

function App() {
  const [index,setIndex] = useState<number>(0)

  const randomIndex=(arr:Quotes[])=>{
    const num=Math.floor(Math.random() * arr.length);
    setIndex(num)
  }

  useEffect(() => {
    randomIndex(Phases)
  }, [])
  const styles={
    backgroundColor:`#${index+150}`
  }

  return (
    <div 
    
    style={styles}
    className="App">
      <QuoteBox
        index={index}
      />

      
        <button
          style={{color:`#${index+150}`}}
          className="Btn" onClick={()=>randomIndex(Phases)}><strong>Next</strong></button>
      
    </div>
  )
}
export default App