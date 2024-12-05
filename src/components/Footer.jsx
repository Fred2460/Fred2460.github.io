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
        <p>© 2024 Frederic FLIPO. Tous droits réservés</p>
      </div>
    )
  }
  
  export default Footer
  