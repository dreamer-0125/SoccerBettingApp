interface ITeamShared {
  name: string;
  shortName: string;
  image: string;
  country: string;
  fifaCode: string; // FIFA 3-letter country code
  confederation: 'AFC' | 'CAF' | 'CONCACAF' | 'CONMEBOL' | 'OFC' | 'UEFA';
  fifaRanking?: number;
  group?: string; // World Cup group (A, B, C, etc.)
  flag: string; // Country flag image URL
}

export interface ITeamFrontend extends ITeamShared {
  _id: string;
}

export type ITeamBackend = ITeamShared;
