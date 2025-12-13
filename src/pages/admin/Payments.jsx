import { useState } from 'react';
import { FaDownload, FaFilter, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

const Payments = () => {
    const [filterStatus, setFilterStatus] = useState('All');

    // Dummy Data
    const payments = [
        { id: 'TRX-1001', student: 'Alice Johnson', amount: '$199.00', date: '2024-03-22', status: 'Completed', method: 'Credit Card', type: 'Course Fee' },
        { id: 'TRX-1002', student: 'Bob Smith', amount: '$249.00', date: '2024-03-21', status: 'Completed', method: 'PayPal', type: 'Course Fee' },
        { id: 'TRX-1003', student: 'Charlie Brown', amount: '$149.00', date: '2024-03-20', status: 'Failed', method: 'Credit Card', type: 'Course Fee' },
        { id: 'TRX-1004', student: 'David Lee', amount: '$499.00', date: '2024-03-20', status: 'Pending', method: 'Bank Transfer', type: 'Course Fee' },
        { id: 'TRX-1005', student: 'James Wilson', amount: '$50.00', date: '2024-03-19', status: 'Completed', method: 'Credit Card', type: 'Donation' },
    ];

    const filteredPayments = filterStatus === 'All'
        ? payments
        : payments.filter(p => p.status === filterStatus);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Completed': return <FaCheckCircle className="text-green-500" />;
            case 'Failed': return <FaTimesCircle className="text-red-500" />;
            case 'Pending': return <FaClock className="text-orange-500" />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
                    <p className="text-gray-500">Track and manage financial transactions.</p>
                </div>
                <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaDownload /> Export CSV
                </button>
            </div>

            {/* Stats - Mini version */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Total Revenue (Today)</p>
                    <p className="text-2xl font-bold text-gray-800">$1,295.00</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Pending Transactions</p>
                    <p className="text-2xl font-bold text-orange-600">3</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">Failed Transactions (Month)</p>
                    <p className="text-2xl font-bold text-red-600">12</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center">
                <FaFilter className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Filter Status:</span>
                <div className="flex gap-2">
                    {['All', 'Completed', 'Pending', 'Failed'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${filterStatus === status
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <th className="p-4">Transaction ID</th>
                                <th className="p-4">Student/Donor</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Method</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredPayments.map(payment => (
                                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-mono text-sm text-gray-500">{payment.id}</td>
                                    <td className="p-4 font-medium text-gray-900">{payment.student}</td>
                                    <td className="p-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${payment.type === 'Donation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {payment.type}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold text-gray-800">{payment.amount}</td>
                                    <td className="p-4 text-sm text-gray-600">{payment.date}</td>
                                    <td className="p-4 text-sm text-gray-600">{payment.method}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(payment.status)}
                                            <span className={`text-sm ${payment.status === 'Completed' ? 'text-green-700' :
                                                payment.status === 'Failed' ? 'text-red-700' :
                                                    'text-orange-700'
                                                }`}>
                                                {payment.status}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payments;
