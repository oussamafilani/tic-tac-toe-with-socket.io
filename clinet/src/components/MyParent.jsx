import {useState} from 'react';
import MyChild from './MyChild';

const MyParent = () => {
    const [counter, setCounter] = useState(0);


    return(
    <div>
        <button onClick={()=> setCounter(counter + 1)}>{counter}</button>
        {<MyChild/>}
        {/* <MyChild style={counter === 2 ? {display: 'none'} : {}}/> */}
        </div>
        )
        

}

export default MyParent;