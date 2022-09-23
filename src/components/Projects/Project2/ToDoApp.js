import React, { useEffect, useState } from 'react'
import { List } from './List'


//to get local storage from list
const getLoclItems = () => {
  let list = localStorage.getItem('lists');
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else {
    return [];
  }



}
export default function ToDoApp() {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState(getLoclItems());



  const onInput = (e) => {
    setInputList(e.target.value);

  }

  const btnHandleAdd = (e) => {
    setItem((oldItems) => {
      //oldItems ye object or array 2no ko access krta ha parameetr
      // useState([]); is me jo value ho gi wo oldItems me a jy gi...
      // jo phaly data tha list me rahy is lia ... dot parameter k shat lagy ha
      //inputList me jo last me user ny value di ha wo ider a jy gi... 
      return [...oldItems, inputList]
    });
    setInputList("");
  }
  const deleteItemList = (id) => {
    alert("Delete Item List")
    setItem((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }
  // add data to local stroge
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(item))
  }, [item]);

  //incre
  const[num, setNum] =useState(0);
const InCremnet =()=>{
  setNum(num + 1)
}
const DeCremnet =()=>{
  if(num > 0){
  setNum(()=>num - 1)
  }
  else{
alert("Less Then 0")
  }
}
  return (
    <> 
    <div className='main' >
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <div className='center'>
          <input type="text" value={inputList} placeholder='Add a Items' onChange={onInput} ></input>
          <button className='circle_btn' onClick={btnHandleAdd} > + </button>
        </div>
        <ol>
          {item.map((itemValue, index) => {
            {/* return <li>{itemValue}</li> */ }
            {/* text={itemval} ye props pas ki ha list wali file me show krwny k lia */ }
            return <List
              key={index}
              id={index}
              onSelect={deleteItemList}
              text={itemValue} />


          })}

        </ol>
      </div>
    <hr/>
    <div className='main_div'>
      <div className='center_div'>
    <p>Incrementing and Decrementing the State Variabl</p>
      <h1>{num}</h1>
      <div className='center'>
      <button onClick={InCremnet}>Increment</button>
      <button onClick={DeCremnet}>Decrement</button>
      {/* <i class="material-icons">add_circle</i> */}

      </div>
      </div>
      </div>



    </div>
</div>
</>
  )
}
