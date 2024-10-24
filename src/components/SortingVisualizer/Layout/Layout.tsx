import React from 'react';
import Header from './Header';
import StatusBar from './StatusBar';
import AnimationControls from '../Algorithm/AnimationControls';
import Legend from './Legend';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-700">
      <div className="space-y-6">
        <Header />
        <div className="space-y-4">
          <StatusBar />
          <AnimationControls />
          <Legend />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
