import styled from 'styled-components';

export const StyledWorldCupHero = styled.div`
  position: relative;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  border-radius: 12px;
  margin: 20px 0;
  overflow: hidden;
  min-height: 200px;

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    position: relative;
    z-index: 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: column;
      text-align: center;
      padding: 25px 20px;
    }
  }

  .hero-text {
    flex: 1;
    max-width: 60%;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      max-width: 100%;
      margin-bottom: 20px;
    }

    h1 {
      color: #ffffff;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 8px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 2rem;
      }
    }

    h2 {
      color: #ffd700;
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 15px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.2rem;
      }
    }

    p {
      color: #e8f4fd;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 25px;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1rem;
      }
    }
  }

  .tournament-stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      justify-content: center;
      gap: 15px;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 12px 16px;
      border-radius: 8px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);

      .number {
        color: #ffd700;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
      }

      .label {
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 500;
        margin-top: 4px;
      }
    }
  }

  .hero-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: center;
    }

    .trophy-icon {
      font-size: 4rem;
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
      animation: float 3s ease-in-out infinite;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 3rem;
      }
    }

    .host-flags {
      display: flex;
      gap: 10px;

      .flag {
        font-size: 2.5rem;
        filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 2rem;
        }
      }
    }
  }

  .hero-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 215, 0, 0.1) 0%, transparent 50%, rgba(255, 215, 0, 0.1) 100%);
    pointer-events: none;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;