import { StyledLogo } from './Logo.css';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

function Logo(): JSX.Element {
  const theme = useTheme();

  return (
    <StyledLogo>
      <Link to="/">
        <div className="logo-container">
          <div className="logo-icon">🏆</div>
          <div className="logo-text">
            <span className="main-text">FIFA WC</span>
            <span className="sub-text">2026</span>
          </div>
        </div>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
