import styled from 'styled-components';

export const StyledRightPanel = styled.aside`
  text-align: center;
  width: 21%;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  padding: 25px 0px 25px 0px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.worldCup.blue} 0%, ${({ theme }) => theme.colors.background.dark} 20%, ${({ theme }) => theme.colors.background.dark} 100%);
  border-left: 2px solid ${({ theme }) => theme.colors.worldCup.gold};
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.gold} 0%, transparent 100%);
    opacity: 0.1;
    pointer-events: none;
  }

  &::after {
    content: '🏆 FIFA World Cup 2026 🏆';
    position: absolute;
    top: 70px;
    left: 10px;
    right: 10px;
    color: ${({ theme }) => theme.colors.worldCup.gold};
    font-size: 0.85rem;
    font-weight: 600;
    text-align: center;
    padding: 8px;
    background: rgba(30, 60, 114, 0.2);
    border-radius: 6px;
    border: 1px solid rgba(255, 215, 0, 0.3);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    animation: glow 3s ease-in-out infinite alternate;
  }

  /* World Cup themed scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.dark};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.gold} 0%, #FFA500 100%);
    border-radius: 3px;
    
    &:hover {
      background: linear-gradient(135deg, #FFA500 0%, ${({ theme }) => theme.colors.worldCup.gold} 100%);
    }
  }

  @keyframes glow {
    from {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
    to {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3);
    }
  }
`;
