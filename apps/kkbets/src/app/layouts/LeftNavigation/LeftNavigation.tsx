import { useState } from 'react';
import AuthDisplayOnlyWrapper from '../../wrappers/AuthDisplayOnlyWrapper';
import { StyledLeftNavigation } from './LeftNavigation.css';
import LeftNavigationView from './LeftNavigationView';

interface LeftNavigationProps {
  open: () => void;
  close: () => void;
  active: boolean;
}

function LeftNavigation(props: LeftNavigationProps): JSX.Element {
  const [activeLeftContent, setActiveLeftContent] = useState('football');

  const changeCategory = (name: string, e: React.MouseEvent<HTMLElement>): void => {
    setActiveLeftContent(name);
    const activeElement = document.querySelector('.left-nav-icon.active');

    if (activeElement) activeElement.classList.remove('active');

    const target = e.target as Element;
    if (target && target.parentElement) target.parentElement.classList.add('active');
    props.open();
  };

  return (
    <div className="display-above-md">
      <StyledLeftNavigation>
        {/* World Cup Matches */}
        <div className="left-nav-icon active" title="World Cup Matches">
          <i className="icon-soccer-ball" onClick={(e) => changeCategory('football', e)} />
        </div>
        
        {/* My Bets */}
        <AuthDisplayOnlyWrapper>
          <div className="left-nav-icon" title="My World Cup Bets">
            <i className="icon-clipboard" onClick={(e) => changeCategory('coupons', e)} />
          </div>
        </AuthDisplayOnlyWrapper>
        
        {/* Tournament Ranking */}
        <div className="left-nav-icon" title="World Cup Leaderboard">
          <i className="icon-award" onClick={(e) => changeCategory('ranking', e)} />
        </div>
        
        {/* Live Chat */}
        <div className="left-nav-icon" title="World Cup Chat">
          <i className="icon-chat" onClick={(e) => changeCategory('chat', e)} />
        </div>
        
        {/* Tournament Info */}
        <div className="left-nav-icon" title="Tournament Information">
          <i className="icon-info-circled" onClick={(e) => changeCategory('info', e)} />
        </div>

        {/* World Cup Indicator */}
        <div className="world-cup-indicator">🏆</div>
      </StyledLeftNavigation>
      <LeftNavigationView activeContent={activeLeftContent} close={props.close} active={props.active} />
    </div>
  );
}

export default LeftNavigation;
