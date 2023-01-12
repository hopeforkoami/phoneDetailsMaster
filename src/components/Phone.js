import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowIcon from '../assets/ShowIcon.png';

const Phone = (props) => {
  const {
    name, image, brandQuery,
  } = props;
  return (
    <li className="phone-container">
    <img src={image} alt="Phone image" className='phoneimage' />
    <h2 className="phone-name">{name}</h2>
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  brandQuery: PropTypes.string,
};