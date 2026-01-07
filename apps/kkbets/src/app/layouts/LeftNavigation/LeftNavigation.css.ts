import styled from 'styled-components';

export const StyledLeftNavigation = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 60px;
    height: 100vh;
    padding: 65px 10px 10px 10px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.worldCup.blue} 0%, ${({ theme }) => theme.colors.background.medium} 30%, ${({ theme }) => theme.colors.background.medium} 100%);
    border-right: 2px solid ${({ theme }) => theme.colors.worldCup.gold};
    z-index: 99;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.gold} 0%, transparent 100%);
      opacity: 0.1;
      pointer-events: none;
    }

    i {
      display: block;
      padding: 12px 0;
      cursor: pointer;
      font-size: 28px;
      color: ${({ theme }) => theme.colors.font.dark};
      transition: all 0.3s ease;
      text-align: center;
      border-radius: 8px;
      margin: 5px 0;

      &:hover {
        color: ${({ theme }) => theme.colors.worldCup.gold};
        background: rgba(255, 215, 0, 0.1);
        transform: scale(1.1);
      }
    }

    .left-nav-icon {
      position: relative;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 215, 0, 0.1);
      }

      &.active {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.gold} 0%, #FFA500 100%);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);

        i {
          color: ${({ theme }) => theme.colors.background.dark};
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        &::after {
          content: '';
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent.light} 0%, #00FF7F 100%);
          border-radius: 50%;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
          box-shadow: 0 0 8px rgba(11, 182, 89, 0.6);
          animation: pulse 2s infinite;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%);
          border-radius: 8px;
          animation: shine 2s infinite;
        }
      }
    }

    .world-cup-indicator {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
      animation: bounce 2s infinite;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-50%) scale(1.2);
    }
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;
