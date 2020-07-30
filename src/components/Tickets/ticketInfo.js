import React from 'react';
import './ticket.css';

const ticketInfo = (props) => {
   let info = null;

   switch (props.type){

        case ('30ofmay') :
        info = <div className = {BreadBottom}></div>;
        break;
        case ('17ofjune') :
            info = <div className = {BreadBottom}></div>;
        break;
        case ('26ofjune') :
            info = <div className = {Beacon}></div>;
        break;
        case ('16ofjuly') :
            info = <div className = {BreadTop}>
                 <div class = {Seeds1}></div>
                 <div class = {Seeds2}></div>
                </div>;
        break;
       
        case ('30ofseptember') :
                info = <div className = {Salad}></div>;
        break;
        default:
            info = null;
     
   }
   return info;

};

export default ticketInfo;