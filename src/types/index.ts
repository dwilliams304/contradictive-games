// Game related types
export interface Game {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  image: string;
  status: 'Released' | 'Coming Soon' | 'Early Access' | 'In Development';
  releaseDate: string;
  platforms: string[];
  price?: string;
  rating?: string;
  trailerUrl?: string;
  screenshots?: string[];
  features?: string[];
  systemRequirements?: SystemRequirements;
}

export interface SystemRequirements {
  minimum: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  recommended: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

// News/Article types
export interface INewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: 'Game Updates' | 'Development' | 'Community' | 'Events' | 'Announcements';
  image: string;
  featured: boolean;
}

// Leaderboard types
export interface PlayerLeaderboardEntry {
  rank: number;
  player: string;
  score: number;
  game: string;
}

export interface GameStatistic {
  stat: string;
  value: string;
  count?: number;
  player?: string;
}

export interface LeaderboardData {
  playerLeaderboards: PlayerLeaderboardEntry[];
  gameStats: GameStatistic[];
}

// Team member types
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Company milestone types
export interface Milestone {
  year: string;
  event: string;
  description: string;
}

// Dropdown menu types
export interface DropdownOption {
  content: string;
  action: () => void;
}

// Navigation types
export interface NavItem {
  label: string;
  path?: string;
  dropdown?: DropdownOption[];
}

// Hero component types
export interface HeroProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  gameTitle?: string;
  gameDescription?: string;
  onPlayNow?: () => void;
  onWatchTrailer?: () => void;
}

// API Response types (for future Steamworks integration)
export interface SteamAchievement {
  name: string;
  displayName: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockTime?: number;
  globalPercentage?: number;
}

export interface SteamLeaderboard {
  leaderboardId: number;
  name: string;
  displayName: string;
  sortMethod: 'Ascending' | 'Descending';
  displayType: 'Numeric' | 'TimeSeconds' | 'TimeMilliseconds';
  entries: SteamLeaderboardEntry[];
}

export interface SteamLeaderboardEntry {
  steamId: string;
  globalRank: number;
  score: number;
  details?: number[];
}

// Utility types
export type GameStatus = Game['status'];
export type NewsCategory = INewsArticle['category'];
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Form types (for future contact forms, etc.)
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme types
export type Theme = 'dark' | 'light';

// Error types
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}


export interface IGameData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  releaseDate: string;
  platforms: string[];
  status: string;
  price: string;
  rating: string;
  trailerUrl: string;
  screenshots: string[];
  features: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
}