interface ValueCardProps {
  label: string;
  value: number;
  unit?: string;
  timestamp: string;
}

export default function ValueCard({ label, value, unit = "", timestamp }: ValueCardProps) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center justify-center">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-2xl font-bold">{Math.round(value)} {unit}</p>
      <p className="text-xs text-gray-400">{timestamp}</p>
    </div>
  );
}
