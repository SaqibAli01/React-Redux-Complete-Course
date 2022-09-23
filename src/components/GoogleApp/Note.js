import React, { useState } from 'react'
import './CloneApp.css'
export function Note(props) {



  const DeleteNote = () => {
    props.deleteItem(props.id)
  }
  return <>

    <div className='note'>
      <h2 className='div_fontHeading'>{props.title}</h2>
      <div className='div_flex'>

        <h2 className='div_font'>{props.content}</h2>
        <h2 className='div_font'>
        {/* <button onClick={DeleteNote}>Del</button> */}
          <a onClick={DeleteNote}> <img src='delete.png' className='note_img' /></a>
        </h2>




      </div>


    </div>

  </>
}
