import { FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';

const AtRiskQueue = () => {
    const atRiskStudents = [
        { id: 'ST-204', name: 'James Kamau', risk: 'High', reason: '3 Missed Classes', score: 92 },
        { id: 'ST-108', name: 'Sarah Njoroge', risk: 'Medium', reason: 'Payment Overdue', score: 75 },
        { id: 'ST-305', name: 'Brian Ochieng', risk: 'Medium', reason: 'Low Quiz Scores', score: 68 },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-500" />
                    At-Risk Students
                </h3>
                <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">3 Attention Needed</span>
            </div>

            <div className="space-y-3">
                {atRiskStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 rounded-lg bg-red-50/50 border border-red-50 hover:bg-red-50 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs ring-2 ring-white">
                                {student.score}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">{student.name}</p>
                                <p className="text-xs text-red-500">{student.reason}</p>
                            </div>
                        </div>
                        <button className="text-gray-400 group-hover:text-red-500 transition-colors">
                            <FaArrowRight className="w-3 h-3" />
                        </button>
                    </div>
                ))}
            </div>

            <button className="w-full mt-4 text-xs font-semibold text-red-600 hover:text-red-700 py-1">
                View All Risk Reports
            </button>
        </div>
    );
};

export default AtRiskQueue;
