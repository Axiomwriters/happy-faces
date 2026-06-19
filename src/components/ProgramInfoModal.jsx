import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FiDollarSign, FiTarget, FiUsers, FiGlobe, FiTrendingUp, FiHeart } from 'react-icons/fi';

const SectionCard = ({ icon: Icon, title, children }) => (
  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-100 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
    </div>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

const SdgBadge = ({ label }) => (
  <span className="inline-block px-4 py-2 bg-green-50 text-green-700 font-semibold text-sm rounded-full border border-green-200 hover:bg-green-100 transition-colors">
    {label}
  </span>
);

const CostChip = ({ label }) => (
  <span className="inline-block px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 shadow-sm">
    {label}
  </span>
);

const InfoRow = ({ label, value }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-gray-500 font-medium text-sm whitespace-nowrap">{label}:</span>
    <span className="text-gray-900 font-bold">{value}</span>
  </div>
);

const ProgramInfoModal = ({ program, onClose }) => {
  if (!program) return null;

  const { programInfo } = program;

  return (
    <AnimatePresence>
      {program && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-br from-green-700 to-emerald-800 p-6 sm:p-8 text-white relative">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <program.icon className="w-6 h-6" />
                        </div>
                        <span className="text-green-200 text-sm font-bold uppercase tracking-wider">Program Details</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{program.title}</h2>
                      <p className="text-green-200 text-lg">{program.subtitle}</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-white/20 rounded-2xl transition-colors flex-shrink-0 ml-4"
                    >
                      <HiX className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto scrollbar-hide">
                  {programInfo.overview && (
                    <SectionCard icon={FiGlobe} title="Overview">
                      <p>{programInfo.overview}</p>
                    </SectionCard>
                  )}

                  {programInfo.impactModel && (
                    <SectionCard icon={FiTarget} title="Impact Model">
                      <p>{programInfo.impactModel}</p>
                    </SectionCard>
                  )}

                  {programInfo.targetBeneficiaries && (
                    <SectionCard icon={FiUsers} title="Target Beneficiaries">
                      <p>{programInfo.targetBeneficiaries}</p>
                    </SectionCard>
                  )}

                  {programInfo.communityContext && (
                    <SectionCard icon={FiHeart} title="Community Context">
                      <p>{programInfo.communityContext}</p>
                    </SectionCard>
                  )}

                  {programInfo.fundingNeeds && (
                    <SectionCard icon={FiDollarSign} title="Funding Needs">
                      <div className="space-y-4">
                        <InfoRow label="Annual Budget" value={programInfo.fundingNeeds.annualBudget} />
                        <div>
                          <p className="text-gray-500 font-medium text-sm mb-2">Key Cost Areas:</p>
                          <div className="flex flex-wrap gap-2">
                            {programInfo.fundingNeeds.keyCosts.map((cost, i) => (
                              <CostChip key={i} label={cost} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </SectionCard>
                  )}

                  {programInfo.sdgAlignment && programInfo.sdgAlignment.length > 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                          <FiTrendingUp className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">SDG Alignment</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {programInfo.sdgAlignment.map((sdg, i) => (
                          <SdgBadge key={i} label={sdg} />
                        ))}
                      </div>
                    </div>
                  )}

                  {programInfo.scalability && (
                    <SectionCard icon={FiTrendingUp} title="Scalability & Replication">
                      <p>{programInfo.scalability}</p>
                    </SectionCard>
                  )}
                </div>

                <div className="border-t border-gray-100 px-6 sm:px-8 py-5 bg-gray-50/50 flex items-center justify-between">
                  <p className="text-sm text-gray-500 font-medium">
                    For partnership inquiries, use the <span className="text-green-600 font-bold">Partner With Us</span> button below
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors text-sm"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProgramInfoModal;
