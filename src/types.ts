import { ReactChild, ReactNode } from 'react';

export interface StateProps {
  auth: {
    error: string | null;
    loading: boolean;
    token: string | null;
  };
}

export interface AppProps {
  isAuthenticated: boolean;
  logout: () => any;
  setAuthenticatedIfRequired: () => any;
  token: string | null;
}

export interface RouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

export interface ImageItem {
  id: number;
  image: string;
  title: string;
}
