import React from 'react';
import { useArray } from '../Context/ArrayContext';
import { useAlgorithm } from '../Context/AlgorithmContext';
import Button from '@/components/ui/Button';
import type { AlgorithmType } from '../types';

const Header: React.FC = () => {
  const { generateNewArray } = useArray();
  const {
    startSorting,
    resetAlgorithm,
    selectedAlgorithm,
    setSelectedAlgorithm,
  } = useAlgorithm();

  const algorithms = [
    { value: 'bubble', label: 'Bubble Sort' },
    { value: 'quick', label: 'Quick Sort' },
    { value: 'merge', label: 'Merge Sort' },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sorting Algorithm Visualizer
            </h2>
            <p className="text-slate-300">
              Visualize how different sorting algorithms work
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 items-start justify-end">
          <select
            value={selectedAlgorithm}
            onChange={(e) =>
              setSelectedAlgorithm(e.target.value as AlgorithmType)
            }
            className="bg-slate-700 text-white rounded-lg px-3 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {algorithms.map((algo) => (
              <option key={algo.value} value={algo.value}>
                {algo.label}
              </option>
            ))}
          </select>
          <Button variant="secondary" onClick={generateNewArray}>
            New Array
          </Button>
          <Button variant="primary" onClick={startSorting}>
            Sort!
          </Button>
          <Button variant="secondary" onClick={resetAlgorithm}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
