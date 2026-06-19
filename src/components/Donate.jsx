import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMobileAlt, FaCcVisa, FaCcMastercard, FaPaypal, FaUniversity,
  FaChevronLeft, FaHeart, FaCheck, FaGlobe, FaHandHoldingUsd,
  FaBuilding, FaUser, FaUsers, FaBalanceScale
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import programsData from '../data/ProgramsData';

const CURRENCIES = [
  { id: 'kes', label: 'KES', symbol: 'KSh', rate: 1, flag: '🇰🇪' },
  { id: 'usd', label: 'USD', symbol: '$', rate: 130, flag: '🇺🇸' },
  { id: 'eur', label: 'EUR', symbol: '€', rate: 140, flag: '🇪🇺' },
  { id: 'gbp', label: 'GBP', symbol: '£', rate: 165, flag: '🇬🇧' },
];

const AMOUNT_PRESETS = {
  kes: [500, 1000, 2000, 5000, 10000],
  usd: [10, 25, 50, 100, 250],
  eur: [10, 25, 50, 100, 250],
  gbp: [10, 25, 50, 100, 250],
};

const DONOR_TYPES = [
  { id: 'individual', label: 'Individual', Icon: FaUser, desc: 'Personal donation' },
  { id: 'organization', label: 'Organization', Icon: FaBuilding, desc: 'NGO, foundation, or corporate' },
  { id: 'fiscal-sponsor', label: 'Fiscal Sponsor', Icon: FaBalanceScale, desc: 'Tax-exempt grant intermediary' },
];

const PAYMENT_METHODS = [
  { id: 'mpesa', label: 'M-Pesa', icon: FaMobileAlt, color: 'text-green-600', desc: 'Instant mobile money (Kenya)' },
  { id: 'card', label: 'Credit / Debit Card', icon: FaCcVisa, icon2: FaCcMastercard, color: 'text-blue-600', desc: 'Visa, Mastercard, Amex' },
  { id: 'paypal', label: 'PayPal', icon: FaPaypal, color: 'text-blue-800', desc: 'International payments' },
  { id: 'bank', label: 'Local Bank Transfer', icon: FaUniversity, color: 'text-gray-700', desc: 'KES direct deposit (Kenya)' },
  { id: 'wire', label: 'International Wire', icon: FaGlobe, color: 'text-indigo-600', desc: 'USD/EUR/GBP wire transfer' },
  { id: 'daf', label: 'Donor Advised Fund', icon: FaHandHoldingUsd, color: 'text-purple-600', desc: 'Recommend a DAF grant' },
  { id: 'grant', label: 'Corporate / Foundation Grant', icon: FaBuilding, color: 'text-orange-600', desc: 'Grant matching or corporate gift' },
];

const ORG_TYPES = [
  'Nonprofit / NGO',
  'Foundation',
  'Corporate',
  'Faith-Based',
  'Community Organization',
  'Government Agency',
  'Other',
];

const countryOptions = [
  'Kenya', 'United States', 'United Kingdom', 'Canada', 'Germany',
  'France', 'Netherlands', 'Switzerland', 'Sweden', 'Norway',
  'Denmark', 'Belgium', 'Australia', 'Japan', 'South Africa',
  'Nigeria', 'Ghana', 'Uganda', 'Tanzania', 'Rwanda', 'Ethiopia',
  'Other',
];

