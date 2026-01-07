// FIFA World Cup 2026 specific interfaces

export interface IWorldCupGroup {
  letter: string; // A, B, C, etc.
  teams: string[]; // Team IDs
  standings: IGroupStanding[];
}

export interface IGroupStanding {
  teamId: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  position: number;
}

export interface ITournamentBracket {
  roundOf16: IBracketMatch[];
  quarterFinals: IBracketMatch[];
  semiFinals: IBracketMatch[];
  thirdPlace: IBracketMatch;
  final: IBracketMatch;
}

export interface IBracketMatch {
  matchId?: string;
  team1?: string; // Team ID or placeholder like "Winner Group A"
  team2?: string; // Team ID or placeholder like "Runner-up Group B"
  winner?: string;
  score?: {
    team1: number;
    team2: number;
    penalties?: {
      team1: number;
      team2: number;
    };
  };
}

export interface ITopScorerPrediction {
  playerId: string;
  playerName: string;
  teamId: string;
  currentGoals: number;
  odds: number;
}

export interface IWorldCupStats {
  totalMatches: number;
  completedMatches: number;
  totalGoals: number;
  averageGoalsPerMatch: number;
  topScorer: {
    playerId: string;
    playerName: string;
    goals: number;
    team: string;
  };
  mostWins: {
    teamId: string;
    teamName: string;
    wins: number;
  };
}

export interface IUserWorldCupPredictions {
  userId: string;
  groupWinners: { [group: string]: string }; // Group letter -> Team ID
  groupRunnersUp: { [group: string]: string };
  roundOf16Winners: string[];
  quarterFinalWinners: string[];
  semiFinalWinners: string[];
  thirdPlaceWinner: string;
  champion: string;
  topScorer: string;
  totalGoals: number;
  createdAt: Date;
  updatedAt: Date;
}