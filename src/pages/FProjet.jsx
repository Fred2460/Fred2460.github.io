import '../styles/fprojet.scss'
import Error from './Erreur'
import projetsData from '../datas/projets.json'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'

function FProjet() {
  /* récupération de l'id et des informations du logement sélectionné */
  const { id } = useParams()
  const projet = projetsData.find((projet) => projet.id === id)

  /* gestion du cas où le projet de l'id sélectionné n'existe pas */
  if (!projet) {
    return <Error />
  }

  return (
    <div className='info'>

      {/* Carrousel de photos */}
      <Carousel className="carousel" pictures={projet.pictures} />

      {/* informations principales du logement */}
      <div className="infoBlock">
        <div className='identification'> 
          <h1 className='identification__title'>{projet.title}</h1>
          <p className='identification__location'>{projet.location}</p>
          <div className='identification__tags'> {/* tags du logement */}
            {projet.tags.map((tag, index) => (
              <p key={index} className={tag !== undefined ? 'identification__tags--tag' : ''}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* informations détaillées du projet */}
      <div className="details">
          <article  className="details__block">
            <Collapse title="Détails de la mise en oeuvre">
              <span>
                {projet.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </span>
            </Collapse>
          </article>
      </div>
    </div>
  )
}

export default FProjet
  