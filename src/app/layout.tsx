import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Dijkstra's Algorithm Visualizer",
  description: "Visualize Dijkstra's algorithm for finding the shortest path",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen p-4">
        {children}
      </body>
    </html>
  );
}
