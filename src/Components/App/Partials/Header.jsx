import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader } from './Styled.header'

const Header = () => {
  return (
    <StyledHeader>
        <nav>
            <ul>
                <li><NavLink to="/">FORSIDE</NavLink></li>
                <li><NavLink to="/produkter">PRODUKTER</NavLink></li>
                <li><NavLink to="/"><h1>bageriet</h1></NavLink></li>
                <li><NavLink to="/kontakt">KONTAKT</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </nav>
    </StyledHeader>
  )
}

export default Header