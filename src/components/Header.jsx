import { NavLink } from 'react-router-dom'
import '../styles/header.scss';


function Header() {
  return (
    <div className='navCont'>
        <div className='navCont__block'>
          <NavLink className='navCont__block--link' to="/#welcome">Accueil</NavLink>
          <NavLink className='navCont__block--link' to="/#contact">Contact_D</NavLink>
          <NavLink className='navCont__block--link2' to="/#services" smooth={true} duration={500}>Services</NavLink>
          <NavLink className='navCont__block--link2' to="/#portfolio" smooth={true} duration={500}>Portfolio</NavLink>
          <NavLink className='navCont__block--link2' to="/#competences" smooth={true} duration={500}>Compétences</NavLink>
          <NavLink className='navCont__block--link2' to="/#contact" smooth={true} duration={500}>Contact</NavLink>
          <NavLink className='navCont__block--link' to="/APropos">A-Propos</NavLink>
        </div>
    </div>
  )
}

export default Header
