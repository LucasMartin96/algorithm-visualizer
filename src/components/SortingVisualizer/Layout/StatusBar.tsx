'use client';

import React from 'react';
import { useAlgorithm } from '../Context/AlgorithmContext';

const StatusBar: React.FC = () => {
  const { selectedAlgorithm, currentStep, steps } = useAlgorithm();

  const getAlgorithmDescription = () => {
    switch (selectedAlgorithm) {
      case 'bubble':
        return 'Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.';
      case 'quick':
        return 'Quick Sort picks a pivot element and partitions the array around it, recursively sorting the sub-arrays.';
      case 'merge':
        return 'Merge Sort divides the array into smaller subarrays, sorts them, and then merges them back together.';
      default:
        return 'Select an algorithm to begin.';
    }
  };

  const getComplexity = () => {
    switch (selectedAlgorithm) {
      case 'bubble':
        return 'Time: O(n²) | Space: O(1)';
      case 'quick':
        return 'Time: O(n log n) | Space: O(log n)';
      case 'merge':
        return 'Time: O(n log n) | Space: O(n)';
      default:
        return '';
    }
  };

  return (
    <div className="bg-slate-700/50 p-4 rounded-lg space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {selectedAlgorithm.charAt(0).toUpperCase() +
              selectedAlgorithm.slice(1)}{' '}
            Sort
          </h3>
          <p className="text-slate-300 text-sm">{getAlgorithmDescription()}</p>
        </div>
        <div className="text-sm text-slate-300">{getComplexity()}</div>
      </div>
      {steps.length > 0 && (
        <div className="text-sm text-slate-300">
          Progress: {currentStep + 1} of {steps.length} steps
        </div>
      )}
    </div>
  );
};

export default StatusBar;
