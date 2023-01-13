import PropTypes from 'prop-types';

const Phone = (props) => {
  const {
    key, name, image,
  } = props;
  return (
    <li key={key} className="phone-container">
    <img src={image} alt="Phone image" className='phoneimage' />
    <h2 className="phone-name">{name}</h2>
  </li>
  );
};

export default Phone;

Phone.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  brandQuery: PropTypes.string,
};