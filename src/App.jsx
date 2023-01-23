import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'
import Add from './components/Add'
function App() {
  
  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  
  const [quoteRandom, setQuoteRandom] = useState(randomElementFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(randomElementFromArray(colors))
  
  const handdleClick = () =>{
    setQuoteRandom(randomElementFromArray(quotes))
    setColorRandom(randomElementFromArray(colors))
  } 

  return (
    <div style={{backgroundColor:colorRandom}} className="App">
      <QuoteBox 
      quoteRandom={quoteRandom} 
      handdleClick={handdleClick}
      colorRandom={colorRandom}/>
      <Add 
      colorRandom={colorRandom}
      />
    </div>
    
  )
}

export default App