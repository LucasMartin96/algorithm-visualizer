'use client';

import React from 'react';
import { AppProviders } from './Context/Providers';
import Layout from './Layout/Layout';
import ArrayContainer from './Array/ArrayContainer';

const SortingVisualizer: React.FC = () => {
  return (
    <AppProviders>
      <Layout>
        <ArrayContainer />
      </Layout>
    </AppProviders>
  );
};

export default SortingVisualizer;
