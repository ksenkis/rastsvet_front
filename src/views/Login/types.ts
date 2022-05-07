export interface LoginProps {
  isAuthenticated: boolean;
  logout: () => any;
  setAuthenticatedIfRequired: () => any;
  token: string | null;
  onAuth: (username: string | null, password: string | null) => any;
}
