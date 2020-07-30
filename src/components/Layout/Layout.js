import React from 'react';
import Aux from '../../hoc/Yux';
import  './Layout.css';
//import '../../App.css';


const layout = (props) => (
    <Aux>
    <div >  Toolbar, Sidebar, Backdrop</div>
    <main class= "Content"> 
        {props.children}
    </main>
    </Aux>
);

export default layout;