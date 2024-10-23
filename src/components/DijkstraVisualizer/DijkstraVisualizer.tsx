"use client";

import React from 'react';
import { AppProviders } from './Context/Providers';
import Layout from './Layout/Layout';
import GraphContainer from './Graph/GraphContainer';

// TODO: Agregar otro tipo de visualizador, imaginando un grid donde cada cuadradito es un nodo, asi se veria mejor la propagacion de la busqueda
const DijkstraVisualizer: React.FC = () => {
  return (
    <AppProviders>
      <Layout>
        <GraphContainer />
      </Layout>
    </AppProviders>
  );
};

export default DijkstraVisualizer;
