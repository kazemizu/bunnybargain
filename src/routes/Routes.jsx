import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Custom404 } from '../pages/404';
import Homepage from '../pages/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App