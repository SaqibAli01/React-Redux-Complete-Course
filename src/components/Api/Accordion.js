import React, { useState } from 'react'

export  function Accordion({question, ans}) {
  const [show, setShow] = useState(false);
  return (
    <>
    <div>
    <h1><strong onClick={() => setShow(!show)}  className='strong_circle'>{show? "-" : "+"}</strong> {question}</h1>
    </div>
    {show && <p>{ans} </p> }
    

    </>
  )
}
