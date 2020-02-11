import React, { useState, useContext } from 'react';
import { userContext, UserContext } from './App'

const Toggle = () => {

    const [isToggle, setToggle] = useState(false)
    const useInfo = useContext(UserContext);

    console.log('useInfo :', useInfo)

    if (!useInfo.user) return null

    return (
        <div>
            <button onClick={() => setToggle(!isToggle)}>Toggle</button>
            {isToggle && <h2>Hello</h2>}
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