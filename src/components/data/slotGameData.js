import React from "react";

const Slomt = (props)=>{
        // let x = ' 😄';
        // let y = ' 😄';
        // let z = ' 😍';
        let x = props.x;
        let y = props.y;
        let z = props.z;
        if (x === y && x === z) {
            return (<>
                <div className='slot_inner'>
                    <h2>{x} {y} {z}</h2>
                    <span className="center">This is Matching.</span>
                    <hr />
                </div>
            </>)
            
        }
        else{
            return (<>
                <div className='slot_inner'>
                    <h2>{x} {y} {z}</h2>
                    <span className="center">This is Not Matching.</span>
                    <hr/>
                </div>
            </>)
        }
    }
    export default Slomt;