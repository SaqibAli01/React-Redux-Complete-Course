import React, { useState } from 'react';
import {Api, question} from './Api';

import {Accordion} from './Accordion';
import ContextApp from '../context/ContextApp/ContextApp';
// import ContextApp from '../context/ContextApp/ContextApp'
import {ApiMain} from '../context/APICalls/ApiMain';


export default function MyAccordion() {
  
    const [data , setData] = useState(question);
    return (
    <>
<section className='main_divss'>
<h1>React Question And Ans</h1>
    {data.map((curElem) => {
        {/* const {id, question , ans} = curElem; */}
        
        const {id} = curElem;
        {/* ...curElement is lia used kia ha jo API me ha wo sb a jy ga . id .question .ans   */}
        return <Accordion key={id} {...curElem} />
    })
    }
    </section>


<hr/>
<hr/>
<p>New</p>
<h2><b>Use Context API</b> </h2>
<ContextApp/>
<hr/>
<hr/>
<ApiMain/>
    </>
  )
}
