import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function ElectricalDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [meterData, setMeterData] = useState({
    voltage: 240.5,
    current: 12.8,
    power: 3.1,
    energy: 1247.3
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setMeterData(prev => ({
        voltage: 240 + (Math.random() - 0.5) * 10,
        current: 12 + (Math.random() - 0.5) * 4,
        power: 2.8 + (Math.random() - 0.5) * 0.8,
        energy: prev.energy + Math.random() * 0.1
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Sample chart data
  const powerTrendData = [
    { time: '00:00', power: 2.1 },
    { time: '04:00', power: 1.8 },
    { time: '08:00', power: 3.2 },
    { time: '12:00', power: 3.8 },
    { time: '16:00', power: 3.5 },
    { time: '20:00', power: 3.1 },
    { time: '24:00', power: 2.3 }
  ];

  const voltageData = [
    { time: '10s', voltage: 242 },
    { time: '8s', voltage: 241 },
    { time: '6s', voltage: 240 },
    { time: '4s', voltage: 239 },
    { time: '2s', voltage: 241 },
    { time: 'now', voltage: meterData.voltage }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Electrical Dashboard
              </h1>
              <p className="text-gray-400 text-lg">Real-time meter readings and system monitoring</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-cyan-400 font-mono text-lg">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-gray-400 text-sm">
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Voltage KPI */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {meterData.voltage.toFixed(1)}
                  </div>
                  <div className="text-cyan-400 text-sm font-medium">V</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm mb-2">Voltage</div>
              <div className="flex items-center text-green-400 text-xs">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Normal Range
              </div>
            </div>
          </div>

          {/* Current KPI */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {meterData.current.toFixed(1)}
                  </div>
                  <div className="text-purple-400 text-sm font-medium">A</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm mb-2">Current</div>
              <div className="flex items-center text-yellow-400 text-xs">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Moderate Load
              </div>
            </div>
          </div>

          {/* Power KPI */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {meterData.power.toFixed(1)}
                  </div>
                  <div className="text-green-400 text-sm font-medium">kW</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm mb-2">Power</div>
              <div className="flex items-center text-green-400 text-xs">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Optimal
              </div>
            </div>
          </div>

          {/* Energy KPI */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {meterData.energy.toFixed(1)}
                  </div>
                  <div className="text-orange-400 text-sm font-medium">kWh</div>
                </div>
              </div>
              <div className="text-gray-400 text-sm mb-2">Total Energy</div>
              <div className="flex items-center text-orange-400 text-xs">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                This Month
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Power Trend Chart */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                24-Hour Power Consumption
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={powerTrendData}>
                    <defs>
                      <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="time" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="power"
                      stroke="#22d3ee"
                      strokeWidth={3}
                      fill="url(#powerGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Real-time Voltage Chart */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur"></div>
            <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                Real-time Voltage
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={voltageData}>
                    <XAxis 
                      dataKey="time" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis 
                      domain={[235, 245]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="voltage"
                      stroke="#a855f7"
                      strokeWidth={3}
                      dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#a855f7', strokeWidth: 2, fill: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Status Panel */}
        <div className="relative group">
          <div className="absolute bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl blur"></div>
          <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6">System Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-medium">Grid Connection</div>
                  <div className="text-green-400 text-sm">Online</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-medium">Load Balance</div>
                  <div className="text-yellow-400 text-sm">Monitoring</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-medium">Data Logger</div>
                  <div className="text-cyan-400 text-sm">Recording</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}