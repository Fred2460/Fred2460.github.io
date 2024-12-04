import pictureAccueil from '../assets/20240622_195224.jpg';
import '../styles/main.scss';
import Card from '../components/Card';
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Accueil({ logements }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="main">
      <section className="welcome" id="welcome">
        <Element  name="welcome"></Element>
        <img src={pictureAccueil} alt="Buissons" />
      </section>

      <section className="block" id="services">
        <Element  name="services" className="block__title">Créez de la valeur dans l'écosystème internet</Element>          
        <div className="block__line"></div>
      </section>

      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>

      <section id="competences">
        <Element  name="competences">Bienvenue à la section Compétences</Element>
        <div className="block__line"></div>
      </section>

      <section className="block" id="contact">
        <Element  name="contact" className="block__title">Vous voulez discuter d'un projet ou juste faire connaissance ?</Element>
        <div className="block__line"></div>
        
        <form className="formContact">
          <div>
            <label for="c_name"></label>
            <input id="c_name" type="text" name="c_name" placeholder="Nom" required  className="formContact__field"></input>
          </div>

          <div>
            <label for="c_email"></label>
            <input id="c_email" type="email" name="c_email" placeholder="Adresse email" required className="formContact__field"></input>
          </div>

          <div >
            <label for="c_message"></label>
            <textarea id="c_message" type="text" name="c_message" placeholder="Votre message" required className="formContact__field"></textarea>
          </div>
          <input className="formContact__field formContact__field--submit" type="submit" value="Envoyer votre message"/>
        </form>
      </section>

    </div>
  )
}

export default Accueil
