import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ticketInfo.css';

class TicketInfo extends Component {
    
    
    
    render(){
        let info = null;

   // выбор вариантов расположения билетов и их информации
   // к каждому элементу добавлена ссылка на адрес страницы, который используется как переменная для выбора
   // варианта расположения билетов

        switch (this.props.type){
             //вариант с билетом на 30 мая в центре
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
             //вариант с билетом на 17 июня в центре
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
             //вариант с билетом на 26 июня в центре
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
             //вариант с билетом на 16 июля в центре
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
            //вариант с билетом на 30 сентября в центре
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
// удостоверяемся что передаем строку
TicketInfo.propTypes = {
type: PropTypes.string.isRequired

};

export default TicketInfo;