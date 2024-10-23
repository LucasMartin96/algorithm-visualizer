'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-blue-500 hover:text-blue-400"
            >
              AlgoViz
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/dijkstra"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/dijkstra'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              Dijkstra Visualizer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
