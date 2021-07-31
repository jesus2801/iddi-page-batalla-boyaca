import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export interface HomeCardProps {
  image: string;
  title: string;
  desc: string;
  button: string;
  link: string;
}
