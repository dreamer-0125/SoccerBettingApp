import styled from 'styled-components';

export const StyledMainPage = styled.div`
  .matches-container {
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }

  .section-header {
    margin: 30px 0 20px 0;
    text-align: center;
    
    h2 {
      color: ${({ theme }) => theme.colors.font.light};
      font-size: 1.8rem;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    p {
      color: ${({ theme }) => theme.colors.font.dark};
      font-size: 1rem;
      margin: 0;
    }
  }

  .no-matches {
    text-align: center;
    margin: 50px auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.background.medium} 0%, ${({ theme }) => theme.colors.background.light} 100%);
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.colors.accent.light};
    max-width: 600px;

    h3 {
      color: ${({ theme }) => theme.colors.accent.light};
      font-size: 2rem;
      margin-bottom: 15px;
      font-weight: 700;
    }

    p {
      color: ${({ theme }) => theme.colors.font.light};
      font-size: 1.1rem;
      margin-bottom: 10px;
      line-height: 1.5;
    }

    .tournament-info {
      margin-top: 30px;
      padding: 20px;
      background: ${({ theme }) => theme.colors.background.dark};
      border-radius: 8px;
      border-left: 4px solid ${({ theme }) => theme.colors.accent.light};

      p {
        color: ${({ theme }) => theme.colors.font.dark};
        font-size: 0.95rem;
        margin-bottom: 8px;
        text-align: left;

        strong {
          color: ${({ theme }) => theme.colors.font.light};
        }
      }
    }
  }
`;
