import pictureAccueil from '../assets/eberhard-grossgasteiger-e0M3I9vQ6hg-unsplash.jpg';
import pictureProfile from '../assets/frederic_flipo_2023_n&b.jpg';
import '../styles/main.scss';
import Card from '../components/Card';
import { Element } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import skillData from '../datas/skills.json'
import ContactForm from '../components/ContactForm';

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
  const skills = skillData;

  return (
    <div className="main">

      {/* section Accueil haut de page */}
      <section className="welcome" id="welcome">
        <Element  name="welcome"></Element>
        <span className="welcome__block1"></span>
        <span className="welcome__block2"></span>
        <img className="welcome__pictureAccueil" src={pictureAccueil} alt="Paysage de montagne" />
        <div className="welcome__container">
          <h1 className="welcome__container--banner">Créez de la valeur dans l'écosystème internet</h1>
          <div className="welcome__container__ident">
            <img className="welcome__container__ident--pictureProfile" src={pictureProfile} alt="Profile" />
            <div className="welcome__container__ident--sub">
              <h2 className="welcome__container__ident--sub--text1">Frederic FLIPO</h2>  
              <h3 className="welcome__container__ident--sub--text2">Développeur Web</h3>
            </div>
          </div>         
        </div>

      </section>

      {/* section Services */}
      <section className="block" id="services">
        <Element  name="services" className="block__title">Mes services</Element>          
        <div className="block__line"></div>
      </section>

      {/* section Portfolio */}
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
              tags={projet.tags}
            />
          ))}
        </div>
      </section>

      {/* section Compétences */}
      <section className="block" id="competences">
        <Element  name="competences" className="block__title">Compétences</Element>
        <div className="block__line"></div>
        <div className="skillsContainer">
          {skills.map(skill => (
            <div key={skill.id} className="skillsContainer__item">
              <img src={require(`../assets/tech/${skill.logo}`)} alt={skill.skill} className="skillsContainer__logo" />
              <p className="skillsContainer__title">{skill.title}</p>
            </div>
          ))}
        </div>
        <p className="block__text">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper cubilia cras tincidunt nulla cubilia 
          vehicula commodo amet? Hac augue vestibulum enim sem ridiculus platea. Penatibus sed rhoncus conubia 
          sapien natoque volutpat montes maecenas. Etiam laoreet dui, nibh nec cras id facilisis ac. Consectetur 
          nunc at pellentesque at penatibus penatibus curae lorem. Ipsum risus faucibus; class commodo tincidunt fringilla.
        </p>
      </section>

      {/* section Contact */}
      <section className="block" id="contact">
        <Element  name="contact" className="block__title">Vous voulez discuter d'un projet ou juste faire connaissance ?</Element>
        <div className="block__line"></div>
        <ContactForm />
      </section>

    </div>
  )
}

export default Accueil
