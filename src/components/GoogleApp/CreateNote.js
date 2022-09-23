import React, { useState } from 'react'
import "./CloneApp.css"
export function CreateNote(props) {
  const [expend, setExpend] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  const InputEvent = (event) => {
    // const value =event.target.value;
    // const name =event.target.value;

    //ye object destructing bulty ha is ko
    const { name, value } = event.target;

    setNote((prevDate) => {
      return {
        ...prevDate,
        [name]: value
      }
    })
  }

  const addEvent = () => {
    props.passNote(note);
// ye auto refresh ho ga 
    setNote({
      title: "",
      content: ""
    })

  }


  const expendIt = () =>{
    setExpend(true);
  }
//back to normal
const backToNormal = () =>{
  setExpend(true);
}


  return (
    <>
      <div className='clone_App'>

        <from>

    {/* is sy serf input wala show ho ga expend  */}
          { expend?
          <input name="title" onChange={InputEvent} value={note.title} type="text" placeholder='Enter Title' autoComplete='off' className='input_text_width' />
            :null}
        
          <textarea name="content" onChange={InputEvent} value={note.content} rows="" column="" placeholder='Enter Your Notes' onClick={expendIt} onDoubleClick={backToNormal} />

        </from>
        { expend?
        <buttom className='btn_floating' onClick={addEvent}>
          <a className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </buttom>
          :null}
      </div>

      <br></br>


    </>
  )
}
