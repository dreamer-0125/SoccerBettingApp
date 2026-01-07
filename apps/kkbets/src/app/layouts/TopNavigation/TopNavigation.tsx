import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Auth from '../../components/Auth/Auth';

import Logo from '../../components/Logo/Logo';
import { StyledHeader } from './TopNavigation.css';
import Avatar from '../../components/Avatar/Avatar';
import Currency from '../../components/Currency/Currency';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { WORLD_CUP_2026 } from '../../constants/worldcup';

function TopNavigation(): JSX.Element {
  const { isLogged, userData } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Logo />
        
        {/* World Cup Tournament Info */}
        <div className="tournament-info">
          <div className="tournament-flag">🏆</div>
          <div className="tournament-text">
            <span className="main">FIFA World Cup 2026</span>
            <span className="sub">USA • Canada • Mexico</span>
          </div>
        </div>

        {userData?.admin && (
          <button 
            className="admin-panel-btn display-above-md" 
            onClick={() => navigate('/admin')}
          >
            🛠️ Admin Panel
          </button>
        )}
      </div>

      {isLogged ? (
        <div className="user-data">
          {/* FIFA Coins Display */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '1.2rem' }}>🪙</span>
            <Currency value={userData.fifaCoins || userData.points} />
          </div>
          
          {/* User Avatar with World Cup Badge */}
          <div style={{ position: 'relative' }}>
            <Avatar
              username={userData.username}
              src={userData.showAvatar ? userData.avatarUrl : ''}
              className="display-above-sm"
              width="45px"
            />
            {userData.favoriteTeam && (
              <div style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                fontSize: '0.8rem',
                background: 'rgba(0,0,0,0.7)',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                ⚽
              </div>
            )}
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </StyledHeader>
  );
}

export default TopNavigation;
