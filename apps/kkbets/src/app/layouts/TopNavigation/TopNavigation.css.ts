import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 11px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.blue} 0%, ${({ theme }) => theme.colors.background.dark} 50%, ${({ theme }) => theme.colors.worldCup.blue} 100%);
  border-bottom: 2px solid ${({ theme }) => theme.colors.worldCup.gold};
  height: 55px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
    animation: shimmer 3s infinite;
    pointer-events: none;
  }

  .user-data {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      justify-content: space-between;
      min-width: 200px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      min-width: 250px;
    }
  }

  .admin-panel-btn {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.gold} 0%, #FFA500 100%);
    color: ${({ theme }) => theme.colors.background.dark};
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .tournament-info {
    display: none;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.worldCup.gold};
    font-size: 0.85rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
    }

    .tournament-flag {
      font-size: 1.2rem;
      animation: wave 2s ease-in-out infinite;
    }

    .tournament-text {
      display: flex;
      flex-direction: column;
      line-height: 1.2;

      .main {
        font-size: 0.9rem;
      }

      .sub {
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.font.dark};
      }
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

  @keyframes wave {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
  }
`;
