import * as mongoose from 'mongoose';
import { ICategoryFrontend } from './Category';
import { ITeamFrontend } from './Team';

interface IEventShared {
  date: Date;
  important: boolean;
  ended: boolean;
  teamHomeScore: number;
  teamAwayScore: number;
  courseHomeWin: number;
  courseAwayWin: number;
  courseDraw: number;
  // World Cup specific fields
  matchday?: number; // Group stage matchday (1, 2, 3)
  stage: 'group' | 'round-of-16' | 'quarter-final' | 'semi-final' | 'third-place' | 'final';
  group?: string; // Group letter for group stage matches
  venue: string; // Stadium name
  city: string; // Host city
  country: 'USA' | 'Canada' | 'Mexico'; // Host country
  attendance?: number;
  referee?: string;
  weather?: {
    temperature: number;
    condition: string;
  };
  // Additional betting options for World Cup
  totalGoalsOver25?: number; // Odds for over 2.5 goals
  totalGoalsUnder25?: number; // Odds for under 2.5 goals
  bothTeamsToScore?: number; // Odds for both teams to score
}

export interface IEventFrontend extends IEventShared {
  _id: string;
  category: ICategoryFrontend;
  teamHome: ITeamFrontend;
  teamAway: ITeamFrontend;
}

export interface IEventBackend extends IEventShared {
  teamHome: mongoose.Schema.Types.ObjectId;
  teamAway: mongoose.Schema.Types.ObjectId;
  category: mongoose.Schema.Types.ObjectId;
  otherCourses: unknown;
}
