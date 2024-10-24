'use client';

import React, { useEffect, useState } from 'react';
import { useArray } from '../Context/ArrayContext';
import { useAlgorithm } from '../Context/AlgorithmContext';
import ArrayBar from './ArrayBar';

const ArrayContainer: React.FC = () => {
  const { array, maxValue } = useArray();
  const { comparing, sortedIndices } = useAlgorithm();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="relative h-[32rem] bg-slate-900 rounded-lg p-4" />;
  }

  return (
    <div className="relative h-[32rem] bg-slate-900 rounded-lg p-4">
      <div className="h-full flex items-end justify-center gap-1">
        {array.map((value, index) => (
          <ArrayBar
            key={index}
            value={value}
            height={`${(value / maxValue) * 100}%`}
            isComparing={comparing.includes(index)}
            isSorted={sortedIndices.includes(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArrayContainer;
