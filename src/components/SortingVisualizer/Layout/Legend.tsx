const legendItems = [
  { color: 'bg-indigo-500', description: 'Comparing' },
  { color: 'bg-emerald-400', description: 'Sorted' },
  { color: 'bg-slate-400', description: 'Unsorted' },
];

const Legend = () => {
  return (
    <div className="flex gap-6 text-sm bg-slate-700/50 p-4 rounded-lg">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${item.color}`} />
          <span className="text-slate-300">{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
