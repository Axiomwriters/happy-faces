import { FaWallet, FaChartPie } from 'react-icons/fa';

const FinancialCharts = () => {
    // Expense Breakdown
    const expenseData = [
        { label: 'Programs', value: 60, color: 'bg-blue-500' },
        { label: 'Admin', value: 25, color: 'bg-gray-400' },
        { label: 'Outreach', value: 15, color: 'bg-orange-400' },
    ];

    // Funding Sources
    const fundingData = [
        { label: 'Grants', value: 55, color: 'bg-green-600' },
        { label: 'Donors', value: 30, color: 'bg-blue-600' },
        { label: 'Corporate', value: 15, color: 'bg-indigo-600' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            {/* Expense Breakdown */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                    <FaWallet className="text-gray-400" /> Expense Breakdown (YTD)
                </h3>

                <div className="flex items-center justify-center py-4 relative">
                    <div className="w-32 h-32 rounded-full border-[20px] border-blue-500 border-t-gray-400 border-l-orange-400 rotate-12"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">$45K</span>
                        <span className="text-[10px] text-gray-500">Total Spent</span>
                    </div>
                </div>

                <div className="space-y-2">
                    {expenseData.map((item) => (
                        <div key={item.label} className="flex justify-between text-xs">
                            <span className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                                {item.label}
                            </span>
                            <span className="font-bold text-gray-700">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Funding Sources */}
            <div className="space-y-4 border-l border-gray-100 pl-6 border-0 md:border-l">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                    <FaChartPie className="text-gray-400" /> Funding Sources
                </h3>

                <div className="space-y-6 mt-6">
                    {fundingData.map((item) => (
                        <div key={item.label}>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-gray-600">{item.label}</span>
                                <span className="font-bold text-gray-800">{item.value}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className={`h-3 rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-green-50 rounded-lg p-3 text-xs text-green-700 border border-green-100 mt-4">
                    <strong>Insight:</strong> Grant funding approved for Q4. Expect +$20k inflow.
                </div>
            </div>
        </div>
    );
};

export default FinancialCharts;
