import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoBackIcon from '../assets/GoBackIcon.png';
import MicIcon from '../assets/MicIcon.png';
import SettingsIcon from '../assets/SettingsIcon.png';

const Header = (props) => {
  const { previewLink } = props;
  return (<header>
      <nav>
        <button type="button" className="navigation-icons"><Link to={previewLink}><img src={GoBackIcon} alt="Go back icon" /></Link></button>
        <h1>Phone Details Master</h1>
        <div>
          <button type="button" className="navigation-icons"><img src={MicIcon} alt="Go back icon" /></button>
          <button type="button" className="navigation-icons"><img src={SettingsIcon} alt="Go back icon" /></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  previewLink: PropTypes.string,
};