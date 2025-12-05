import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMobileAlt, FaCcVisa, FaCcMastercard, FaPaypal, FaUniversity, FaChevronLeft, FaHeart, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [donationType, setDonationType] = useState('one-time');
    const [amount, setAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(''); // mpesa, card, paypal, bank
    const [details, setDetails] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        program: 'General Support',
        message: ''
    });

    const impactText = {
        '500': 'Provides 2 meals for children.',
        '1000': 'Buys sanitary pads for 5 girls.',
        '2000': 'Plants 20 trees for a greener future.',
        '5000': 'Sponsors a child’s school fees for a term.',
        'default': 'Your support changes lives.',
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleAmountSelect = (val) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setAmount(e.target.value);
    };

    const getCurrentAmount = () => customAmount || amount;

    // Reuse Paystack logic for final step
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v1/inline.js";
        document.body.appendChild(script);
    }, []);

    const handlePayment = () => {
        if (!details.fullName || !details.email || !getCurrentAmount()) {
            alert("Please fill in all details.");
            return;
        }

        // Simulate Bank Transfer Submission
        if (paymentMethod === 'bank') {
            alert(`Thank you, ${details.fullName}! We have received your payment details for the Bank Transfer. using Reference: BANK-${Math.floor(Math.random() * 10000)}`);
            navigate('/');
            return;
        }

        const handler = window.PaystackPop.setup({
            key: "pk_test_bd287703274461e0480db1f0a0c4e44cf3cd99a7",
            email: details.email,
            amount: Number(getCurrentAmount()) * 100, // Paystack takes kobo/cents
            currency: "KES",
            metadata: {
                custom_fields: [
                    { display_name: "Full Name", variable_name: "full_name", value: details.fullName },
                    { display_name: "Phone", variable_name: "phone_number", value: details.phoneNumber },
                    { display_name: "Donation Type", variable_name: "donation_type", value: donationType },
                    { display_name: "Program", variable_name: "program", value: details.program },
                    { display_name: "Message", variable_name: "message", value: details.message },
                ],
            },
            callback: (response) => {
                alert("Thank you! Payment successful. Ref: " + response.reference);
                navigate('/');
            },
            onClose: () => {
                alert("Payment canceled");
            },
        });
        handler.openIframe();
    };

    // Render Steps
    const renderStep1 = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Support Our Mission</h2>
            
            {/* Frequency Toggle */}
            <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-full max-w-fit mx-auto">
                {['One-Time', 'Monthly', 'Quarterly', 'Annually'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setDonationType(type.toLowerCase())}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${donationType === type.toLowerCase() ? 'bg-green-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Amount Presets */}
            <div className="grid grid-cols-2 gap-4">
                {['500', '1000', '2000', '5000'].map((val) => (
                    <button
                        key={val}
                        onClick={() => handleAmountSelect(val)}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 group hover:border-green-500 hover:shadow-md ${amount === val && !customAmount ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                    >
                        <span className={`text-xl font-bold ${amount === val && !customAmount ? 'text-green-700' : 'text-gray-700 group-hover:text-green-600'}`}>KES {val}</span>
                    </button>
                ))}
            </div>

            {/* Custom Amount */}
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">KES</span>
                <input
                    type="number"
                    placeholder="Other Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`w-full p-4 pl-12 rounded-xl border-2 focus:ring-2 focus:ring-green-500 outline-none font-bold text-lg transition-all ${customAmount ? 'border-green-500 bg-green-50' : 'border-gray-200 focus:border-green-500'}`}
                />
            </div>

            {/* Impact Text */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={amount || 'default'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-50 p-4 rounded-xl text-center border border-green-100"
                >
                    <p className="text-green-800 font-medium flex items-center justify-center gap-2">
                        <FaHeart className="text-red-500" />
                        {impactText[amount] || impactText['default']}
                    </p>
                </motion.div>
            </AnimatePresence>

            <button
                disabled={!getCurrentAmount()}
                onClick={nextStep}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
            >
                Continue
            </button>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">Choose Payment Method</h2>
            
            <div className="grid grid-cols-1 gap-4">
                {[
                    { id: 'mpesa', label: 'M-Pesa', icon: FaMobileAlt, color: 'text-green-600', desc: 'Instant mobile payment' },
                    { id: 'card', label: 'Credit / Debit Card', icon: FaCcVisa, icon2: FaCcMastercard, color: 'text-blue-600', desc: 'Secure card transaction' },
                    { id: 'paypal', label: 'PayPal', icon: FaPaypal, color: 'text-blue-800', desc: 'International payments' },
                    { id: 'bank', label: 'Bank Transfer', icon: FaUniversity, color: 'text-gray-700', desc: 'Direct bank deposit' },
                ].map((method) => (
                    <button
                        key={method.id}
                        onClick={() => {
                            setPaymentMethod(method.id);
                            nextStep();
                        }}
                        className="p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-md transition-all flex items-center justify-between group bg-white text-left"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl ${method.color} group-hover:bg-green-50 transition-colors`}>
                                <method.icon />
                            </div>
                            <div>
                                <span className="block font-bold text-lg text-gray-800">{method.label}</span>
                                <span className="text-sm text-gray-500">{method.desc}</span>
                            </div>
                        </div>
                        {method.icon2 && <method.icon2 className="text-2xl text-gray-400" />}
                    </button>
                ))}
            </div>
        </div>
    );

    const renderStep3 = () => {
        const isMpesa = paymentMethod === 'mpesa';
        const isCard = paymentMethod === 'card';
        const isBank = paymentMethod === 'bank';

        return (
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-center text-gray-800">Your Details</h2>
                    <p className="text-center text-gray-500 mt-1">Complete your donation securely</p>
                </div>

                {/* Amount (Editable) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount (KES)</label>
                    <input
                        type="number"
                        value={customAmount || amount}
                        onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount(e.target.value);
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-gray-50 font-semibold text-gray-700"
                    />
                </div>

                {/* Common Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            value={details.fullName}
                            onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                            placeholder="First & Last Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            value={details.email}
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                            placeholder="For receipt"
                        />
                    </div>
                </div>

                {/* M-Pesa Specific */}
                {isMpesa && (
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <label className="block text-sm font-medium text-gray-700 mb-1">M-Pesa Phone Number <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            value={details.phoneNumber}
                            onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
                            className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                            placeholder="07... or +254..."
                        />
                        <p className="text-xs text-green-700 mt-1">You will receive an STK prompt on this number.</p>
                    </div>
                )}

                {/* Card Specific (Visual Only for UI Demo) */}
                {isCard && (
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Card details</label>
                            <div className="relative">
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 border border-gray-300 rounded-lg outline-none" disabled />
                                <FaCcVisa className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM / YY" className="w-full p-3 border border-gray-300 rounded-lg outline-none" disabled />
                            <input type="text" placeholder="CVC" className="w-full p-3 border border-gray-300 rounded-lg outline-none" disabled />
                        </div>
                        <p className="text-xs text-blue-700">Inputs disabled for demo. Secure payment will load on confirm.</p>
                    </div>
                )}

                {/* Bank Transfer Details */}
                {isBank && (
                    <div className="bg-gray-100 p-4 rounded-xl text-sm text-gray-700 space-y-2">
                        <p><span className="font-bold">Bank:</span> Happy Bank Ltd</p>
                        <p><span className="font-bold">Account Name:</span> Happy Faces Foundation</p>
                        <p><span className="font-bold">Account No:</span> 1234567890</p>
                        <p><span className="font-bold">Paybill:</span> 247247</p>
                        <div className="border-t border-gray-200 my-2 pt-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Proof of Payment (Optional)</label>
                            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                        </div>
                    </div>
                )}

                {/* Optional Program Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program Selection (Optional)</label>
                    <select
                        value={details.program}
                        onChange={(e) => setDetails({ ...details, program: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                    >
                        <option value="General Support">General Support</option>
                        <option value="Feeding Program">Feeding Program</option>
                        <option value="Water & Sanitation">Water & Sanitation</option>
                        <option value="Youth Leadership">Youth Leadership</option>
                        <option value="Empowerment Stitches">Empowerment Stitches</option>
                        <option value="Pads for Girls">Pads for Girls</option>
                        <option value="Tree Planting">Tree Planting</option>
                        <option value="Orphan Support">Orphan Support</option>
                    </select>
                </div>

                {/* Optional Message */}
                <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Leave a Message (Optional)</label>
                     <textarea
                        rows={2}
                        value={details.message}
                        onChange={(e) => setDetails({ ...details, message: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
                        placeholder="Why does this cause matter to you?"
                     />
                </div>

                <div className="pt-2">
                    <button
                        onClick={nextStep}
                        disabled={!details.fullName || !details.email || (isMpesa && !details.phoneNumber)}
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
                    >
                        Review Contribution
                    </button>
                    {(isMpesa && !details.phoneNumber) && (
                        <p className="text-center text-xs text-red-500 mt-2">Please enter your M-Pesa number to proceed.</p>
                    )}
                </div>
            </div>
        );
    };

    const renderStep4 = () => (
        <div className="space-y-6">
            <div className="text-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 ring-4 ring-green-100">
                    <FaHeart className="text-4xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Confirm Donation</h2>
                <p className="text-gray-500 mt-2">You're making a huge difference!</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl space-y-3 border border-green-100">
                <div className="flex justify-between border-b border-green-200 pb-2">
                    <span className="text-gray-600 font-medium">Amount</span>
                    <span className="font-bold text-xl text-green-700">KES {getCurrentAmount()}</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                    <span className="text-gray-600 font-medium">Frequency</span>
                    <span className="font-bold capitalize text-gray-900">{donationType}</span>
                </div>
                <div className="flex justify-between border-b border-green-200 pb-2">
                    <span className="text-gray-600 font-medium">Method</span>
                    <span className="font-bold capitalize text-gray-900">{paymentMethod === 'mpesa' ? 'M-Pesa' : paymentMethod === 'bank' ? 'Bank Transfer' : paymentMethod}</span>
                </div>
                {details.program && (
                    <div className="flex justify-between border-b border-green-200 pb-2">
                        <span className="text-gray-600 font-medium">Program</span>
                        <span className="font-bold text-right text-gray-900">{details.program}</span>
                    </div>
                )}
                 <div className="flex justify-between pb-2">
                    <span className="text-gray-600 font-medium">Donor</span>
                    <span className="font-bold text-right text-gray-900">{details.fullName}</span>
                </div>
                {details.message && (
                    <div className="pt-2 border-t border-green-200">
                        <span className="block text-gray-600 font-medium mb-1">Message</span>
                        <p className="text-sm text-gray-700 italic">"{details.message}"</p>
                    </div>
                )}
            </div>

            <button
                onClick={handlePayment}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 hover:bg-green-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
                {paymentMethod === 'bank' ? 'Submit Contribution Details' : 'Confirm & Pay'} <FaCheck />
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
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>

                <div className="p-8">
                    {/* Navigation Header */}
                    <div className="flex items-center mb-8">
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
                        <span className="ml-auto text-sm font-medium text-gray-400">
                            Step {step} of 4
                        </span>
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default Donate;