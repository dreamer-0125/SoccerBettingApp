import styled from 'styled-components';

export const StyledLogo = styled.div`
  width: 135px;

  svg {
    height: 32px;
    margin-left: 4px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 36px;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 44px;
    line-height: 30px;
    font-weight: 800;
    padding: 5px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 52px;
    }
  }

  .first-letter {
    color: ${({ theme }) => theme.colors.accent.light};
  }

  .right-logo {
    margin-left: 7px;
    color: ${({ theme }) => theme.colors.font.light};
    font-size: 0.4em;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    .logo-icon {
      font-size: 2rem;
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
      animation: glow 2s ease-in-out infinite alternate;

      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 2.2rem;
      }
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1;

      .main-text {
        color: ${({ theme }) => theme.colors.font.light};
        font-size: 1.2rem;
        font-weight: 700;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1.4rem;
        }
      }

      .sub-text {
        color: ${({ theme }) => theme.colors.accent.light};
        font-size: 0.9rem;
        font-weight: 600;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1rem;
        }
      }
    }
  }

  @keyframes glow {
    from {
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    }
    to {
      filter: drop-shadow(2px 2px 8px rgba(255, 215, 0, 0.4));
    }
  }
`;
