import React from 'react';
import './NavItems.css';
import NavigatiomItem from '../NavItem/NavItem';
import Logo from '../../Logo/Logo'
import MenuLogo from '../../Logo/MenuLogo'
import LoginLogo from '../../../assets/images/login.png';


const navigationItems = ()=> (
<ul className="NavItems" >
    <NavigatiomItem link ="#"> БИЛЕТЫ И АБОНЕМЕНТЫ  </NavigatiomItem>
    <NavigatiomItem link ="#"> Как купить </NavigatiomItem>
    <NavigatiomItem link ="#"> Правила  </NavigatiomItem>
    <NavigatiomItem link ="#"> Возврат билетов  </NavigatiomItem>
    
    <NavigatiomItem link ="#"  ><img src ={LoginLogo} alt='LoginLogo' style = {{height : "70%" }}/> Войти </NavigatiomItem>
   
    <MenuLogo/>

</ul>
);
export default navigationItems;