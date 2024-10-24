import React from 'react';
import SortingVisualizer from '@/components/SortingVisualizer/SortingVisualizer';

export default function SortingPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] bg-gray-900 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <SortingVisualizer />
      </div>
    </main>
  );
}
