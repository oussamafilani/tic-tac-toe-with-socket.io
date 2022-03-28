import MyParent from './components/MyParent';
import React, {useState } from 'react';
import Mybutton from 'button-components';

// import Modal from './components/Modal/Modal';


import './App.css';


function App() {

  // const [toggle, setToggle] = useState(false);
  return (<>
    {/* <MyParent/> */}
    <Mybutton/>

    {/* <button onClick={() => setToggle(!toggle)}>
                        open Modal
                    </button> */}


    {/* <Modal toggle={[toggle, setToggle]}/> */}


    </>
  );
}

export default App;
