import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowIcon from '../assets/ShowIcon.png';

const Phone = (props) => {
  const {
    id, name, image, brandQuery,
  } = props;
  return (
    <li className="country-container">
    <img src={image} alt="Country" />
    <h2 className="country-text">{name}</h2>
    <p className="text-views">{id}</p>
    <Link to={`/details/${brandQuery}`}>
      <button type="button" className="show-icon">
        <img src={ShowIcon} alt="Show Icon" />
      </button>
    </Link>
  </li>
  );
};

export default Phone;

Phone.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  brandQuery: PropTypes.string,
};