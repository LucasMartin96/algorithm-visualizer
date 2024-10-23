const Legend: React.FC = () => {
  const items = [
    { color: 'bg-emerald-400', label: 'Start Node' },
    { color: 'bg-pink-400', label: 'End Node' },
    { color: 'bg-amber-400', label: 'Path Node' },
    { color: 'bg-violet-400', label: 'Via Node' },
    { color: 'bg-slate-400', label: 'Regular Node' },
  ];

  return (
    <div className="flex gap-6 text-sm bg-slate-700/50 p-4 rounded-lg">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <span className="text-slate-200">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
