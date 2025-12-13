import {
   FaUserGraduate,
   FaBook,
   FaHandHoldingHeart,
   FaGraduationCap,
   FaFileDownload
} from 'react-icons/fa';

import AtRiskQueue from '../../components/admin/dashboard/AtRiskQueue';
import CourseCapacity from '../../components/admin/dashboard/CourseCapacity';
import FinancialCharts from '../../components/admin/dashboard/FinancialCharts';
import ImpactMap from '../../components/admin/dashboard/ImpactMap';
import MissionScore from '../../components/admin/dashboard/MissionScore';

// Reusing KpiCard and ActivityItem locally for simplicity
const KpiCard = ({ title, value, subtext, icon, trend, type = 'standard' }) => (
   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
         <div className="p-3 rounded-lg bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
            {icon}
         </div>
         {trend && (
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
               {trend > 0 ? '+' : ''}{trend}%
            </span>
         )}
      </div>
      <div className="space-y-1">
         <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
         <div className="flex items-end gap-2">
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            {subtext && <span className="text-xs text-gray-400 mb-1">{subtext}</span>}
         </div>
      </div>
      {type === 'progress' && (
         <div className="mt-3 w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '78%' }}></div>
         </div>
      )}
      {type === 'finance' && (
         <div className="mt-3 w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '53%' }}></div>
         </div>
      )}
   </div>
);

const ActivityItem = ({ title, desc, time, type }) => {
   return (
      <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-0 cursor-pointer">
         <div className={`w-2 h-2 mt-2 rounded-full ${type === 'alert' ? 'bg-red-500' : 'bg-green-500'}`}></div>
         <div>
            <p className="text-sm font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
            <p className="text-[10px] text-gray-400 mt-2">{time}</p>
         </div>
      </div>
   )
}

const DashboardHome = () => {
   return (
      <div className="space-y-6 animate-fade-in-up">
         {/* Header */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
               <h1 className="text-2xl font-bold text-gray-800">Impact Command Center</h1>
               <p className="text-gray-500">Operational oversight and strategic impact tracking.</p>
            </div>
            <div className="flex gap-3">
               <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <FaFileDownload /> Donor Report
               </button>
               <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 shadow-sm">
                  <option>This Month</option>
                  <option>Last Quarter</option>
                  <option>YTD</option>
               </select>
            </div>
         </div>

         {/* Row 1: Strategic KPIs & Mission Score */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-1">
               <MissionScore />
            </div>
            <KpiCard title="Active Participants" value="1,020" icon={<FaUserGraduate />} trend={5} />
            <KpiCard title="Completion Rate" value="78%" icon={<FaBook />} type="progress" />
            <KpiCard title="Funds Raised" value="$53k" icon={<FaHandHoldingHeart />} type="finance" />
            <KpiCard title="Job Placements" value="45" icon={<FaGraduationCap />} subtext="Confirmed" trend={12} />
         </div>

         {/* Row 2: Operational Management (At-Risk & Capacity) */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
               <AtRiskQueue />
            </div>
            <div>
               <CourseCapacity />
            </div>
         </div>

         {/* Row 3: Financial Oversight & Geographic Impact */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
               <FinancialCharts />
            </div>
            <div>
               <ImpactMap />
            </div>
         </div>

         {/* Row 4: Recent Activity & Trends */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-800">Enrollment vs Retention</h2>
               </div>
               {/* Simplified Chart Placeholder */}
               <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200 text-gray-400">
                  Dual-Axis Trends Chart Area
               </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h2 className="text-lg font-bold text-gray-800 mb-4">Engagement & Support</h2>
               <div className="space-y-6">
                  <div>
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Donations</h3>
                     <div className="-mx-4 space-y-1">
                        <ActivityItem title="Tech Solutions Ltd" desc="$500.00 - Youth Program" time="2h ago" />
                        <ActivityItem title="Sarah Connor" desc="$100.00 - General" time="5h ago" />
                     </div>
                  </div>

                  <div>
                     <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">New Partner Inquiries</h3>
                     <div className="-mx-4 space-y-1">
                        <ActivityItem title="Acme Corp" desc="Corporate Partnership Inquiry" time="1d ago" type="alert" />
                        <ActivityItem title="Global Hope NGO" desc="Collaboration Request" time="2d ago" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardHome;
