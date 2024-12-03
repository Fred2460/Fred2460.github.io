import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from "react-scroll";

//import PinkLogo from '../assets/logo_KasaPink.png'
//import Navbar from './Navbar'

const NavContainer = styled.nav`
  padding: 45px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin-left: 100px;
  margin-right: 100px;
  
  @media(min-width: 480px) and (max-width: 1024px) {
    padding: 30px 0;
    margin-left: 50px;
    margin-right: 50px;
  }

  @media(max-width: 480px) {
    padding: 20px 0;  
    margin-left: 20px;
    margin-right: 20px;
  }  
`

const NavBlock = styled.nav`
  display: flex;
  justify-content: right;
  gap: 57px;
 
  @media(min-width: 480px) and (max-width: 1024px) {
    gap: 35px;
  }

  @media(max-width: 480px) {
    gap: 20px;
  }
`

const StyledLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  &.active { 
    text-decoration: underline;
  }

  @media(min-width: 480px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media(max-width: 480px) {
    font-size: 12px;
    text-transform: uppercase;
  }  
`

function Header() {
  return (
    <NavContainer>
        <NavBlock>
          <StyledLink to="/">Accueil</StyledLink>
          <Link to="activites" smooth={true} duration={500}>
          Activités
          </Link>
          <Link to="competences" smooth={true} duration={500}>
          Compétences
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          <StyledLink to="/APropos">Portfolio</StyledLink>
        </NavBlock>
    </NavContainer>
  )
}

export default Header
