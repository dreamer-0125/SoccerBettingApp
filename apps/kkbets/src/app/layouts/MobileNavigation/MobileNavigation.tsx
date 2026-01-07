import React from 'react';
import ReactDom from 'react-dom';
import { StyledMobileNavigation } from './MobileNavigation.css';
import { NavLink } from 'react-router-dom';
import AuthDisplayOnlyWrapper from '../../wrappers/AuthDisplayOnlyWrapper';

function MobileNavigation(): JSX.Element {
  return ReactDom.createPortal(
    <StyledMobileNavigation>
      <nav>
        <ul>
          {/* World Cup Home */}
          <li className="world-cup-nav">
            <NavLink to="/" title="World Cup Home">
              <i className="icon-home" />
              <span className="nav-label">Home</span>
            </NavLink>
          </li>
          
          {/* My Bets */}
          <AuthDisplayOnlyWrapper>
            <li>
              <NavLink to="/coupons" title="My World Cup Bets">
                <i className="icon-clipboard" />
                <span className="nav-label">Bets</span>
              </NavLink>
            </li>
          </AuthDisplayOnlyWrapper>
          
          {/* Tournament Ranking */}
          <li>
            <NavLink to="/ranking" title="World Cup Leaderboard">
              <i className="icon-award" />
              <span className="nav-label">Ranking</span>
            </NavLink>
          </li>
          
          {/* Live Chat */}
          <li>
            <NavLink to="/chat" title="World Cup Chat">
              <i className="icon-chat" />
              <span className="nav-label">Chat</span>
            </NavLink>
          </li>
          
          {/* User Profile */}
          <AuthDisplayOnlyWrapper>
            <li>
              <NavLink to="/users" title="My Profile">
                <i className="icon-user" />
                <span className="nav-label">Profile</span>
              </NavLink>
            </li>
          </AuthDisplayOnlyWrapper>
        </ul>
      </nav>
    </StyledMobileNavigation>,
    document.getElementById('mobile-nav')!
  );
}

export default MobileNavigation;
