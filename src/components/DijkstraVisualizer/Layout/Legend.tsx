interface LegendItem {
  color: string;
  description: string;
}

const legendItems: LegendItem[] = [
  { color: 'bg-white', description: 'Unvisited Node' },
  { color: 'bg-blue-500', description: 'Start Node' },
  { color: 'bg-red-500', description: 'End Node' },
  { color: 'bg-green-500', description: 'Visited Node' },
  { color: 'bg-yellow-500', description: 'Path Node' },
];

const Legend = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`w-6 h-6 ${item.color} border border-gray-300 rounded`}
          />
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
