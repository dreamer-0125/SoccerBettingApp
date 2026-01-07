import { StyledBanner } from './Banner.css';

function Banner(props: { image: string }): JSX.Element {
  // For now, we'll create a World Cup themed banner instead of using the image
  // until we have the actual World Cup 2026 banner image
  return (
    <StyledBanner>
      <div className="worldcup-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h2>🏆 FIFA World Cup 2026</h2>
            <p>USA • Canada • Mexico</p>
            <span>Place your bets on the world's biggest tournament!</span>
          </div>
          <div className="banner-visual">
            <div className="trophy">🏆</div>
            <div className="flags">
              <span>🇺🇸</span>
              <span>🇨🇦</span>
              <span>🇲🇽</span>
            </div>
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}

export default Banner;
