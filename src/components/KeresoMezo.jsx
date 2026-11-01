import '../css/KeresoMezo.css';

// Egyszerű, modern nagyító ikon
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="search-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

function KeresoMezo({ sk }) {
  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Keresés az archívumban..." 
        onChange={(e) => sk(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}

export default KeresoMezo;