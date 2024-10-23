import React from 'react';
import DijkstraVisualizer from '@/components/DijkstraVisualizer/DijkstraVisualizer';

// TODO: Agregar una nav bar
// TODO: Agregar una pagina de home explicando el proyecto un poco.
// TODO: Agregar mas algoritmos de busqueda de path!
// TODO: Visualizacion y animacion de algoritmos de busqueda
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <DijkstraVisualizer />
      </div>
    </main>
  );
}
