import React, { useState } from "react";
const Chtimes = () => {

    const chTimess = new Date().toLocaleTimeString();

    const [cTimes, setCTimes] = useState(chTimess);

    
    
    const UpDateTime = () => {
        let Time = new Date().toLocaleTimeString();
        setCTimes(Time);
    }
  

return <>
        <h2 className="center">{cTimes}</h2>

        <div className="center">

            <button onClick={UpDateTime}>Get Times</button>
        </div>



        <br />
        <br />
        <br />
    </>

}
export { Chtimes };