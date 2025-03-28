export interface Team {
  name: string;
  code: string;
}

export interface Player {
  firstName: string;
  lastName: string;
  team: Team;
  role: string;
  playedSets: number;
  servePoints: number;
  attackPoints: number;
  blockPoints: number;
}

export interface Set {
  score: string;
  isWin: boolean;
}

export interface MatchResult {
  homeTeam: Team;
  awayTeam: Team;
  homePlayers: Player[];
  awayPlayers: Player[];
  sets: Set[];
  isWin: boolean;
}

export interface TeamStats {
  team: Team;
  matches: number;
  wins: number;
  sets: number;
  wonSets: number;
  wonPoints: number;
  lostPoints: number;
  sideoutPercentage: number;
  breakPercentage: number;
  oppKillPercentage: number;
  acePercentage: number;
  receptionPercentage: number;
  killPercentage: number;
  blockPercentage: number;
}

export interface ParsedData {
  matches: MatchResult[];
  teamStats: TeamStats[];
}

export type TabType = 'matches' | 'overview' | 'scorers' | 'serving' | 'reception' | 'attacking' | 'blocking';
