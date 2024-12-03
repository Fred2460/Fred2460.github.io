import pictureAccueil from '../assets/eberhard-grossgasteiger-e0M3I9vQ6hg-unsplash.jpg';
import '../styles/main.scss';
import Card from '../components/Card';
import { Element } from "react-scroll";


function Accueil({ logements }) {
  return (
    <div className="main">
      <div className="welcome">
        <img src={pictureAccueil} alt="Montagne" />
      </div>

      <div>
        <Element name="activites">Bienvenue à la section Activités</Element>
      </div>

      <div>
        <Element name="competences">Bienvenue à la section Compétences</Element>
      </div>

      <div>
        <Element name="contact">Bienvenue à la section Contact</Element>
      </div>

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
    </div>
  )
}

export default Accueil
