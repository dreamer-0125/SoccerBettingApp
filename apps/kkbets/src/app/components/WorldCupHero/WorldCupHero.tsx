import React from 'react';
import { StyledWorldCupHero } from './WorldCupHero.css';
import { WORLD_CUP_2026 } from '../../constants/worldcup';

function WorldCupHero(): JSX.Element {
  return (
    <StyledWorldCupHero>
      <div className="hero-content">
        <div className="hero-text">
          <h1>🏆 FIFA World Cup 2026</h1>
          <h2>United • Canada • Mexico</h2>
          <p>The biggest football tournament is coming! Place your bets on 48 teams competing across 16 host cities.</p>
          <div className="tournament-stats">
            <div className="stat">
              <span className="number">{WORLD_CUP_2026.TOTAL_TEAMS}</span>
              <span className="label">Teams</span>
            </div>
            <div className="stat">
              <span className="number">{WORLD_CUP_2026.TOTAL_MATCHES}</span>
              <span className="label">Matches</span>
            </div>
            <div className="stat">
              <span className="number">16</span>
              <span className="label">Cities</span>
            </div>
            <div className="stat">
              <span className="number">3</span>
              <span className="label">Countries</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="trophy-icon">🏆</div>
          <div className="host-flags">
            <span className="flag">🇺🇸</span>
            <span className="flag">🇨🇦</span>
            <span className="flag">🇲🇽</span>
          </div>
        </div>
      </div>
      <div className="hero-gradient"></div>
    </StyledWorldCupHero>
  );
}

export default WorldCupHero;