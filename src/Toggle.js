import React, { useState, useContext } from 'react';
import { userContext, UserContext } from './App'

import DishForm from './DishForm';

const Toggle = () => {

    const [isToggle, setToggle] = useState(false)
    const useInfo = useContext(UserContext);

    if (!useInfo.user) return null

    return (
        <div>
            {isToggle ? <DishForm setToggle={setToggle} /> : <button onClick={() => setToggle(!isToggle)}>Open form</button>}
        </div>
    );
}

export default Toggle;


// Class Component

// import React, { Component } from 'react';

// export default class Toggle extends Component {
//     state = {
//         isToggle: false
//     }

//     toggle = () => {
//         this.setState(state => {
//             return { isToggle: !state.isToggle };
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggle}>Toggle</button>
//                 {this.state.isToggle && <h2>hello</h2>}
//             </div>
//         );
//     }
// };