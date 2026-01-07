// FIFA World Cup 2026 Constants

export const WORLD_CUP_2026 = {
  TOURNAMENT_NAME: 'FIFA World Cup 2026',
  HOSTS: ['United States', 'Canada', 'Mexico'],
  START_DATE: '2026-06-11',
  END_DATE: '2026-07-19',
  TOTAL_TEAMS: 48,
  TOTAL_MATCHES: 104,
  GROUPS: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
  TEAMS_PER_GROUP: 4,
  
  STAGES: {
    GROUP: 'Group Stage',
    ROUND_16: 'Round of 16',
    QUARTER: 'Quarter-finals',
    SEMI: 'Semi-finals',
    THIRD_PLACE: 'Third Place Play-off',
    FINAL: 'Final'
  },

  CONFEDERATIONS: {
    AFC: 'Asian Football Confederation',
    CAF: 'Confederation of African Football',
    CONCACAF: 'Confederation of North, Central America and Caribbean Association Football',
    CONMEBOL: 'South American Football Confederation',
    OFC: 'Oceania Football Confederation',
    UEFA: 'Union of European Football Associations'
  },

  VENUES: {
    USA: [
      { name: 'MetLife Stadium', city: 'New York/New Jersey', capacity: 82500 },
      { name: 'SoFi Stadium', city: 'Los Angeles', capacity: 70240 },
      { name: 'AT&T Stadium', city: 'Dallas', capacity: 80000 },
      { name: 'Arrowhead Stadium', city: 'Kansas City', capacity: 76416 },
      { name: 'Mercedes-Benz Stadium', city: 'Atlanta', capacity: 71000 },
      { name: 'NRG Stadium', city: 'Houston', capacity: 72220 },
      { name: 'Lincoln Financial Field', city: 'Philadelphia', capacity: 69176 },
      { name: 'Lumen Field', city: 'Seattle', capacity: 69000 },
      { name: 'Levi\'s Stadium', city: 'San Francisco Bay Area', capacity: 68500 },
      { name: 'Hard Rock Stadium', city: 'Miami', capacity: 65326 },
      { name: 'Gillette Stadium', city: 'Boston', capacity: 65878 }
    ],
    CANADA: [
      { name: 'BC Place', city: 'Vancouver', capacity: 54500 },
      { name: 'BMO Field', city: 'Toronto', capacity: 45500 }
    ],
    MEXICO: [
      { name: 'Estadio Azteca', city: 'Mexico City', capacity: 87523 },
      { name: 'Estadio BBVA', city: 'Monterrey', capacity: 53500 },
      { name: 'Estadio Akron', city: 'Guadalajara', capacity: 49850 }
    ]
  },

  BETTING_TYPES: {
    MATCH_RESULT: '1X2',
    TOTAL_GOALS: 'Over/Under',
    BOTH_TEAMS_SCORE: 'BTTS',
    CORRECT_SCORE: 'Correct Score',
    FIRST_GOALSCORER: 'First Goal',
    TOP_SCORER: 'Tournament Top Scorer',
    WINNER: 'Tournament Winner',
    GROUP_WINNER: 'Group Winner',
    GOLDEN_BOOT: 'Golden Boot',
    GOLDEN_GLOVE: 'Golden Glove'
  },

  CURRENCIES: {
    POINTS: 'Points',
    FIFA_COINS: 'FIFA Coins'
  },

  ACHIEVEMENTS: {
    FIRST_BET: 'First World Cup Bet',
    PERFECT_GROUP: 'Perfect Group Prediction',
    BRACKET_MASTER: 'Bracket Master',
    TOP_SCORER_PROPHET: 'Top Scorer Prophet',
    CHAMPION_PREDICTOR: 'Champion Predictor',
    DAILY_BETTER: 'Daily Better',
    UPSET_SPOTTER: 'Upset Spotter',
    GOAL_MACHINE: 'Goal Machine Predictor'
  }
};

export const INITIAL_FIFA_COINS = 1000;
export const DAILY_BONUS_FIFA_COINS = 50;
export const PERFECT_PREDICTION_MULTIPLIER = 2.5;