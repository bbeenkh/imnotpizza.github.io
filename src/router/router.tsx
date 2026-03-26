import Page1 from '@/pages/1';
import Page2 from '@/pages/2';
import Page3 from '@/pages/3';
import Page4 from '@/pages/4';
import Page5 from '@/pages/5';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="*" element={<Navigate to="/1" replace />} />
      </Routes>
    </Router>
  );
}
