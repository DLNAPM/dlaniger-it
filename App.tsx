import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AppDetail from './pages/AppDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import DeploymentApps from './pages/DeploymentApps';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="app/:id" element={<AppDetail />} />
          <Route path="deployment-apps" element={<DeploymentApps />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;