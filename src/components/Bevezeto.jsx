import '../css/Bevezeto.css';

// A totalComputers prop-ot használjuk a szám megjelenítéséhez (alapértelmezett: 12)
function Bevezeto({ totalComputers = 12 }) {
  return (
    <section className="bevezeto-container">
      
      {/* Bal oldal: Szöveges tartalom */}
      <div className="bevezeto-tartalom">
        <span className="bevezeto-alcim">Technológiai Örökség</span>
        <h2 className="bevezeto-focim">A Digitális<br/>Hajnal.</h2>
        <p className="bevezeto-leiras">
          Az emberiség történetét formáló, úttörő személyi számítógépek gondosan összeállított archívuma. Minden bejegyzés történelmi adatokat, technikai specifikációkat és fényképes dokumentációt tartalmaz a mikroprocesszorok aranykorából.
        </p>
      </div>

      {/* Jobb oldal: Statisztika */}
      <div className="bevezeto-statisztika">
        <span className="statisztika-cim">Katalogizált rendszerek</span>
        <span className="statisztika-szam">{totalComputers}</span>
      </div>

    </section>
  );
}

export default Bevezeto;