import React from 'react'


//redux
// import store from './Store';
// store.subscribe(()=>console.log(store.getState()));


export function MainHTML() {
    
    return (
        <div>
            <h1>Increment / Decrement Counter</h1>
            <h2>Using React and Redux</h2>
            <div className='redux_div'>
                <a className='quantity_minus' title='Decrement'> <span>-</span> </a>
                <input className='redux_input' name='quantity' type='text'  value='0' />
                <a className='quantity_minus' title='Decrement'> <span>+</span> </a>
            </div>
        </div>
    )
}

// store.subscribe(()=>console.log(getState()));