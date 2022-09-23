import React, { useState } from 'react'
import { HeaderClone } from './HeaderClone';
import { CreateNote } from './CreateNote';
import { Note } from './Note'
import "./CloneApp.css"

export default function CloneApp() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    alert("Add Card");
    setAddItem((prevData) => {
      return [...prevData, note]
    })

  }

  const onDelete = (id) => {
    setAddItem((oldData)=>
    oldData.filter((currData, indx)=>{return indx !== id;})
    )
  }

  return (<>
    <div className='clone_main'>
      <HeaderClone />
      <CreateNote passNote={addNote} />
      {/* <Note/>  */}
    <div className='box_note'>

    
      {addItem.map((val, index) => {
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem = {onDelete}
        />
      })}

</div>
    </div>






  </>
  )
}
