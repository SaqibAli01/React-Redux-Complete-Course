import React, { useState } from 'react';
// import Select from 'react-select';

export function ApiMain() {

    const [num, setNum] = useState();

    return (<>
        <div>
            <h2><b>React API Call to Get Pokemon JSON Data using Axios and useEffect in ReactJS</b></h2>

            <h2>You Choose <b>{num}</b> Value</h2>

            <select value={num}
                onChange={(event) => {
                    setNum(event.target.value);
                }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <hr />



            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>



            <br />
            <br />
            <br />
            <br />
        </div>
    </>)
}
