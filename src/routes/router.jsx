// filepath: c:\Users\tavov\OneDrive\Desktop\nuew\front-end\src\routes\router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutLanding from '../layouts/layoutLanding';
function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<LayoutLanding />} /> {/* Nueva ruta */}
        {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}

export default RouterComponent;