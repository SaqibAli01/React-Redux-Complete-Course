 
 const iniialState = 0;
 const changeTheNumber = (state = iniialState , action) =>{
    switch(action.type)
    {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        default: return state;
    }
 }
 export default changeTheNumber;

 //is file ko main reducer me lhekna ha  