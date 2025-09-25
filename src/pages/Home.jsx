import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { 
  Zap, 
  Activity, 
  DollarSign, 
  TrendingUp, 
  ArrowRight, 
  Brain, 
  Play, 
  Phone,
  BarChart3,
  Power,
  Target,
  Users,
  Settings
} from 'lucide-react';
import {
  selectTotalLiveLoad,
  selectDailyAverageUnits,
  selectCycleBillToDate,
  selectProjectedExpense,
  selectCurrent,
  selectPowerFactor
} from '../store/electricalSlice';

const Home = () => {
  const electrical = useSelector((state) => state.electrical);
  const totalLiveLoad = useSelector(selectTotalLiveLoad);
  const dailyAverageUnits = useSelector(selectDailyAverageUnits);
  const cycleBillToDate = useSelector(selectCycleBillToDate);
  const projectedExpense = useSelector(selectProjectedExpense);
  const current = useSelector(selectCurrent);
  const powerFactor = useSelector(selectPowerFactor);

  const kpis = [
    {
      title: 'Total Live Load',
      value: `${(totalLiveLoad / 1000).toFixed(2)} kW`,
      change: electrical.mainSwitch ? 'Active' : 'Inactive',
      changeType: electrical.mainSwitch ? 'increase' : 'decrease',
      icon: Power,
      color: electrical.mainSwitch ? 'bg-green-500' : 'bg-red-500'
    },
    {
      title: 'Daily Average Units',
      value: `${dailyAverageUnits.toFixed(1)} kWh`,
      change: '+2.1%',
      changeType: 'increase',
      icon: Activity,
      color: 'bg-blue-500'
    },
    {
      title: 'Bill This Cycle',
      value: `₹${cycleBillToDate.toFixed(0)}`,
      change: `@ ₹${electrical.tariffRate}/unit`,
      changeType: 'neutral',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'Projected Monthly',
      value: `₹${projectedExpense.toFixed(0)}`,
      change: 'Based on avg',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const electricalMetrics = [
    { label: 'Voltage', value: `${electrical.voltage}V`, unit: 'V' },
    { label: 'Current', value: `${current.toFixed(1)}A`, unit: 'A' },
    { label: 'Power Factor', value: powerFactor.toFixed(2), unit: '' },
    { label: 'Frequency', value: `${electrical.frequency}Hz`, unit: 'Hz' }
  ];

  const quickActions = [
    {
      title: 'Control Panel',
      description: 'Manage electrical loads and switches',
      icon: Settings,
      path: '/control-panel',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI Assistant',
      description: 'Get intelligent insights and assistance',
      icon: Brain,
      path: '/ai',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Run Simulation',
      description: 'Test scenarios with our simulation tool',
      icon: Play,
      path: '/simulation',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const activeLoads = Object.entries(electrical.loads)
    .filter(([_, load]) => load.isOn && electrical.mainSwitch)
    .slice(0, 6); // Show top 6 active loads

  const consumptionTrend = electrical.dailyConsumption.slice(-7).map((consumption, index) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index] || `Day ${index + 1}`,
    value: consumption
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Electrical Dashboard
              </h1>
              <p className="text-gray-600">
                Monitor your electrical consumption and manage loads efficiently
              </p>
            </div>
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              electrical.mainSwitch ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <div className={`w-3 h-3 rounded-full ${
                electrical.mainSwitch ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`}></div>
              <span className="font-medium">
                {electrical.mainSwitch ? 'System Online' : 'System Offline'}
              </span>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${kpi.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      kpi.changeType === 'increase'
                        ? 'text-green-700 bg-green-100'
                        : kpi.changeType === 'decrease'
                        ? 'text-red-700 bg-red-100'
                        : 'text-gray-700 bg-gray-100'
                    }`}
                  >
                    {kpi.change}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {kpi.value}
                  </h3>
                  <p className="text-gray-600 text-sm">{kpi.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Electrical Parameters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Electrical Parameters</h3>
            <div className="space-y-4">
              {electricalMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-gray-600">{metric.label}</span>
                  <span className="font-semibold text-gray-900">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Loads */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Active Loads</h3>
              <Link 
                to="/control-panel"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Manage All
              </Link>
            </div>
            <div className="space-y-3">
              {activeLoads.length > 0 ? (
                activeLoads.map(([loadName, load], index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-800 text-sm">{load.name}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{load.power}W</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm py-4">No active loads</p>
              )}
            </div>
          </div>

          {/* Weekly Consumption Trend */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trend</h3>
            <div className="space-y-3">
              {consumptionTrend.map((day, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-8 text-sm text-gray-600">{day.day}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((day.value / 30) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm font-medium text-gray-900">{day.value.toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link
                  key={index}
                  to={action.path}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium mr-2">Access Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">{Object.values(electrical.loads).filter(load => load.isOn).length}</span>
              </div>
              <p className="text-blue-100">Active Devices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">₹{electrical.tariffRate}</span>
              </div>
              <p className="text-blue-100">Per Unit Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Activity className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">24/7</span>
              </div>
              <p className="text-blue-100">Monitoring</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;