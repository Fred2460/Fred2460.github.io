import PropTypes from "prop-types"
import "../styles/main.scss"
//import projetsData from './datas/projets.json'

function HandleClick(id) {
  window.location.href=`/FProjet/${id}`
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
  
}



function Card({ id = "", title = "", cover = "", tags }) {

  return (
    <div className="gallery__card" onClick={() => HandleClick(id)}>
      <div className="gallery__card--overlay"></div>
      <img src={require(`../assets/${cover}`)} alt="Aperçu du projet" className="gallery__card--cover" />
      <p className="gallery__card--title">{title}</p>
      <ul>
        {(tags && tags.length >0) ? (
          tags.map((tag, index) => (
          <li key={index} className={tag !== undefined ? 'gallery__card--tags' : ''}>
            {tag}
          </li>))
          ) : (
            <li></li>
        )}
      </ul>
    </div>
  )
}

export default Card

/*
      <img src={require(`../assets/${cover}`)} className="gallery__card--cover" alt="Aperçu du projet" />
      <img src={cover} className="gallery__card--cover" alt="Aperçu du projet" />
*/