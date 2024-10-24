interface ArrayBarProps {
  value: number;
  height: string;
  isComparing: boolean;
  isSorted: boolean;
}

const ArrayBar: React.FC<ArrayBarProps> = ({
  value,
  height,
  isComparing,
  isSorted,
}) => {
  return (
    <div
      className={`
        w-4 transition-all duration-200
        ${isComparing ? 'bg-indigo-500' : isSorted ? 'bg-emerald-400' : 'bg-slate-400'}
      `}
      style={{ height }}
    >
      <div className="sr-only">{value}</div>
    </div>
  );
};

export default ArrayBar;
