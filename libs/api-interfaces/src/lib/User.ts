import * as mongoose from 'mongoose';
import { IBadgeFrontend } from './Badge';

interface IUserShared {
  username: string;
  email: string;
  points: number;
  googleId?: string;
  admin?: boolean;
  avatarUrl: string;
  showAvatar: boolean;
  bonusDate: Date;
  createdDate: Date;
  // World Cup specific fields
  favoriteTeam?: string; // Team ID of user's favorite World Cup team
  fifaCoins: number; // Special World Cup currency
  worldCupLevel: number; // User level based on World Cup activities
  countrySupport?: string; // Country the user is supporting
  predictionScore: number; // Score based on prediction accuracy
  worldCupBadges: string[]; // Special World Cup achievement badges
}

export interface IUserFrontend extends IUserShared {
  _id: string;
  badges?: IBadgeFrontend[];
}

export interface IUserBackend extends IUserShared {
  badges: mongoose.Schema.Types.ObjectId[];
  generateAuthToken: () => string;
}
