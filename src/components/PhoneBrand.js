import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowIcon from '../assets/ShowIcon.png';

const PhoneBrand = (props) => {
  const {
    id, brand, total, brandQuery,
  } = props;
  return (
  <li className="brand-container" key={id}>
    <button type="button" className="show-icon"><Link to={`phones/${brandQuery}`}><img src={ShowIcon} alt="Show icon" /></Link></button>
    <div className="brand-name">{brand}</div>
    <p className="total-phones">{total}</p>
   </li>
  );
};

export default PhoneBrand;

PhoneBrand.propTypes = {
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  brandQuery: PropTypes.string,
};