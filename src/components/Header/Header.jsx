import React from 'react';

import { NavLink } from 'reactstrap';
import './header.css'
import {Container, Row} from "reactstrap";
import logo from '../../assets/images/eco-logo.png'

const Header = () => {
  return <header className ="header">
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src="{logo}" alt="logo"></img>
            <div>
              <h2>Furniture shop</h2>
              <p>Est 2024</p>
            </div>
          </div> 
          <div classname="navigation">
            <ul className="menu">
              <li className="nav__item">
                 <NavLink to="home">Home</NavLink>
              </li>
              <li className="nav__item">
                 <NavLink to="home">Shop</NavLink>
              </li>
              <li className="nav__item">
                 <NavLink to="home">Cart</NavLink>
              </li>
             
            </ul>

          </div>
          <div className="nav__icons"> 
            <span className="cart__icon"><i
            class="img"></i></span>
            <span><img src="img" alt ="" /> </span>
          </div>
           <div className="mobile__menu">
            <span>menu</span>
           </div>
        </div>
      </Row>
    </Container>
    
  </header>
  
};

export default Header;