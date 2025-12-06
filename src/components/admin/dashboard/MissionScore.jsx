const MissionScore = () => {
    return (
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-xl shadow-lg text-white text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-5 rounded-full -ml-8 -mb-8"></div>

            <p className="text-xs font-bold uppercase tracking-widest text-green-100 mb-2">Strategic Impact</p>
            <h3 className="text-lg font-medium opacity-90 mb-4">Mission Alignment Score</h3>

            <div className="flex justify-center items-end gap-2 mb-2">
                <span className="text-5xl font-bold">8.5</span>
                <span className="text-xl font-medium text-green-100 mb-2">/ 10</span>
            </div>

            <div className="w-full bg-black/20 rounded-full h-1.5 mb-2">
                <div className="bg-white h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>

            <p className="text-[10px] text-green-50">Calculated based on youth & women enrollment + program success rates.</p>
        </div>
    );
};

export default MissionScore;
