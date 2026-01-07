import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledMainPage } from './MainPage.css';

import Banner from '../../components/Banner/Banner';
import { getCouponFromStorage } from '../../store/actions';
import axiosConfig from '../../utilities/axiosConfig';

import { IEventFrontend } from '@kkbets/api-interfaces';
import EventCounterMobile from '../../features/coupons/components/EventCounterMobile';
import DailyBonus from '../../features/dailyBonus/components/DailyBonus';
import ImportantMatch from '../../features/events/components/ImportantMatch';
import MatchMin from '../../features/events/components/MatchMin';
import LoaderWrapper from '../../wrappers/LoaderWrapper';
import { formatEventDate } from '../../utilities/dateUtils';
import { WORLD_CUP_2026 } from '../../constants/worldcup';
import WorldCupHero from '../../components/WorldCupHero/WorldCupHero';
import TournamentCountdown from '../../components/TournamentCountdown/TournamentCountdown';

function MainPage(): JSX.Element {
  const [importantMatches, setImportantMatches] = useState<IEventFrontend[]>([]);
  const [matches, setMatches] = useState<IEventFrontend[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axiosConfig.get<IEventFrontend[]>('/events?ended=false&started=false');
      const matches = res.data.filter((match) => !match.important);
      const ImportantMatches = res.data.filter((match) => match.important);

      setImportantMatches(ImportantMatches);
      setMatches(matches);
      setIsLoaded(true);
      dispatch(getCouponFromStorage());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledMainPage>
      <EventCounterMobile />

      {/* World Cup 2026 Hero Section */}
      <WorldCupHero />

      {/* Tournament Countdown */}
      <TournamentCountdown />

      <DailyBonus />

      {/* World Cup Banner */}
      <Banner image="" />

      <LoaderWrapper isLoading={!isLoaded}>
        <>
          {/* World Cup Featured Matches */}
          {importantMatches.length > 0 && (
            <div className="section-header">
              <h2>🏆 Featured World Cup Matches</h2>
              <p>Don't miss these crucial tournament games</p>
            </div>
          )}
          
          <div className="matches-container">
            {importantMatches.map(
              ({ _id, date, teamAway, teamHome, category, courseAwayWin, courseDraw, courseHomeWin }) => (
                <ImportantMatch
                  key={_id}
                  eventId={_id}
                  league={category?.name}
                  date={formatEventDate(date.toString())}
                  teamAway={teamAway}
                  teamHome={teamHome}
                  courseAwayWin={courseAwayWin}
                  courseDraw={courseDraw}
                  courseHomeWin={courseHomeWin}
                />
              )
            )}
          </div>

          {/* All World Cup Matches */}
          {matches.length > 0 && (
            <div className="section-header" style={{ marginTop: '40px' }}>
              <h2>⚽ All World Cup Matches</h2>
              <p>Bet on every match of the tournament</p>
            </div>
          )}

          <div style={{ marginTop: '20px' }}>
            {matches.map(({ _id, date, teamAway, teamHome, category, courseAwayWin, courseDraw, courseHomeWin }) => (
              <MatchMin
                key={_id}
                eventId={_id}
                league={category?.name}
                date={formatEventDate(date.toString())}
                teamAway={teamAway}
                teamHome={teamHome}
                courseAwayWin={courseAwayWin}
                courseDraw={courseDraw}
                courseHomeWin={courseHomeWin}
              />
            ))}
          </div>

          {/* No matches message with World Cup theme */}
          {importantMatches.length === 0 && matches.length === 0 && (
            <div className="no-matches">
              <h3>🏆 FIFA World Cup 2026</h3>
              <p>Get ready for the biggest football tournament!</p>
              <p>Matches will be available closer to the tournament dates.</p>
              <div className="tournament-info">
                <p><strong>📅 Tournament Dates:</strong> {WORLD_CUP_2026.START_DATE} - {WORLD_CUP_2026.END_DATE}</p>
                <p><strong>🌍 Host Countries:</strong> {WORLD_CUP_2026.HOSTS.join(', ')}</p>
                <p><strong>⚽ Teams:</strong> {WORLD_CUP_2026.TOTAL_TEAMS} teams competing</p>
                <p><strong>🏟️ Matches:</strong> {WORLD_CUP_2026.TOTAL_MATCHES} total matches</p>
              </div>
            </div>
          )}
        </>
      </LoaderWrapper>
    </StyledMainPage>
  );
}

export default MainPage;
