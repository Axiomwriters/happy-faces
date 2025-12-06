import { FaMapMarkerAlt } from 'react-icons/fa';

const ImpactMap = () => {
    // Simulated hotspots
    const hotspots = [
        { name: 'Nairobi', students: 450, top: '45%', left: '48%', size: 24, color: 'bg-blue-600' },
        { name: 'Mombasa', students: 210, top: '75%', left: '80%', size: 18, color: 'bg-indigo-500' },
        { name: 'Kisumu', students: 180, top: '48%', left: '15%', size: 16, color: 'bg-pink-500' },
        { name: 'Nakuru', students: 120, top: '40%', left: '35%', size: 14, color: 'bg-purple-500' },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" /> Geographic Reach
                    </h3>
                    <p className="text-xs text-gray-500">Student distribution across counties</p>
                </div>
                <button className="text-xs text-blue-600 border border-blue-200 px-2 py-1 rounded bg-blue-50">View Full Report</button>
            </div>

            {/* CSS Map Placeholder */}
            <div className="relative w-full h-64 bg-slate-50 rounded-xl border border-dashed border-gray-200">
                <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-300">KENYA IMPACT MAP</span>

                {/* Shape outline (Abstract) */}
                <div className="absolute inset-4 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/25/Kenya_location_map.svg')] bg-contain bg-no-repeat bg-center"></div>

                {hotspots.map((spot) => (
                    <div
                        key={spot.name}
                        className="absolute flex flex-col items-center group cursor-pointer"
                        style={{ top: spot.top, left: spot.left }}
                    >
                        <div className={`rounded-full ${spot.color} shadow-lg shadow-blue-500/30 animate-pulse-slow`} style={{ width: spot.size, height: spot.size }}></div>
                        <div className="bg-white px-2 py-1 rounded shadow-md text-xs font-bold text-gray-700 absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {spot.name}: {spot.students}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
                {hotspots.slice(0, 2).map(spot => (
                    <div key={spot.name} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded">
                        <div className={`w-2 h-2 rounded-full ${spot.color}`}></div>
                        {spot.name} ({spot.students})
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactMap;
