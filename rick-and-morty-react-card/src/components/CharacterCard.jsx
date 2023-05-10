import PropTypes from 'prop-types';
import "./CharacterCard.css";

const CharacterCard = ({image, name, status, species, location_name, location_url, origin_name, origin_url}) => (

  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={image}
        alt={name}
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{name}</h2>
        <span className="status">
          <span className={status}></span>
          {species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={location_url}>{location_name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={origin_url}>{origin_name}</a>
      </div>
    </div>
  </article>
);

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  location_name: PropTypes.string, 
  location_url: PropTypes.string, 
  origin_name: PropTypes.string,
  origin_url: PropTypes.string,
}

export default CharacterCard;