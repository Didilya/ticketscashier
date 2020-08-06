import React from 'react';
//import {View, ScrollView} from 'react-native';
import './ticket.css';
import TicketInfo from './ticketInfo';
import {Route} from 'react-router-dom';


const ticket = (props) => {
     const information = Object.keys(props.info)
     .map(igKey => {
         return [...Array(1)].map((_,i) => {
        return <TicketInfo key = {igKey+i} type = {igKey}/>
     });
    });
    return(

<div class = "TicketToEvent" >
    <div> 
    <Route path ="/" exact render={ () => <div ><TicketInfo type ="26ofjune"/></div>  } />
    </div>
    <Route path ="/june26" exact render={ () => <div ><TicketInfo type ="26ofjune"/></div>  } />
    <div >
  <Route path ="/june17" exact render={ () => <div > <TicketInfo type ="june17"/></div>  } />
    </div>
    <div >
  <Route path ="/may30" exact render={ () => <div > <TicketInfo type ="may30"/></div>  } />
    </div>
    <div >
  <Route path ="/july16" exact render={ () => <div > <TicketInfo type ="16ofjuly"/></div>  } />
    </div>
    <div >
  <Route path ="/september30" exact render={ () => <div > <TicketInfo type ="30ofseptember"/></div>  } />
    </div>
   

</div>

    );
};

export default ticket;