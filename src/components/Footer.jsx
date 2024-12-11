import '../styles/footer.scss';
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
    return (
      <div className='footer'>
        <section className='footer__logos'>
          <a href="https://github.com/Fred2460" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/frederic-flipo-20190360" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
          </a>
        </section>
        <section className="footer__coord">
          <ul className="footer__coord__contact">
          	<li class="footer__coord__contact--title">Mes coordonnées</li>
          	<li>27 rue Georges Clemenceau</li>
            <li>60750 Choisy-au-Bac, France</li>
          	<li>Tel: +33 (0)6 82 86 01 66</li>
          </ul>
          <ul className="footer__coord__contact">
          	<li class="footer__coord__contact--title">Horaires d'appel</li>
          	<li>du lundi au vendredi de 10h à 19h</li>
          </ul>
        </section>
        <p>© 2024 Frederic FLIPO. Tous droits réservés</p>
      </div>
    )
  }
  
  export default Footer
  