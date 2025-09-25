import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { 
  Power, 
  Zap, 
  AlertTriangle,
  Settings,
  Activity,
  BarChart3,
  Shield,
  RefreshCw
} from 'lucide-react';
import { 
  toggleLoad, 
  toggleMainSwitch, 
  setTariffRate,
  selectTotalLiveLoad 
} from '../store/electricalSlice';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const electrical = useSelector((state) => state.electrical);
  const totalLiveLoad = useSelector(selectTotalLiveLoad);
  const [showSettings, setShowSettings] = useState(false);
  const [tempTariff, setTempTariff] = useState(electrical.tariffRate);

  const handleLoadToggle = (loadName) => {
    dispatch(toggleLoad(loadName));
  };

  const handleMainSwitchToggle = () => {
    dispatch(toggleMainSwitch());
  };

  const handleTariffUpdate = () => {
    dispatch(setTariffRate(tempTariff));
    setShowSettings(false);
  };

  const getLoadIcon = (loadName) => {
    const icons = {
      airConditioner: '❄️',
      refrigerator: '🧊',
      washingMachine: '👕',
      waterHeater: '🚿',
      lighting: '💡',
      television: '📺',
      microwave: '🍲',
      dishwasher: '🍽️',
      fan: '🌀',
      computer: '💻'
    };
    return icons[loadName] || '⚡';
  };

  const getLoadCategory = (power) => {
    if (power >= 1500) return { category: 'High', color: 'text-red-600 bg-red-100' };
    if (power >= 500) return { category: 'Medium', color: 'text-yellow-600 bg-yellow-100' };
    return { category: 'Low', color: 'text-green-600 bg-green-100' };
  };

  const totalActiveLoads = Object.values(electrical.loads).filter(load => load.isOn).length;
  const totalLoads = Object.keys(electrical.loads).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Control Panel
              </h1>
              <p className="text-gray-600">
                Manage your electrical loads and monitor system status
              </p>
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Electricity Tariff Rate (₹/unit)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    step="0.1"
                    value={tempTariff}
                    onChange={(e) => setTempTariff(parseFloat(e.target.value))}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleTariffUpdate}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  <p>Current Rate: ₹{electrical.tariffRate}/unit</p>
                  <p>System Voltage: {electrical.voltage}V</p>
                  <p>Frequency: {electrical.frequency}Hz</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{totalActiveLoads}/{totalLoads}</span>
            </div>
            <p className="text-gray-600 text-sm">Active Loads</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">{(totalLiveLoad / 1000).toFixed(1)}</span>
            </div>
            <p className="text-gray-600 text-sm">Total Load (kW)</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                electrical.mainSwitch ? 'bg-green-500' : 'bg-red-500'
              }`}>
                <Power className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${
                electrical.mainSwitch ? 'text-green-600' : 'text-red-600'
              }`}>
                {electrical.mainSwitch ? 'ON' : 'OFF'}
              </span>
            </div>
            <p className="text-gray-600 text-sm">Main Switch</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">₹{electrical.tariffRate}</span>
            </div>
            <p className="text-gray-600 text-sm">Rate/Unit</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Switch Control */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Main Control</h3>
              
              {/* Emergency Alert */}
              {!electrical.mainSwitch && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-800">System Offline</span>
                  </div>
                  <p className="text-red-700 text-sm">All loads are disconnected</p>
                </div>
              )}
              
              {/* Main Switch */}
              <div className="text-center">
                <button
                  onClick={handleMainSwitchToggle}
                  className={`w-24 h-24 rounded-full border-4 transition-all duration-300 hover:scale-105 ${
                    electrical.mainSwitch
                      ? 'bg-green-500 border-green-400 hover:bg-green-600 shadow-green-200 shadow-lg'
                      : 'bg-red-500 border-red-400 hover:bg-red-600 shadow-red-200 shadow-lg'
                  }`}
                >
                  <Power className="w-12 h-12 text-white mx-auto" />
                </button>
                <p className="mt-4 font-semibold text-gray-900">MAIN SWITCH</p>
                <p className={`text-sm ${electrical.mainSwitch ? 'text-green-600' : 'text-red-600'}`}>
                  {electrical.mainSwitch ? 'System Active' : 'System Inactive'}
                </p>
              </div>
            </div>

            {/* Load Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Load Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">High Power</span>
                  <span className="font-medium">
                    {Object.values(electrical.loads).filter(load => load.power >= 1500 && load.isOn).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Medium Power</span>
                  <span className="font-medium">
                    {Object.values(electrical.loads).filter(load => load.power >= 500 && load.power < 1500 && load.isOn).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Low Power</span>
                  <span className="font-medium">
                    {Object.values(electrical.loads).filter(load => load.power < 500 && load.isOn).length}
                  </span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-gray-900">Total Power</span>
                  <span className="text-blue-600">{(totalLiveLoad / 1000).toFixed(2)} kW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Load Controls */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Individual Load Controls</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>Protected by MCB</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {Object.entries(electrical.loads).map(([loadName, load]) => {
                  const { category, color } = getLoadCategory(load.power);
                  return (
                    <div
                      key={loadName}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        load.isOn && electrical.mainSwitch
                          ? 'border-green-200 bg-green-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{getLoadIcon(loadName)}</span>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{load.name}</h4>
                            <p className="text-xs text-gray-500">{load.power}W</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${color}`}>
                          {category}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className={`flex items-center space-x-2 text-sm ${
                          load.isOn && electrical.mainSwitch ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            load.isOn && electrical.mainSwitch ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                          }`}></div>
                          <span>{load.isOn && electrical.mainSwitch ? 'Active' : 'Inactive'}</span>
                        </div>
                        
                        <button
                          onClick={() => handleLoadToggle(loadName)}
                          disabled={!electrical.mainSwitch}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            load.isOn && electrical.mainSwitch
                              ? 'bg-green-500'
                              : 'bg-gray-300'
                          } ${!electrical.mainSwitch ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              load.isOn && electrical.mainSwitch ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">System Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    electrical.mainSwitch ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                  }`}></div>
                  <span className="text-sm">
                    Main Power: {electrical.mainSwitch ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Load Monitoring: Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Safety Systems: Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-white">
                <p className="text-2xl font-bold">{(totalLiveLoad / 1000).toFixed(1)} kW</p>
                <p className="text-blue-100 text-sm">Current Load</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200">
                <RefreshCw className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Safety Information */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Safety Guidelines</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Turn off main switch before performing any maintenance</li>
                <li>• High power loads should be monitored regularly</li>
                <li>• Contact an electrician if you notice any unusual behavior</li>
                <li>• Keep emergency contact numbers readily available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ControlPanel