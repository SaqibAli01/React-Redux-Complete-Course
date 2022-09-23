import React from 'react'

export function List(props) {




  return (
    // props.text 
    //text ye pechy todo app me lehka tha wo lheka ha
    // <li>{props.text}</li>

    //delete krny k lia
    <div className="todo_style">
      <i onClick={()=>
      {
        props.onSelect(props.id);
      }} 
      className='fa fa-times' aria-hidden="true">x</i>
      <li>{props.text}</li>
    </div>

  )
}
