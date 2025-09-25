import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AIPage from './pages/Ai';
import SimulationPage from './pages/Simulation';
import ContactPage from './pages/Contact';
import ControlPanel from './pages/ControlPanel';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/simulation" element={<SimulationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/control-panel" element={<ControlPanel />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;