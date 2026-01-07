import styled from 'styled-components';

export const StyledBanner = styled.div`
  img {
    width: 100%;
    display: block;
    max-height: 250px;
    border-radius: 4px;
    object-fit: contain;
    background-color: #02b9cb;
  }

  .worldcup-banner {
    width: 100%;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #0BB659 100%);
    border-radius: 8px;
    padding: 30px;
    margin: 20px 0;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
      pointer-events: none;
    }

    .banner-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
        text-align: center;
        gap: 20px;
      }
    }

    .banner-text {
      flex: 1;

      h2 {
        color: #ffffff;
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 8px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1.8rem;
        }
      }

      p {
        color: #FFD700;
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 10px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
          font-size: 1.1rem;
        }
      }

      span {
        color: #e8f4fd;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4;
      }
    }

    .banner-visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      .trophy {
        font-size: 3.5rem;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
        animation: bounce 2s infinite;
      }

      .flags {
        display: flex;
        gap: 8px;

        span {
          font-size: 2rem;
          filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
