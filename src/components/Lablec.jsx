import '../css/Lablec.css'

// Retro Tech stílusú SVG ikonok a jobb alsó sarokba
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v1.46c3.17 1.43 5.37 4.54 5.37 8.54 0 1.1-.22 2.16-.6 3.14z"/>
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM5.5 11.5l2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4-1.5 1.5z"/>
  </svg>
);

const ChipIcon = () => (
  <svg viewBox="0 0 24 24" className="footer-icon" fill="currentColor">
    <path d="M21 11V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/>
    <path d="M9 9h6v6H9z"/>
  </svg>
);

function Lablec() {
  return (
    <footer className="pc-footer">
      
      {/* A felső, 4 oszlopos rács */}
      <div className="footer-links-grid">
        
        {/* 1. Oszlop: Bemutatkozás */}
        <div className="footer-section brand-section">
          <h4 className="brand-title">RETRO PC MÚZEUM</h4>
          <p className="brand-desc">
            A digitális forradalom legfontosabb mérföldköveinek megőrzése a jövő generációi számára. Minden rendszerspecifikáció ellenőrzött és hitelesített.
          </p>
        </div>

        {/* 2. Oszlop: Források */}
        <div className="footer-section">
          <h4 className="footer-title">FORRÁSOK</h4>
          <a href="#api" className="footer-link">Archívum API</a>
          <a href="#data" className="footer-link">Adathasználat</a>
          <a href="#press" className="footer-link">Sajtóanyag</a>
        </div>

        {/* 3. Oszlop: Támogatás */}
        <div className="footer-section">
          <h4 className="footer-title">TÁMOGATÁS</h4>
          <a href="#support" className="footer-link">Technikai Támogatás</a>
          <a href="#privacy" className="footer-link">Adatvédelmi Protokoll</a>
          <a href="#terms" className="footer-link">Felhasználási Feltételek</a>
        </div>

        {/* 4. Oszlop: Rendszer adatok */}
        <div className="footer-section station-section">
          <h4 className="footer-title">SZERVERPARK</h4>
          <div className="station-info">
            Fő Szerver Terem<br/>
            IP: 192.168.1.100<br/>
            Uptime: 99.9%
          </div>
          <div className="footer-icons-row">
            <GlobeIcon />
            <TerminalIcon />
            <ChipIcon />
          </div>
        </div>

      </div>

      {/* Alsó sáv */}
      <div className="footer-bottom-bar">
        <span>© 2026 RETRO PC MÚZEUM. MINDEN RENDSZERADAT A SZILÍCIUM-VÖLGY ÖRÖKSÉGE.</span>
      </div>

    </footer>
  );
}

export default Lablec;