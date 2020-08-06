

 import React, {Component} from 'react';
 import Aux from '../../hoc/Yux';
 import Ticket from '../../components/Tickets/ticket';

class TicketCashier extends Component {
    
    
    state = {
          info: {
          
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