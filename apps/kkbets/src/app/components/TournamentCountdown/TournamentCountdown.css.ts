import styled from 'styled-components';

export const StyledTournamentCountdown = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background.medium} 0%, ${({ theme }) => theme.colors.background.light} 100%);
  border: 2px solid ${({ theme }) => theme.colors.accent.light};
  border-radius: 12px;
  margin: 20px 0;
  padding: 25px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(11, 182, 89, 0.1), transparent);
    animation: shimmer 3s infinite;
  }

  .countdown-content {
    position: relative;
    z-index: 1;

    h3 {
      color: ${({ theme }) => theme.colors.font.light};
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    p {
      color: ${({ theme }) => theme.colors.font.dark};
      font-size: 1.1rem;
      margin: 0;
    }
  }

  .countdown-timer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      gap: 10px;
    }
  }

  .time-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.colors.background.dark};
    padding: 15px 12px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.accent.light};
    min-width: 70px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 12px 8px;
      min-width: 60px;
    }

    .number {
      color: ${({ theme }) => theme.colors.accent.light};
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
      text-shadow: 0 0 10px rgba(11, 182, 89, 0.3);

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.6rem;
      }
    }

    .label {
      color: ${({ theme }) => theme.colors.font.dark};
      font-size: 0.8rem;
      font-weight: 500;
      margin-top: 5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .separator {
    color: ${({ theme }) => theme.colors.accent.light};
    font-size: 2rem;
    font-weight: 700;
    animation: blink 1s infinite;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.6rem;
    }
  }

  .tournament-date {
    color: ${({ theme }) => theme.colors.font.light};
    font-size: 1rem;
    font-weight: 500;
    margin-top: 15px;
    padding: 10px 20px;
    background: rgba(11, 182, 89, 0.1);
    border-radius: 20px;
    display: inline-block;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0.3;
    }
  }
`;