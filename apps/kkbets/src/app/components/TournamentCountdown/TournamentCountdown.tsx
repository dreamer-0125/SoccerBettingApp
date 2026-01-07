import React, { useState, useEffect } from 'react';
import { StyledTournamentCountdown } from './TournamentCountdown.css';
import { WORLD_CUP_2026 } from '../../constants/worldcup';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function TournamentCountdown(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const targetDate = new Date(WORLD_CUP_2026.START_DATE).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsActive(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isActive) {
    return (
      <StyledTournamentCountdown>
        <div className="countdown-content">
          <h3>🎉 FIFA World Cup 2026 is Here!</h3>
          <p>The tournament has begun! Place your bets now!</p>
        </div>
      </StyledTournamentCountdown>
    );
  }

  return (
    <StyledTournamentCountdown>
      <div className="countdown-content">
        <h3>⏰ Tournament Starts In:</h3>
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="number">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="separator">:</div>
          <div className="time-unit">
            <span className="number">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="label">Hours</span>
          </div>
          <div className="separator">:</div>
          <div className="time-unit">
            <span className="number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="separator">:</div>
          <div className="time-unit">
            <span className="number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
        <p className="tournament-date">
          📅 {new Date(WORLD_CUP_2026.START_DATE).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </StyledTournamentCountdown>
  );
}

export default TournamentCountdown;