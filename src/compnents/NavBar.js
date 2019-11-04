import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import  logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from "styled-components";


export default  class NavBar extends Component {

    render() {

        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                    <Link to="/" className="nav-link">
                        <img src={logo} alt="Srore" className="navbar-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                    Nearby Shops
                            </Link>
                        </li>
                    </ul>
                    <Link to="/preferred" className="ml-auto">
                                <ButtonContainer>
                                    <i className="fas fa-cart-plus"/>
                                    My preferred Shops
                                </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>

        )
    }

}
const NavWrapper = styled.nav `
 
  background:var(--mainBlue);
  .nav-link { 
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  text-transform : capitalize !important;
 
  } 
  
 
`;


