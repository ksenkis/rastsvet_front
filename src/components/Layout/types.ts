import { ReactNode } from 'react';

export interface LayoutProps {
  isAuthenticated: boolean;
  logout: () => any;
  children: ReactNode;
}
