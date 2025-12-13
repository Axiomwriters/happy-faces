import { useState } from 'react';
import { FaHandshake, FaGlobe, FaUser, FaHeart, FaSearch, FaFilter, FaTimes, FaCheck, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Partners = () => {
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');

    // Dummy Data for Partners
    const partners = [
        {
            id: 1,
            name: 'Acme Corp',
            type: 'corporate',
            contact: 'John Doe',
            email: 'john@acme.com',
            phone: '+254712345678',
            location: 'Nairobi',
            status: 'Active',
            details: {
                supportType: ['Funding', 'Training / Trainers'],
                programInterest: 'Youth Leadership',
                message: 'We are interested in a long-term CSR partnership focussing on tech education.'
            }
        },
        {
            id: 2,
            name: 'Global Hope NGO',
            type: 'ngo',
            contact: 'Jane Smith',
            email: 'jane@globalhope.org',
            phone: '+254722111222',
            location: 'Mombasa',
            status: 'Contacted',
            details: {
                collaborationType: ['Joint Programs', 'Resource Sharing'],
                message: 'Looking to collaborate on your clean water initiative.'
            }
        },
        {
            id: 3,
            name: 'Michael Scott',
            type: 'individual',
            contact: 'Michael Scott',
            email: 'michael.scott@dunder.com',
            phone: '+254733444555',
            location: 'Kisumu',
            status: 'New',
            details: {
                volunteerRole: 'Mentor',
                availability: ['Weekends'],
                message: 'I want to mentor young entrepreneurs.'
            }
        },
        {
            id: 4,
            name: 'Wayne Foundation',
            type: 'donor',
            contact: 'Bruce Wayne',
            email: 'bruce@wayne.com',
            phone: '+254700000000',
            location: 'Gotham (Nairobi Branch)',
            status: 'Active',
            details: {
                donorType: 'Sponsor Specific Program',
                budgetRange: '$10,000+',
                message: 'Full sponsorship for the orphanage repairs.'
            }
        },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'corporate': return <FaHandshake />;
            case 'ngo': return <FaGlobe />;
            case 'individual': return <FaUser />;
            case 'donor': return <FaHeart />;
            default: return <FaHandshake />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'corporate': return 'bg-blue-100 text-blue-600';
            case 'ngo': return 'bg-purple-100 text-purple-600';
            case 'individual': return 'bg-orange-100 text-orange-600';
            case 'donor': return 'bg-red-100 text-red-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    const filteredPartners = partners.filter(p =>
        (filterType === 'All' || p.type === filterType) &&
        (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Partner Relationships</h1>
                    <p className="text-gray-500">Manage corporate, NGO, and individual partnerships.</p>
                </div>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm">
                    <FaCheck /> Add Manual Partner
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search partners..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <FaFilter className="text-gray-400" />
                    <select
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="All">All Types</option>
                        <option value="corporate">Corporate</option>
                        <option value="ngo">NGO</option>
                        <option value="individual">Individual</option>
                        <option value="donor">Donor</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map(partner => (
                    <div
                        key={partner.id}
                        onClick={() => setSelectedPartner(partner)}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 p-2 rounded-bl-xl text-xs font-bold ${partner.status === 'Active' ? 'bg-green-100 text-green-700' : partner.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                            {partner.status}
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${getTypeColor(partner.type)}`}>
                                {getIcon(partner.type)}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">{partner.name}</h3>
                                <p className="text-xs text-gray-500 capitalize">{partner.type} Partner</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-gray-400" />
                                <span className="truncate">{partner.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-gray-400" />
                                <span>{partner.location}</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-center text-gray-400 font-medium uppercase tracking-wide group-hover:text-green-600">
                            View Details
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPartner && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${getTypeColor(selectedPartner.type)}`}>
                                    {getIcon(selectedPartner.type)}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">{selectedPartner.name}</h2>
                                    <p className="text-sm text-gray-500 capitalize">{selectedPartner.type} Partner</p>
                                </div>
                            </div>
                            <button onClick={() => setSelectedPartner(null)} className="text-gray-400 hover:text-gray-600 text-xl"><FaTimes /></button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-6">
                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Contact Person</label>
                                    <p className="font-medium text-gray-900">{selectedPartner.contact}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</label>
                                    <p className="font-medium text-gray-900 flex items-center gap-2"><FaPhone className="text-gray-400 text-xs" /> {selectedPartner.phone}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                                    <p className="font-medium text-gray-900 flex items-center gap-2"><FaEnvelope className="text-gray-400 text-xs" /> {selectedPartner.email}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</label>
                                    <p className="font-medium text-gray-900">{selectedPartner.location}</p>
                                </div>
                            </div>

                            {/* Specific Details */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2">Engagement Details</h3>

                                {selectedPartner.details.supportType && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Support Offered</label>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPartner.details.supportType.map(t => (
                                                <span key={t} className="px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedPartner.details.programInterest && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Program Interest</label>
                                        <p className="text-gray-800">{selectedPartner.details.programInterest}</p>
                                    </div>
                                )}

                                {selectedPartner.details.collaborationType && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Collaboration Type</label>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPartner.details.collaborationType.map(t => (
                                                <span key={t} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-md">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedPartner.details.volunteerRole && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Role</label>
                                        <p className="text-gray-800">{selectedPartner.details.volunteerRole}</p>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Message</label>
                                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg text-sm italic">"{selectedPartner.details.message}"</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                            <button
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors"
                                onClick={() => setSelectedPartner(null)}
                            >
                                Close
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
                                Contact Partner
                            </button>
                            {selectedPartner.status !== 'Active' && (
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-sm">
                                    Approve & Activate
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Partners;
