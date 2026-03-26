import { useLocation, useNavigate } from 'react-router-dom';

const TOTAL_PAGES = 13;

export default function PageNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const current = Number(pathname.replace('/', '')) || 1;

  return (
    <div className="fixed top-4 left-4 flex gap-1.5 z-50">
      {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => navigate(`/${page}`)}
          className="w-8 h-8 rounded text-xs font-medium transition-colors"
          style={{
            backgroundColor: page === current ? '#A855F7' : 'rgba(255,255,255,0.08)',
            color: page === current ? '#fff' : 'rgba(255,255,255,0.5)',
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
