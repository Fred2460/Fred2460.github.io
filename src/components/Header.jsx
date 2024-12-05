import { NavLink } from 'react-router-dom'
import '../styles/header.scss';


function Header() {
  return (
    <div className='navCont'>
        <div className='navCont__block'>
          <NavLink className='navCont__block--link' to="/#welcome">Accueil</NavLink>
          <NavLink className='navCont__block--link' to="/#services">Services</NavLink>
          <NavLink className='navCont__block--link' to="/#portfolio">Portfolio</NavLink>
          <NavLink className='navCont__block--link' to="/#competences">Compétences</NavLink>
          <NavLink className='navCont__block--link' to="/APropos">A-Propos</NavLink>
          <NavLink className='navCont__block--linkB' to="/#contact">A votre écoute</NavLink>
        </div>
    </div>
  )
}

export default Header
