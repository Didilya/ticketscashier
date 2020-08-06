import React from 'react';
import Aux from '../../hoc/Yux';
import  './Layout.css';
//import '../../App.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
    <Toolbar/>
    <main class= "Content"> 
        {props.children}
    </main>
    </Aux>
);

export default layout;