export const environment = {
  production: true,
  appName: 'FIFA World Cup 2026 Betting',
  worldCup: {
    year: 2026,
    hosts: ['USA', 'Canada', 'Mexico'],
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    timezone: 'America/New_York'
  },
  api: {
    baseUrl: '/api',
    fifaApiUrl: 'https://api.fifa.com/api/v3'
  },
  features: {
    liveUpdates: true,
    groupStageBetting: true,
    knockoutBetting: true,
    topScorerPredictions: true,
    bracketPredictions: true
  }
};
