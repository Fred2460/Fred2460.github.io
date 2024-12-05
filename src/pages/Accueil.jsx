import pictureAccueil from '../assets/20240622_195224.jpg';
import '../styles/main.scss';
import Card from '../components/Card';
import { Element } from "react-scroll";
import { useEffect } from "react";
//import { useState } from "react";
import { useLocation } from "react-router-dom";
//import skillData from '../datas/skills.json'
//import Carousel from '../components/Carousel'

function Accueil({ projets }) {

  /* gestion des redirections */
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  /* tableau des compétences */
  /*
  const SkillsList = () => {
    const [skills, setSkills] = useState([]);
  
    useEffect(() => {
      // Fetch the JSON file
      fetch('/skills.json')
        .then(response => response.json())
        .then(data => {
          // Assuming the JSON file contains an array of skills
          setSkills(data);
        })
        .catch(error => {
          console.error('Error fetching the skills data:', error);
        });
    }, []);
    */

  return (
    <div className="main">
      <section className="welcome" id="welcome">
        <Element  name="welcome"></Element>
        <div className="welcome__container">
          <img className="welcome__picture" src={pictureAccueil} alt="Buissons" />
          <h1 className="welcome__banner">Créez de la valeur dans l'écosystème internet</h1>
        </div>
      </section>

      <section className="block" id="services">
        <Element  name="services" className="block__title">Mes services</Element>          
        <div className="block__line"></div>
      </section>

      <section className="block" id="portfolio">
        <Element  name="portfolio" className="block__title">Portfolio</Element>       
        <div className="block__line"></div>
        <div className="gallery">
          {projets.map((projet) => (
            <Card
              key={projet.id}
              id={projet.id}
              title={projet.title}
              cover={projet.cover}
            />
          ))}
        </div>
      </section>

      <section className="block" id="competences">
        <Element  name="competences" className="block__title">Compétences</Element>
        <div className="block__line"></div>
        <p className="block__text">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper cubilia cras tincidunt nulla cubilia 
          vehicula commodo amet? Hac augue vestibulum enim sem ridiculus platea. Penatibus sed rhoncus conubia 
          sapien natoque volutpat montes maecenas. Etiam laoreet dui, nibh nec cras id facilisis ac. Consectetur 
          nunc at pellentesque at penatibus penatibus curae lorem. Ipsum risus faucibus; class commodo tincidunt fringilla.
        </p>
        {/*<Carousel className="carousel" pictures={skill.logo} />*/}
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