const Donate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState('kes');
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [donorType, setDonorType] = useState('individual');
  const [details, setDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    organizationName: '',
    orgType: '',
    taxId: '',
    country: 'Kenya',
    program: 'General Support',
    message: '',
    fiscalSponsorAgreement: false,
    taxReceipt: false,
  });

  const currentCurrency = CURRENCIES.find(c => c.id === currency);
  const presets = AMOUNT_PRESETS[currency];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    document.body.appendChild(script);
  }, []);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleAmountSelect = (val) => {
    setAmount(String(val));
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  const getCurrentAmount = () => customAmount || amount;

  const amountInKES = (val) => {
    const num = Number(val);
    if (!num) return 0;
    return Math.round(num * currentCurrency.rate);
  };

  const formatCurrency = (val, currId) => {
    const c = CURRENCIES.find(cr => cr.id === currId) || currentCurrency;
    return `${c.symbol}${Number(val).toLocaleString()}`;
  };

  const getImpactPreview = () => {
    const amt = Number(getCurrentAmount());
    if (!amt) return null;

    const prog = programsData.find(
      p => p.title === details.program || p.id === details.program
    );

    if (!prog || !prog.programInfo) {
      return {
        title: 'General Support',
        line: 'Your donation powers all Happy Faces programs across education, health, and economic empowerment.',
        sdg: [],
      };
    }

    const info = prog.programInfo;
    const annualBudgetNum = parseInt(info.fundingNeeds?.annualBudget?.replace(/[$,]/g, '') || '0');
    const budgetPct = annualBudgetNum ? Math.round((amountInKES(amt) / annualBudgetNum) * 100) : null;

    return {
      title: prog.title,
      icon: prog.icon,
      line: budgetPct
        ? `Contributes ~${budgetPct}% of ${prog.title}'s annual ${info.fundingNeeds?.annualBudget || 'budget'} — ${info.overview?.split('.')[0]}.`
        : `Supports ${prog.title} — ${info.overview?.split('.')[0]}.`,
      budget: info.fundingNeeds?.annualBudget,
      sdg: info.sdgAlignment || [],
      keyCosts: info.fundingNeeds?.keyCosts || [],
    };
  };

  const handlePayment = () => {
    if (!details.fullName || !details.email || !getCurrentAmount()) {
      alert('Please fill in all required details.');
      return;
    }

    if (donorType === 'fiscal-sponsor' && !details.fiscalSponsorAgreement) {
      alert('Please agree to the Fiscal Sponsor terms to proceed.');
      return;
    }

    const kesAmount = amountInKES(getCurrentAmount());

    if (paymentMethod === 'bank' || paymentMethod === 'wire' || paymentMethod === 'daf' || paymentMethod === 'grant') {
      const ref = `${paymentMethod.toUpperCase()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      alert(`Thank you, ${details.fullName}! We have received your ${PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label} instructions.\n\nReference: ${ref}\n\nOur team will follow up within 2 business days to complete the arrangement.`);
      navigate('/');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: 'pk_test_bd287703274461e0480db1f0a0c4e44cf3cd99a7',
      email: details.email,
      amount: kesAmount * 100,
      currency: 'KES',
      metadata: {
        custom_fields: [
          { display_name: 'Full Name', variable_name: 'full_name', value: details.fullName },
          { display_name: 'Email', variable_name: 'email', value: details.email },
          { display_name: 'Donor Type', variable_name: 'donor_type', value: donorType },
          ...(details.organizationName ? [{ display_name: 'Organization', variable_name: 'organization', value: details.organizationName }] : []),
          ...(details.taxId ? [{ display_name: 'Tax ID / EIN', variable_name: 'tax_id', value: details.taxId }] : []),
          { display_name: 'Original Currency', variable_name: 'original_currency', value: currency.toUpperCase() },
          { display_name: 'Original Amount', variable_name: 'original_amount', value: getCurrentAmount() },
          { display_name: 'Donation Type', variable_name: 'donation_type', value: donationType },
          { display_name: 'Program', variable_name: 'program', value: details.program },
          { display_name: 'Message', variable_name: 'message', value: details.message },
          { display_name: 'Country', variable_name: 'country', value: details.country },
          { display_name: 'Tax Receipt Requested', variable_name: 'tax_receipt', value: details.taxReceipt ? 'Yes' : 'No' },
        ],
      },
      callback: (response) => {
        alert(`Thank you, ${details.fullName}! Your donation was successful.\n\nReference: ${response.reference}\n\nReceipt will be sent to ${details.email}`);
        navigate('/');
      },
      onClose: () => {
        alert('Payment canceled. You can try again anytime.');
      },
    });
    handler.openIframe();
  };

  const renderStep1 = () => {
    const impact = getImpactPreview();
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">Support Our Mission</h2>
          <p className="text-center text-gray-500 mt-1">Every contribution drives measurable impact</p>
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center gap-1 p-1 bg-gray-100 rounded-full max-w-xs mx-auto">
          {CURRENCIES.map((c) => (
            <button
              key={c.id}
              onClick={() => { setCurrency(c.id); setAmount(''); setCustomAmount(''); }}
              className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all flex items-center gap-1 ${
                currency === c.id
                  ? 'bg-white text-green-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Frequency Toggle */}
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-full max-w-fit mx-auto">
          {['One-Time', 'Monthly', 'Quarterly', 'Annually'].map((type) => (
            <button
              key={type}
              onClick={() => setDonationType(type.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                donationType === type.toLowerCase()
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Amount Presets */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {presets.map((val) => (
            <button
              key={val}
              onClick={() => handleAmountSelect(String(val))}
              className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-1 hover:border-green-500 hover:shadow-md ${
                amount === String(val) && !customAmount
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200'
              }`}
            >
              <span className={`text-lg font-bold ${
                amount === String(val) && !customAmount ? 'text-green-700' : 'text-gray-700'
              }`}>
                {currentCurrency.symbol}{val.toLocaleString()}
              </span>
              <span className="text-xs text-gray-400">{currency.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
            {currentCurrency.symbol}
          </span>
          <input
            type="number"
            placeholder={`Other Amount (${currency.toUpperCase()})`}
            value={customAmount}
            onChange={handleCustomAmountChange}
            className={`w-full p-4 pl-10 rounded-xl border-2 focus:ring-2 focus:ring-green-500 outline-none font-bold text-lg transition-all ${
              customAmount ? 'border-green-500 bg-green-50' : 'border-gray-200 focus:border-green-500'
            }`}
          />
        </div>

        {/* Impact Preview */}
        {impact && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${details.program}-${amount}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100"
            >
              <div className="flex items-start gap-3">
                {impact.icon && <impact.icon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />}
                <div>
                  <p className="text-green-800 font-medium text-sm">{impact.line}</p>
                  {impact.sdg.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {impact.sdg.map((s, i) => (
                        <span key={i} className="text-xs bg-white px-2 py-0.5 rounded-full text-green-700 border border-green-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <button
          disabled={!getCurrentAmount()}
          onClick={nextStep}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
        >
          Continue
        </button>
      </div>
    );
  };

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800">How Would You Like to Give?</h2>
        <p className="text-center text-gray-500 mt-1">Choose your payment method</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {PAYMENT_METHODS.map((method) => (
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
                <span className="block font-bold text-gray-800">{method.label}</span>
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
    const isSponsor = donorType === 'fiscal-sponsor';
    const isOrg = donorType === 'organization' || isSponsor;
    const showFiscalSpecific = isSponsor;

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800">Your Details</h2>
          <p className="text-center text-gray-500 mt-1">
            {isSponsor ? 'Fiscal sponsor information for tax-compliant giving' : isOrg ? 'Organization details' : 'Personal information'}
          </p>
        </div>

        {/* Amount (display only) */}
        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between border border-gray-200">
          <span className="text-gray-600 font-medium">Donation</span>
          <span className="font-bold text-lg text-green-700">
            {formatCurrency(getCurrentAmount(), currency)} {currency.toUpperCase()}
            {currency !== 'kes' && (
              <span className="text-sm text-gray-400 font-normal ml-1">
                (~KSh {amountInKES(getCurrentAmount()).toLocaleString()})
              </span>
            )}
          </span>
        </div>

        {/* Donor Type Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Donor Type</label>
          <div className="grid grid-cols-3 gap-2">
            {DONOR_TYPES.map((dt) => {
              const active = donorType === dt.id;
              return (
                <button
                  key={dt.id}
                  onClick={() => setDonorType(dt.id)}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    active
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <dt.Icon className={`mx-auto mb-1 ${active ? 'text-green-600' : 'text-gray-400'}`} />
                  <span className={`block text-xs font-bold ${active ? 'text-green-700' : 'text-gray-600'}`}>
                    {dt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Organization Fields */}
        {isOrg && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={details.organizationName}
                onChange={(e) => setDetails({ ...details, organizationName: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Official organization name"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
              <select
                value={details.orgType}
                onChange={(e) => setDetails({ ...details, orgType: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
              >
                <option value="">Select type...</option>
                {ORG_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Contact Person Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isOrg ? 'Contact Person Name' : 'Full Name'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={details.fullName}
              onChange={(e) => setDetails({ ...details, fullName: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="First & Last Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="For receipt & updates"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={details.phoneNumber}
              onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="+254 7XX XXX XXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              value={details.country}
              onChange={(e) => setDetails({ ...details, country: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
            >
              {countryOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Fiscal Sponsor Specific Fields */}
        {showFiscalSpecific && (
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 space-y-4">
            <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
              <FaBalanceScale className="text-purple-600" />
              Fiscal Sponsor Details
            </h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tax ID / EIN <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={details.taxId}
                onChange={(e) => setDetails({ ...details, taxId: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="e.g. XX-XXXXXXX (US EIN) or charity registration number"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="taxReceipt"
                checked={details.taxReceipt}
                onChange={(e) => setDetails({ ...details, taxReceipt: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="taxReceipt" className="text-sm text-gray-700">
                Send a tax-deductible receipt for this donation
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="fsAgreement"
                checked={details.fiscalSponsorAgreement}
                onChange={(e) => setDetails({ ...details, fiscalSponsorAgreement: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="fsAgreement" className="text-sm text-gray-700">
                <span className="font-semibold">I confirm</span> that{' '}
                {details.organizationName || 'my organization'} is a registered fiscal sponsor or grant-making entity
                and agrees to the terms of charitable grant administration, including fund restriction compliance and
                impact reporting requirements.
              </label>
            </div>
          </div>
        )}

        {/* Program Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Program Allocation
          </label>
          <select
            value={details.program}
            onChange={(e) => setDetails({ ...details, program: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
          >
            <option value="General Support">General Support — Where Most Needed</option>
            {programsData.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title} — {p.subtitle}
              </option>
            ))}
          </select>
          {details.program !== 'General Support' && (() => {
            const prog = programsData.find(p => p.title === details.program);
            if (!prog?.programInfo) return null;
            const info = prog.programInfo;
            return (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 bg-green-50 rounded-xl p-4 border border-green-100 text-sm space-y-2"
              >
                <p className="text-gray-700 leading-relaxed">{info.overview?.split('.')[0]}.</p>
                <div className="flex flex-wrap gap-1">
                  {info.sdgAlignment?.map((s, i) => (
                    <span key={i} className="text-xs bg-white px-2 py-0.5 rounded-full text-green-700 border border-green-200">
                      {s}
                    </span>
                  ))}
                </div>
                {info.fundingNeeds && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="font-medium">Annual Budget:</span>
                    <span className="text-green-700 font-bold">{info.fundingNeeds.annualBudget}</span>
                  </div>
                )}
              </motion.div>
            );
          })()}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Leave a Message <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={2}
            value={details.message}
            onChange={(e) => setDetails({ ...details, message: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
            placeholder="Why does this cause matter to you?"
          />
        </div>

        <button
          onClick={nextStep}
          disabled={
            !details.fullName ||
            !details.email ||
            (isOrg && !details.organizationName) ||
            (showFiscalSpecific && !details.taxId) ||
            (showFiscalSpecific && !details.fiscalSponsorAgreement)
          }
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
        >
          Review Contribution
        </button>
      </div>
    );
  };

  const renderStep4 = () => {
    const impact = getImpactPreview();
    const isSponsor = donorType === 'fiscal-sponsor';
    const isOrg = donorType === 'organization' || isSponsor;
    const isOffline = ['bank', 'wire', 'daf', 'grant'].includes(paymentMethod);
    const paymentLabel = PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label || paymentMethod;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 ring-4 ring-green-100">
            <FaHeart className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Confirm Your Gift</h2>
          <p className="text-gray-500 mt-1">
            {isSponsor
              ? 'Your fiscal sponsor grant will drive measurable change'
              : 'Your contribution makes a lasting difference'}
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-gray-50 rounded-xl border border-green-100 overflow-hidden">
          <div className="p-5 space-y-3">
            <div className="flex justify-between items-center border-b border-green-200 pb-2">
              <span className="text-gray-600 font-medium">Amount</span>
              <div className="text-right">
                <span className="font-bold text-xl text-green-700">
                  {formatCurrency(getCurrentAmount(), currency)} {currency.toUpperCase()}
                </span>
                {currency !== 'kes' && (
                  <div className="text-xs text-gray-400">
                    ≈ KSh {amountInKES(getCurrentAmount()).toLocaleString()}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-2">
              <span className="text-gray-600 font-medium">Frequency</span>
              <span className="font-bold capitalize text-gray-900">{donationType}</span>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-2">
              <span className="text-gray-600 font-medium">Method</span>
              <span className="font-bold capitalize text-gray-900">{paymentLabel}</span>
            </div>
            <div className="flex justify-between border-b border-green-200 pb-2">
              <span className="text-gray-600 font-medium">Donor Type</span>
              <span className="font-bold capitalize text-gray-900">
                {DONOR_TYPES.find(d => d.id === donorType)?.label || donorType}
              </span>
            </div>
            {isOrg && details.organizationName && (
              <div className="flex justify-between border-b border-green-200 pb-2">
                <span className="text-gray-600 font-medium">Organization</span>
                <span className="font-bold text-right text-gray-900">{details.organizationName}</span>
              </div>
            )}
            {isSponsor && details.taxId && (
              <div className="flex justify-between border-b border-green-200 pb-2">
                <span className="text-gray-600 font-medium">Tax ID / EIN</span>
                <span className="font-bold text-gray-900">{details.taxId}</span>
              </div>
            )}
            <div className="flex justify-between border-b border-green-200 pb-2">
              <span className="text-gray-600 font-medium">Program</span>
              <span className="font-bold text-right text-gray-900">{details.program}</span>
            </div>
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
        </div>

        {/* Impact Summary */}
        {impact && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
            <div className="flex items-center gap-2 mb-3">
              <FaHeart className="text-red-400" />
              <span className="font-bold text-gray-800 text-sm">Your Impact</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{impact.line}</p>
            {impact.keyCosts.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {impact.keyCosts.slice(0, 3).map((c, i) => (
                  <span key={i} className="text-xs bg-white px-2.5 py-1 rounded-full text-gray-600 border border-gray-200">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Fiscal Sponsor Tax Receipt Note */}
        {isSponsor && details.taxReceipt && (
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 text-sm">
            <div className="flex items-center gap-2 font-bold text-gray-800 mb-2">
              <FaBalanceScale className="text-purple-600" />
              Tax Receipt Summary
            </div>
            <p className="text-gray-600 text-sm">
              A tax-deductible receipt will be issued to{' '}
              <span className="font-semibold">{details.organizationName || 'your organization'}</span>
              {' '}({details.taxId}) for{' '}
              <span className="font-semibold">{formatCurrency(getCurrentAmount(), currency)} {currency.toUpperCase()}</span>
              {' '}allocated to <span className="font-semibold">{details.program}</span>.
              Receipt will be sent to {details.email}.
            </p>
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 hover:bg-green-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          {isOffline ? `Submit ${paymentLabel} Details` : 'Confirm & Pay'} <FaCheck />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden relative">
          {/* Progress Bar */}
          <div className="bg-gray-100 h-2 w-full">
            <div
              className="bg-green-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <div className="p-8">
            {/* Navigation Header */}
            <div className="flex items-center mb-8">
              {step > 1 ? (
                <button onClick={prevStep} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <FaChevronLeft />
                </button>
              ) : (
                <button onClick={() => navigate('/')} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <FaChevronLeft />
                </button>
              )}
              <span className="ml-auto text-sm font-medium text-gray-400">Step {step} of 4</span>
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
      <Footer />
    </div>
  );
};

export default Donate;
