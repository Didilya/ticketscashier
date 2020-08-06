import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ticketInfo.css';

class TicketInfo extends Component {
    
    
    
    render(){
        let info = null;

        //let id1= "square1";
       // let id2 = "square2";
       // let id3 = "square3";

        //const handleOptionChange = () => {
          //this.id3 = "square1";
          //this.id2 = "square5";
            //return id3, id2;
        //}

        switch (this.props.type){
     
             case ('may30') :
             info = <div id="hexGrid">
                 <div class="hex" id = "square3" >  <a href="#square3"></a>  <div class="hexIn">
                 <a class="hexLink" href="may30"> <b>Стадион 30 МАЯ 19:00<div><button>Купить</button></div></b> <h1> 30 may</h1><p>mmmm</p>  </a>
                </div> </div> 
                <div className = "contestLeft">Соперник № 1</div>
                <div className = "contestRight">Соперник № 2</div>
                <div class="hex" id="square2" >  <div class="hexIn">
                <a class="hexLink" href="june17"> <b>17 ИЮНЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
               </div> </div>
               <div class="hex" id="square1" >  <div class="hexIn">
                 <a class="hexLink" href="june26"> <b>26 ИЮНЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
               
                </div>
                ;
             break;
             case ('june17') :
                 info = <div id="hexGrid">
                 <div class="hex" id = "square4" >  <a href="#"></a>  <div class="hexIn">
                 <a class="hexLink" href="may30"> <b>30 МАЯ</b> <h1> 30 may</h1><p>mmmm</p>  </a>
                </div> </div> 
                <div class="hex" id="square3" >  <div class="hexIn">
                <a class="hexLink" href="june17"> <b>Стадион 17 ИЮНЯ 18:00<div><button>Купить</button></div></b>  <h1> 17 june</h1><p>mmmm</p>  </a>
               </div> </div>
               <div className = "contestLeft">Соперник № 3</div>
                <div className = "contestRight">Соперник № 4</div>
               <div class="hex" id="square2" >  <div class="hexIn">
                 <a class="hexLink" href="june26"> <b>26 ИЮНЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
                <div class="hex" id="square1" >  <div class="hexIn">
                 <a class="hexLink" href="july16"> <b>16 ИЮЛЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
                
                </div>
                ;
             break;
             case ('26ofjune') :
                 info = <div id="hexGrid">
                 <div class="hex" id = "square5" >  <a href="#"></a>  <div class="hexIn">
                 <a class="hexLink" href="may30"> <b>30 МАЯ</b> <h1> 30 may</h1><p>mmmm</p>  </a>
                </div> </div> 
                <div class="hex" id="square2" >  <div class="hexIn">
                <a class="hexLink" href="june17"> <b>17 ИЮНЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
               </div> </div>
               <div class="hex" id="square3" >  <div class="hexIn">
                 <a class="hexLink" href="june26"><b>Стадион 26 ИЮНЯ 15:00<div><button>Купить</button></div></b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
                <div className = "contestLeft">Соперник № 5</div>
                <div className = "contestRight">Соперник № 6</div>
                <div class="hex" id="square4" >  <div class="hexIn">
                 <a class="hexLink" href="july16"> <b>16 july</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
                <div class="hex" id="square1" >  <div class="hexIn">
                     <a class="hexLink" href="september30"> <b>30 СЕНТЯБРЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                    </div> </div>
                </div>
                ;
             break;
             case ('16ofjuly') :
                 info = <div id="hexGrid">
                   <div class="hex" id="square2" >  <div class="hexIn">
                     <a class="hexLink" href="september30"> <b>30 СЕНТЯБРЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                    </div> </div>
              <div class="hex" id="square3" >  <div class="hexIn">
                 <a class="hexLink" href="july16"> <b>Стадион 16 ИЮЛЯ 19:00<div><button>Купить</button></div></b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
                <div class="hex" id="square4" >  <div class="hexIn">
                 <a class="hexLink" href="june26"> <b>26 ИЮНЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                </div> </div>
                <div class="hex" id="square5" >  <div class="hexIn">
                <a class="hexLink" href="june17"> <b>17 ИЮНЯ</b> <h1> 17 june</h1><p>mmmm</p>  </a>
               </div> </div>
              
                
                <div className = "contestLeft">Соперник № 7</div>
                <div className = "contestRight">Соперник № 7</div>
                
                </div>
                ;
             break;
            
             case ('30ofseptember') :
                     info = <div id="hexGrid">
                  
                   <div class="hex" id="square5" >  <div class="hexIn">
                     <a class="hexLink" href="june26"> <b>26 june</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                    </div> </div>
                    <div class="hex" id="square4" >  <div class="hexIn">
                     <a class="hexLink" href="july16"> <b>16 july</b> <h1> 17 june</h1><p>mmmm</p>  </a>
                    </div> </div>
                    <div class="hex" id="square3" >  <div class="hexIn">
                         <a class="hexLink" href="september30"> <b>Стадион 30 СЕНТЯБРЯ 19:00<div><button>Купить</button></div></b>  <h1> 17 june</h1><p>mmmm</p>  </a>
                        </div> </div>
                <div className = "contestLeft">Соперник № 8</div>
                <div className = "contestRight">Соперник № 9</div>
                    </div>
                    ;
             break;
             default:
                 info = null;
        }
         return info;
        } 
    
    }

TicketInfo.propTypes = {
type: PropTypes.string.isRequired

};

export default TicketInfo;