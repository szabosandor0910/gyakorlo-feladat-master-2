import '../css/exam.css' // Itt van bekötve a vizsga CSS fájl!
import '../css/Fejlec.css';
import KeresoMezo from './KeresoMezo';

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" className="header-profile-icon" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
  </svg>
);

function Fejlec({ sk }) {
    return (
        <header className="pc-header">
            <div className="header-logo-title">
                <h1 className="header-title">RETRO PC MÚZEUM</h1>
            </div>

            <nav className="header-nav">
                <a href="#asztali" className="nav-link active">ASZTALI GÉPEK</a>
                <a href="#konzolok" className="nav-link">KONZOLOK</a>
                <a href="#periferiak" className="nav-link">PERIFÉRIÁK</a>
                <a href="#galeria" className="nav-link">GALÉRIA</a>
                <a href="#idovonal" className="nav-link">IDŐVONAL</a>
            </nav>

            <div className="header-right-controls">
                <KeresoMezo sk={sk} />
                <ProfileIcon />
            </div>
        </header>
    )
}

export default Fejlec;