import React from 'react';
import './ticket.css';
import TicketInfo from './ticketInfo';
import {Route} from 'react-router-dom';

// использую react-router для 
//выбора вариантов расположения компонентов с билетами в зависимости от адреса страницы на которой мы сейчас находимся

const ticket = (props) => {


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