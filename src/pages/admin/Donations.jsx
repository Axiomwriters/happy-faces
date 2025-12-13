import { useState } from 'react';
import { FaHandHoldingHeart, FaFilter, FaDownload, FaSearch, FaEye, FaCalendarAlt } from 'react-icons/fa';

const Donations = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterProgram, setFilterProgram] = useState('All');

    // Dummy Data for Donations
    const donations = [
        { id: 'DON-5001', name: 'James Wilson', amount: 5000, method: 'M-Pesa', frequency: 'One-time', program: 'Feeding Program', date: '2024-03-22', status: 'Completed' },
        { id: 'DON-5002', name: 'Sarah Connor', amount: 2500, method: 'Credit Card', frequency: 'Monthly', program: 'General Support', date: '2024-03-21', status: 'Completed' },
        { id: 'DON-5003', name: 'Tech Solutions Ltd', amount: 50000, method: 'Bank Transfer', frequency: 'Annually', program: 'Youth Leadership', date: '2024-03-20', status: 'Pending' },
        { id: 'DON-5004', name: 'Emily Blunt', amount: 1000, method: 'PayPal', frequency: 'One-time', program: 'Sanitary Pads', date: '2024-03-19', status: 'Completed' },
        { id: 'DON-5005', name: 'Michael Ross', amount: 10000, method: 'M-Pesa', frequency: 'Monthly', program: 'Clean Water', date: '2024-03-18', status: 'Failed' },
        { id: 'DON-5006', name: 'Jessica Pearson', amount: 7500, method: 'Credit Card', frequency: 'One-time', program: 'General Support', date: '2024-03-18', status: 'Completed' },
    ];

    const filteredDonations = donations.filter(item =>
        (filterProgram === 'All' || item.program === filterProgram) &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const totalRaised = donations.reduce((acc, curr) => acc + (curr.status === 'Completed' ? curr.amount : 0), 0);
    const activeDonors = new Set(donations.map(d => d.name)).size; // Simple unique count

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Donations Management</h1>
                    <p className="text-gray-500">Track charitable contributions and donor engagement.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
                        <FaDownload /> Export Report
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Raised (This Month)</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">KES {totalRaised.toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg text-xl">
                        <FaHandHoldingHeart />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Active Donors</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">{activeDonors}</p>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-xl">
                        <FaEye />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Avg. Donation</p>
                        <p className="text-2xl font-bold text-gray-800 mt-1">KES {Math.round(totalRaised / donations.length).toLocaleString()}</p>
                    </div>
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg text-xl">
                        <FaCalendarAlt />
                    </div>
                </div>
            </div>

            {/* Filters & Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-96">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search donor or transaction ID..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <FaFilter className="text-gray-400" />
                        <select
                            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                            value={filterProgram}
                            onChange={(e) => setFilterProgram(e.target.value)}
                        >
                            <option value="All">All Programs</option>
                            <option value="General Support">General Support</option>
                            <option value="Feeding Program">Feeding Program</option>
                            <option value="Youth Leadership">Youth Leadership</option>
                            <option value="Sanitary Pads">Sanitary Pads</option>
                            <option value="Clean Water">Clean Water</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <th className="p-4">Donor Name</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Frequency</th>
                                <th className="p-4">Program</th>
                                <th className="p-4">Method</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredDonations.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <p className="font-medium text-gray-900">{item.name}</p>
                                        <p className="text-xs text-gray-500 font-mono">{item.id}</p>
                                    </td>
                                    <td className="p-4 font-bold text-gray-800">KES {item.amount.toLocaleString()}</td>
                                    <td className="p-4 text-sm text-gray-600">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.frequency === 'Monthly' ? 'bg-blue-50 text-blue-700' : item.frequency === 'Annually' ? 'bg-purple-50 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                                            {item.frequency}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">{item.program}</td>
                                    <td className="p-4 text-sm text-gray-600">{item.method}</td>
                                    <td className="p-4 text-sm text-gray-500">{item.date}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                item.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filteredDonations.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="p-8 text-center text-gray-500">
                                        No donations found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination - Visual Only */}
                <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>Showing {filteredDonations.length} entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donations;
