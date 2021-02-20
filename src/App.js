// // import React from 'react';
// // import { Provider } from 'react-redux';
// // import store from './redux/store';
// // import './App.css';
// // // import CakeContainer from './components/CakeContainer';
// // // import HooksCakeContainer from './components/HooksCakeContainer';
// // // import IceCreamContainer from './components/IceCreamContainer';
// // // import NewCakeContainer from './components/NewCakeContainer';
// // import UserContainer from './components/UserContainer';

// // function App() {
// //   return (
// //     <Provider store={store}>
// //       <div className="App">
// //         {/* <CakeContainer />
// //         <HooksCakeContainer />
// //         <IceCreamContainer />
// //         <NewCakeContainer /> */}
// //         <UserContainer/>
// //       </div>
// //     </Provider>
// //   )
// // }

// // export default App;



// import React, { useState } from 'react';
// import axios from 'axios';


// function App() {
//   const[jok,setJok] =useState("");
//   const getJok=()=>{
//     axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
//       console.log(response);
//       setJok(response.data.setup+"..."+response.data.punchline);
//     })

//   }
//   return (
//     <div>
//       <h2>Hello World</h2>
//       <button onClick={getJok}>Get Jok Right Now</button>
//       <div>{jok}</div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import MobileCopare from './MobileCopare';

function App() {
  return (
    <div>
      <MobileCopare />
    </div>
  )
}

export default App

