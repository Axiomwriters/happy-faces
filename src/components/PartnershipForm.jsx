import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHandshake, FaGlobe, FaUser, FaHeart, FaChevronLeft, FaCheck } from 'react-icons/fa';

const PartnershipForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        partnerType: '',
        name: '',
        email: '',
        phone: '',
        location: '',
        // Dynamic fields
        supportType: [],
        programInterest: '',
        collaborationType: [],
        volunteerRole: '',
        availability: [],
        donorType: '',
        budgetRange: '',
        message: ''
    });

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleCheckboxChange = (field, value) => {
        setFormData(prev => {
            const current = prev[field] || [];
            if (current.includes(value)) {
                return { ...prev, [field]: current.filter(item => item !== value) };
            } else {
                return { ...prev, [field]: [...current, value] };
            }
        });
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log('Form Submitted:', formData);
        alert('Thank you for your interest! We will get back to you soon.');
        navigate('/');
    };

    // Render Steps
    const renderStep1 = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className="text-2xl font-bold col-span-full mb-4 text-center">Choose Partnership Type</h2>
            {[
                { id: 'corporate', icon: FaHandshake, label: 'Corporate Partner', desc: 'Sponsor programs or donate resources' },
                { id: 'ngo', icon: FaGlobe, label: 'NGO / Organization', desc: 'Collaborate on missions' },
                { id: 'individual', icon: FaUser, label: 'Individual Volunteer', desc: 'Volunteer your time & skills' },
                { id: 'donor', icon: FaHeart, label: 'Donor / Sponsor', desc: 'Structured giving & funding' }
            ].map((type) => (
                <button
                    key={type.id}
                    onClick={() => {
                        updateFormData('partnerType', type.id);
                        nextStep();
                    }}
                    className={`p-6 rounded-xl border-2 transition-all text-left group hover:border-green-500 hover:shadow-md ${formData.partnerType === type.id ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${formData.partnerType === type.id ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-green-100 group-hover:text-green-600'}`}>
                        <type.icon className="text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800">{type.label}</h3>
                    <p className="text-sm text-gray-500">{type.desc}</p>
                </button>
            ))}
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Basic Information</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name / Organization Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="Enter name"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="+254..."
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location (City/County)</label>
                <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    placeholder="e.g. Nairobi, Kenya"
                />
            </div>
            <button
                disabled={!formData.name || !formData.email}
                onClick={nextStep}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
                Next Step
            </button>
        </div>
    );

    const renderStep3 = () => {
        const renderCorporateFields = () => (
            <>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">What kind of support are you offering?</label>
                    {['Funding', 'Equipment / Materials', 'Training / Trainers', 'Media / Awareness'].map((item) => (
                        <label key={item} className="flex items-center space-x-3 mb-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.supportType.includes(item)}
                                onChange={() => handleCheckboxChange('supportType', item)}
                                className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500"
                            />
                            <span className="text-gray-700">{item}</span>
                        </label>
                    ))}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Which program interests you?</label>
                    <select
                        value={formData.programInterest}
                        onChange={(e) => updateFormData('programInterest', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                    >
                        <option value="">Select a program...</option>
                        <option value="Empowerment Stitches">Empowerment Stitches</option>
                        <option value="Clean Water">Clean Water & Food Security</option>
                        <option value="Youth Leadership">Child & Youth Leadership</option>
                        <option value="Sanitary Pads">Pads Donation Drive</option>
                    </select>
                </div>
            </>
        );

        const renderNGOFields = () => (
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type of Collaboration</label>
                {['Joint Programs', 'Training Support', 'Resource Sharing', 'Outreach Partnership'].map((item) => (
                    <label key={item} className="flex items-center space-x-3 mb-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.collaborationType.includes(item)}
                            onChange={() => handleCheckboxChange('collaborationType', item)}
                            className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500"
                        />
                        <span className="text-gray-700">{item}</span>
                    </label>
                ))}
            </div>
        );

        const renderIndividualFields = () => (
            <>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role Applying For</label>
                    {['Mentor', 'Trainer', 'Field Volunteer', 'Community Outreach'].map((item) => (
                        <label key={item} className="flex items-center space-x-3 mb-2 cursor-pointer">
                            <input
                                type="radio"
                                name="volunteerRole"
                                checked={formData.volunteerRole === item}
                                onChange={() => updateFormData('volunteerRole', item)}
                                className="form-radio h-5 w-5 text-green-600 focus:ring-green-500"
                            />
                            <span className="text-gray-700">{item}</span>
                        </label>
                    ))}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                    {['Weekdays', 'Weekends', 'Both'].map((item) => (
                        <label key={item} className="flex items-center space-x-3 mb-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.availability.includes(item)}
                                onChange={() => handleCheckboxChange('availability', item)}
                                className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500"
                            />
                            <span className="text-gray-700">{item}</span>
                        </label>
                    ))}
                </div>
            </>
        );

        const renderDonorFields = () => (
            <>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">How would you like to support?</label>
                    {['One-time Donation', 'Recurring Monthly', 'Sponsor Specific Program'].map((item) => (
                        <label key={item} className="flex items-center space-x-3 mb-2 cursor-pointer">
                            <input
                                type="radio"
                                name="donorType"
                                checked={formData.donorType === item}
                                onChange={() => updateFormData('donorType', item)}
                                className="form-radio h-5 w-5 text-green-600 focus:ring-green-500"
                            />
                            <span className="text-gray-700">{item}</span>
                        </label>
                    ))}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget Range (Optional)</label>
                    <input
                        type="text"
                        value={formData.budgetRange}
                        onChange={(e) => updateFormData('budgetRange', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                        placeholder="e.g. $500 - $1000"
                    />
                </div>
            </>
        );

        return (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Specifics</h2>
                {formData.partnerType === 'corporate' && renderCorporateFields()}
                {formData.partnerType === 'ngo' && renderNGOFields()}
                {formData.partnerType === 'individual' && renderIndividualFields()}
                {formData.partnerType === 'donor' && renderDonorFields()}
                <button
                    onClick={nextStep}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors mt-4"
                >
                    Next Step
                </button>
            </div>
        );
    };

    const renderStep4 = () => (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Additional Details</h2>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tell us more about how you'd like to collaborate</label>
            <textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
                placeholder="Share any specific ideas, questions, or details here..."
            />
            <button
                onClick={nextStep}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors mt-4"
            >
                Review Application
            </button>
        </div>
    );

    const renderStep5 = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Review & Submit</h2>
            <div className="bg-green-50 p-6 rounded-xl space-y-3">
                <div className="flex justify-between border-b border-green-200 pb-2">
                    <span className="text-gray-600 font-medium">Type:</span>
                    <span className="text-gray-900 font-bold capitalize">{formData.partnerType}</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                    <span className="text-gray-600 font-medium">Name:</span>
                    <span className="text-gray-900 font-bold text-right">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                    <span className="text-gray-600 font-medium">Email:</span>
                    <span className="text-gray-900 font-bold text-right">{formData.email}</span>
                </div>
                <div className="flex justify-between pb-2">
                    <span className="text-gray-600 font-medium">Location:</span>
                    <span className="text-gray-900 font-bold text-right">{formData.location}</span>
                </div>
            </div>

            <p className="text-sm text-center text-gray-500">
                By clicking Submit, you agree to be contacted by our team regarding this partnership opportunity.
            </p>

            <button
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
                Submit Application <FaCheck />
            </button>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden relative">
                {/* Progress Bar */}
                <div className="bg-gray-100 h-2 w-full">
                    <div
                        className="bg-green-500 h-full transition-all duration-500 ease-out"
                        style={{ width: `${(step / 5) * 100}%` }}
                    ></div>
                </div>

                <div className="p-8">
                    {/* Header with Back Button */}
                    <div className="flex items-center mb-6">
                        {step > 1 ? (
                            <button
                                onClick={prevStep}
                                className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <FaChevronLeft />
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate('/')}
                                className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <FaChevronLeft />
                            </button>
                        )}
                        <span className="ml-auto text-sm font-medium text-gray-400">Step {step} of 5</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && renderStep1()}
                            {step === 2 && renderStep2()}
                            {step === 3 && renderStep3()}
                            {step === 4 && renderStep4()}
                            {step === 5 && renderStep5()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default PartnershipForm;
