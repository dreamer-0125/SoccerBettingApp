import styled from 'styled-components';

export const StyledMobileNavigation = styled.aside`
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.blue} 0%, ${({ theme }) => theme.colors.background.dark} 50%, ${({ theme }) => theme.colors.worldCup.blue} 100%);
  border-top: 2px solid ${({ theme }) => theme.colors.worldCup.gold};
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
    animation: shimmer 4s infinite;
    pointer-events: none;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  li {
    position: relative;
    padding: 8px;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 215, 0, 0.1);
      transform: translateY(-2px);
    }
  }

  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.font.dark};
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-decoration: none;

    &.active {
      color: ${({ theme }) => theme.colors.worldCup.gold};
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
      
      i {
        transform: scale(1.2);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 6px;
        background: ${({ theme }) => theme.colors.worldCup.gold};
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
        animation: pulse 2s infinite;
      }
    }

    i {
      transition: all 0.3s ease;
    }

    .nav-label {
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: 2px;
      opacity: 0.8;
    }
  }

  /* World Cup themed navigation items */
  .world-cup-nav {
    position: relative;

    &::before {
      content: '⚽';
      position: absolute;
      top: -5px;
      right: -5px;
      font-size: 0.8rem;
      opacity: 0.7;
      animation: spin 3s linear infinite;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
    
    a {
      font-size: 1.8rem;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.7;
      transform: translateX(-50%) scale(1.3);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
