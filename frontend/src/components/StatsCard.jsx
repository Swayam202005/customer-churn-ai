function StatsCard({ title, value }) {
  return (
    <div className="bg-[#111827] border border-cyan-500/10 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
      
      <p className="text-gray-400 mb-2">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-cyan-400">
        {value}
      </h2>

    </div>
  );
}

export default StatsCard;