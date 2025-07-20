import React from 'react';
import { Hero } from '../components/Hero';
import { DirectoryGrid } from '../components/DirectoryGrid';
import { Features } from '../components/Features';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <DirectoryGrid />
      <Features />
    </>
  );
};