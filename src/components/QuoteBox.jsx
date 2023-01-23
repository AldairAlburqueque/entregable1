import React from 'react'

const QuoteBox = ({quoteRandom, handdleClick,colorRandom}) => {
  return (
    <div style={{color:colorRandom}} className= 'box'>
        <p className='box-quote'>{quoteRandom.quote}</p>
        <h2 className='box-author'>{quoteRandom.author}</h2>
        <button style={{background:colorRandom}} className='box-btn' onClick={handdleClick}>&#62;</button>
    </div>
  )
}

export default QuoteBox