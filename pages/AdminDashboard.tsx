import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  Users, 
  AlertTriangle, 
  Globe, 
  Calendar,
  Filter,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Download,
  Search,
  LayoutGrid
} from 'lucide-react';
import { APPS } from '../constants';

type TimeRange = 'day' | 'week' | 'month' | 'quarter' | 'halfYear' | 'custom';

interface AppMetrics {
  appId: string;
  appName: string;
  accessCount: number;
  successfulLogins: number;
  failedLogins: number;
  regions: { name: string; count: number }[];
}

const REGIONS = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa'];

const AdminDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('week');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedAppId, setSelectedAppId] = useState<string>('all');

  // Mock Data Generation based on Time Range and App Selection
  const metrics = useMemo(() => {
    // Multiplier for mock data based on duration
    let multiplier = 1;
    switch (timeRange) {
      case 'day': multiplier = 1; break;
      case 'week': multiplier = 7; break;
      case 'month': multiplier = 30; break;
      case 'quarter': multiplier = 90; break;
      case 'halfYear': multiplier = 180; break;
      case 'custom': multiplier = 15; break; // Default average
    }

    // Filter apps first based on selection
    const appsToProcess = selectedAppId === 'all' 
      ? APPS 
      : APPS.filter(app => app.id === selectedAppId);

    return appsToProcess.map(app => {
      // Deterministic pseudo-random based on name length for consistency during re-renders if needed
      const baseAccess = (app.name.length * 15) + 50; 
      const accessCount = Math.floor(baseAccess * multiplier * (0.8 + Math.random() * 0.4));
      
      const successRate = 0.85 + (Math.random() * 0.14); // 85% to 99% success
      const successfulLogins = Math.floor(accessCount * 0.6 * successRate); // Assume 60% of accesses are login attempts
      const failedLogins = Math.floor(accessCount * 0.6 * (1 - successRate));

      // Generate random regional distribution
      const appRegions = REGIONS.map(region => ({
        name: region,
        count: Math.floor(successfulLogins * (Math.random() * 0.4))
      })).sort((a, b) => b.count - a.count);

      return {
        appId: app.id,
        appName: app.name,
        accessCount,
        successfulLogins,
        failedLogins,
        regions: appRegions
      };
    });
  }, [timeRange, startDate, endDate, selectedAppId]); // Recalculate when filters change

  // Top Apps Logic (If single app selected, it will just show 1)
  const topApps = [...metrics].sort((a, b) => b.accessCount - a.accessCount).slice(0, 5);
  const maxAccess = Math.max(...topApps.map(a => a.accessCount)) || 1;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="text-brand-600" />
                Admin Dashboard
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                Monitoring system performance, security incidents, and user engagement.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              {/* App Filter Dropdown */}
              <div className="relative group min-w-[200px] w-full md:w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <LayoutGrid size={16} />
                </div>
                <select
                  value={selectedAppId}
                  onChange={(e) => setSelectedAppId(e.target.value)}
                  className="w-full pl-10 pr-8 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <option value="all">All Applications</option>
                  <optgroup label="Product Suite">
                    {APPS.map(app => (
                      <option key={app.id} value={app.id}>{app.name}</option>
                    ))}
                  </optgroup>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                  <Filter size={12} />
                </div>
              </div>

              {/* Time Controls */}
              <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 w-full md:w-auto">
                {(['day', 'week', 'month', 'quarter', 'halfYear', 'custom'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`flex-1 md:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition-all capitalize whitespace-nowrap ${
                      timeRange === range 
                        ? 'bg-white text-brand-700 shadow-sm border border-slate-200' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {range === 'halfYear' ? '6 Months' : range === 'quarter' ? '90 Days' : range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Date Inputs */}
          {timeRange === 'custom' && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-end sm:items-center gap-4 animate-fade-in">
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  <Calendar size={12} /> Start Date
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-auto">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  <Calendar size={12} /> End Date
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <button className="w-full sm:w-auto mt-auto px-6 py-2 bg-brand-600 text-white text-sm font-medium rounded-md hover:bg-brand-700 transition-colors shadow-sm">
                Apply Filter
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 font-medium text-sm">
                  {selectedAppId === 'all' ? 'Total App Access' : 'App Access'}
                </h3>
                <div className="p-2 bg-blue-50 text-brand-600 rounded-lg"><BarChart3 size={20}/></div>
             </div>
             <p className="text-3xl font-bold text-slate-900">
               {metrics.reduce((acc, curr) => acc + curr.accessCount, 0).toLocaleString()}
             </p>
             <span className="text-xs text-green-600 font-medium flex items-center gap-1 mt-2">
               <span className="bg-green-100 px-1.5 py-0.5 rounded text-[10px]">+12.5%</span> from previous period
             </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 font-medium text-sm">Successful Logins</h3>
                <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CheckCircle2 size={20}/></div>
             </div>
             <p className="text-3xl font-bold text-slate-900">
               {metrics.reduce((acc, curr) => acc + curr.successfulLogins, 0).toLocaleString()}
             </p>
             <span className="text-xs text-slate-400 font-medium mt-2 block">
               Global authorization rate: 94.2%
             </span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 font-medium text-sm">Security Alerts</h3>
                <div className="p-2 bg-red-50 text-red-600 rounded-lg"><AlertTriangle size={20}/></div>
             </div>
             <p className="text-3xl font-bold text-slate-900">
               {metrics.reduce((acc, curr) => acc + curr.failedLogins, 0).toLocaleString()}
             </p>
             <span className="text-xs text-red-600 font-medium flex items-center gap-1 mt-2">
               Failed attempts requiring attention
             </span>
          </div>
        </div>

        {/* Top 5 Apps Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users size={18} className="text-brand-600" />
              {selectedAppId === 'all' ? 'Top 5 Most Accessed Apps' : 'App Traffic Overview'}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-500 capitalize">
                {timeRange === 'halfYear' ? '6 Months' : timeRange}
              </span>
            </div>
          </div>
          <div className="p-6">
            {topApps.length > 0 ? (
              <div className="space-y-6">
                {topApps.map((app, index) => (
                  <div key={app.appId} className="group">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-semibold text-slate-700 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold">
                          {selectedAppId === 'all' ? index + 1 : '-'}
                        </span>
                        {app.appName}
                      </span>
                      <span className="font-mono text-slate-600">{app.accessCount.toLocaleString()} visits</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-brand-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:bg-brand-500 relative overflow-hidden"
                        style={{ width: `${(app.accessCount / maxAccess) * 100}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-slate-400">No data available for the selected criteria.</div>
            )}
          </div>
        </div>

        {/* Detailed Security & Login Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Login Activity Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" />
                Authentication Health
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3">Application</th>
                    <th className="px-6 py-3 text-right">Successful</th>
                    <th className="px-6 py-3 text-right">Failed</th>
                    <th className="px-6 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {metrics.map((app) => {
                    const failRate = app.failedLogins / (app.successfulLogins + app.failedLogins);
                    const isHighRisk = failRate > 0.10;
                    
                    return (
                      <tr key={app.appId} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-900">{app.appName}</td>
                        <td className="px-6 py-4 text-right text-slate-600">{app.successfulLogins.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right font-medium text-red-600">
                          {app.failedLogins.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 flex justify-center">
                          {isHighRisk ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                              Warning
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                              Healthy
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {metrics.length === 0 && (
                     <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-400">No data found</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
             <div className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Globe size={18} className="text-indigo-600" />
                Geographic Activity
              </h2>
            </div>
            <div className="p-6 max-h-[500px] overflow-y-auto space-y-8">
              {metrics.map((app) => (
                <div key={app.appId} className="border-b border-slate-50 last:border-0 pb-6 last:pb-0">
                  <h3 className="font-semibold text-slate-800 mb-3 flex items-center justify-between">
                    {app.appName}
                    <span className="text-xs font-normal text-slate-400">Total Regions: {app.regions.length}</span>
                  </h3>
                  <div className="space-y-3">
                    {app.regions.slice(0, 3).map((region, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-24 text-xs font-medium text-slate-500 truncate">{region.name}</div>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${idx === 0 ? 'bg-indigo-500' : 'bg-indigo-300'}`}
                            style={{ width: `${(region.count / app.successfulLogins) * 100}%` }}
                          ></div>
                        </div>
                        <div className="w-12 text-right text-xs text-slate-600">{region.count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {metrics.length === 0 && (
                <div className="text-center text-slate-400 mt-10">No geographic data available</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;