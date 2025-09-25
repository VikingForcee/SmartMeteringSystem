// store/electricalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Individual load states (on/off)
  loads: {
    airConditioner: { isOn: true, power: 1500, name: 'Air Conditioner' },
    refrigerator: { isOn: true, power: 200, name: 'Refrigerator' },
    washingMachine: { isOn: false, power: 800, name: 'Washing Machine' },
    waterHeater: { isOn: true, power: 2000, name: 'Water Heater' },
    lighting: { isOn: true, power: 300, name: 'House Lighting' },
    television: { isOn: true, power: 150, name: 'Television' },
    microwave: { isOn: false, power: 1000, name: 'Microwave' },
    dishwasher: { isOn: false, power: 1200, name: 'Dishwasher' },
    fan: { isOn: true, power: 75, name: 'Ceiling Fans' },
    computer: { isOn: true, power: 400, name: 'Computer Setup' }
  },
  
  // Main switch state
  mainSwitch: true,
  
  // Electrical parameters (calculated based on load states)
  voltage: 230,
  frequency: 50,
  
  // Billing and consumption data
  tariffRate: 8.5, // Rs per unit
  cycleStartDate: new Date().getDate() <= 15 ? 
    new Date(new Date().getFullYear(), new Date().getMonth(), 1) : 
    new Date(new Date().getFullYear(), new Date().getMonth(), 16),
  
  // Historical data for calculations
  dailyConsumption: [
    22.5, 21.8, 23.2, 20.1, 24.5, 19.8, 25.1, 22.9, 21.5, 23.8,
    20.5, 22.1, 24.2, 21.7, 23.5, 22.8, 21.2, 24.1, 20.9, 23.6
  ], // Last 20 days consumption in kWh
};

const electricalSlice = createSlice({
  name: 'electrical',
  initialState,
  reducers: {
    toggleLoad: (state, action) => {
      const loadName = action.payload;
      if (state.loads[loadName] && state.mainSwitch) {
        state.loads[loadName].isOn = !state.loads[loadName].isOn;
      }
    },
    
    toggleMainSwitch: (state) => {
      state.mainSwitch = !state.mainSwitch;
      // Turn off all loads when main switch is off
      if (!state.mainSwitch) {
        Object.keys(state.loads).forEach(loadName => {
          state.loads[loadName].isOn = false;
        });
      } else {
        // Turn on essential loads when main switch is turned on
        state.loads.refrigerator.isOn = true;
        state.loads.lighting.isOn = true;
      }
    },
    
    setLoadPower: (state, action) => {
      const { loadName, power } = action.payload;
      if (state.loads[loadName]) {
        state.loads[loadName].power = power;
      }
    },
    
    updateDailyConsumption: (state, action) => {
      const newConsumption = action.payload;
      state.dailyConsumption = [...state.dailyConsumption.slice(1), newConsumption];
    },
    
    setTariffRate: (state, action) => {
      state.tariffRate = action.payload;
    }
  },
});

// Selectors
export const selectTotalLiveLoad = (state) => {
  if (!state.electrical.mainSwitch) return 0;
  
  return Object.values(state.electrical.loads)
    .filter(load => load.isOn)
    .reduce((total, load) => total + load.power, 0);
};

export const selectCurrentConsumption = (state) => {
  const totalLoad = selectTotalLiveLoad(state);
  return (totalLoad / 1000) * 24; // kWh per day at current load
};

export const selectDailyAverageUnits = (state) => {
  const { dailyConsumption } = state.electrical;
  return dailyConsumption.reduce((sum, day) => sum + day, 0) / dailyConsumption.length;
};

export const selectCycleBillToDate = (state) => {
  const { dailyConsumption, tariffRate, cycleStartDate } = state.electrical;
  const today = new Date();
  const daysPassed = Math.ceil((today - cycleStartDate) / (1000 * 60 * 60 * 24));
  const daysToConsider = Math.min(daysPassed, dailyConsumption.length);
  
  const totalUnits = dailyConsumption.slice(-daysToConsider).reduce((sum, day) => sum + day, 0);
  return totalUnits * tariffRate;
};

export const selectProjectedExpense = (state) => {
  const averageDaily = selectDailyAverageUnits(state);
  const { tariffRate } = state.electrical;
  return averageDaily * 30 * tariffRate; // Monthly projection
};

export const selectPowerFactor = (state) => {
  const totalLoad = selectTotalLiveLoad(state);
  // Assume power factor varies with load (simplified calculation)
  if (totalLoad === 0) return 0;
  if (totalLoad < 1000) return 0.85;
  if (totalLoad < 3000) return 0.90;
  return 0.95;
};

export const selectApparentPower = (state) => {
  const totalLoad = selectTotalLiveLoad(state);
  const powerFactor = selectPowerFactor(state);
  return powerFactor > 0 ? totalLoad / powerFactor : 0;
};

export const selectCurrent = (state) => {
  const apparentPower = selectApparentPower(state);
  const { voltage } = state.electrical;
  return voltage > 0 ? apparentPower / voltage : 0;
};

export const { 
  toggleLoad, 
  toggleMainSwitch, 
  setLoadPower, 
  updateDailyConsumption, 
  setTariffRate 
} = electricalSlice.actions;

export default electricalSlice.reducer;