

 import React, {Component} from 'react';
 import Aux from '../../hoc/Yux';
 import Ticket from '../../components/Tickets/ticket';

class TicketCashier extends Component {
    
    
    state = {
          info: {
             may30: 1,
             june17:1,
             stadium: 1,
             competitors:1
          }  

    }
    render (){

        return(
<Aux>

    <Ticket info ={this.state.info}/>
  
</Aux>


        );
    }
 }

 export default TicketCashier;