export type User = {
  id: number;
  username?: string;
  first_name: string;
  last_name?: string;
  is_premium?: boolean;
  is_bot?: boolean;
  language_code?: string;
  referred_by: number;
  clicks: number;
  lastClickSeconds: Date;
  curHealth: number;
  maxHealth: number;
};

export type AuthResponse = {
  user?: User;
  success: boolean;
  errorMsg?: string;
};
