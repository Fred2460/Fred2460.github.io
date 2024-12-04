import { NavLink } from 'react-router-dom'
import '../styles/header.scss';


function Header() {
  return (
    <div className='navCont'>
        <div className='navCont__block'>
          <NavLink className='navCont__block--link' to="/#welcome">Accueil</NavLink>
          <NavLink className='navCont__block--link2' to="/#services">Services</NavLink>
          <NavLink className='navCont__block--link2' to="/#portfolio">Portfolio</NavLink>
          <NavLink className='navCont__block--link2' to="/#competences">Compétences</NavLink>
          <NavLink className='navCont__block--link2' to="/#contact">Contact</NavLink>
          <NavLink className='navCont__block--link' to="/APropos">A-Propos</NavLink>
        </div>
    </div>
  )
}

export default Header
