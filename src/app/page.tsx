import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import Section from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import AlgorithmList from '@/components/ui/AlgorithmList';

const pathfindingAlgorithms = [
  { name: "Dijkstra's Algorithm", status: 'available' as const },
  { name: 'A* Algorithm', status: 'coming-soon' as const },
  { name: 'BFS & DFS', status: 'coming-soon' as const },
];

const sortingAlgorithms = [
  { name: 'Bubble Sort', status: 'coming-soon' as const },
  { name: 'Quick Sort', status: 'coming-soon' as const },
  { name: 'Merge Sort', status: 'coming-soon' as const },
];

const otherAlgorithms = [
  { name: 'Binary Search', status: 'coming-soon' as const },
  { name: 'Graph Traversal', status: 'coming-soon' as const },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection />

      <Section darker>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Available & Upcoming Algorithms
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Pathfinding Algorithms">
            <AlgorithmList items={pathfindingAlgorithms} />
          </Card>

          <Card title="Sorting Algorithms">
            <AlgorithmList items={sortingAlgorithms} />
          </Card>

          <Card title="Other Algorithms">
            <AlgorithmList items={otherAlgorithms} />
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Visualize to Understand
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our interactive visualizations help you understand how algorithms
            work in real-time. Perfect for students, developers, and anyone
            interested in learning algorithms.
          </p>
        </div>
      </Section>
    </main>
  );
}
