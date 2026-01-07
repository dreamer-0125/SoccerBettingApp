// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  appName: 'FIFA World Cup 2026 Betting',
  worldCup: {
    year: 2026,
    hosts: ['USA', 'Canada', 'Mexico'],
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    timezone: 'America/New_York'
  },
  api: {
    baseUrl: 'http://localhost:3333/api',
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
