import styled from 'styled-components';

interface LeftNavigationViewStyleProps {
  active: boolean;
}

export const StyledLeftNavigationView = styled.div<LeftNavigationViewStyleProps>`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background.light} 0%, ${({ theme }) => theme.colors.background.medium} 100%);
  border: 1px solid ${({ theme }) => theme.colors.worldCup.gold};
  border-left: 3px solid ${({ theme }) => theme.colors.worldCup.gold};
  transition: 0.8s;
  left: 60px;
  padding: 95px 12px 25px;
  height: 100vh;
  width: 300px;
  position: fixed;
  top: 0;
  transform: translateX(${({ active }) => (active ? '0' : '-100%')});
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.worldCup.blue} 0%, transparent 100%);
    opacity: 0.3;
    pointer-events: none;
  }

  &::after {
    content: '🏆 FIFA World Cup 2026';
    position: absolute;
    top: 65px;
    left: 12px;
    right: 12px;
    color: ${({ theme }) => theme.colors.worldCup.gold};
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    padding: 8px;
    background: rgba(30, 60, 114, 0.2);
    border-radius: 6px;
    border: 1px solid rgba(255, 215, 0, 0.3);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .closeBtn {
    position: absolute;
    right: 15px;
    top: 70px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.worldCup.gold};
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);

    &:hover {
      background: #FFA500;
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(255, 215, 0, 0.5);
    }

    i {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.background.dark};
      transition: 0.3s;
      display: block;
    }
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
`;
