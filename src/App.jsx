import { useEffect, useState } from 'react'
import './css/exam.css'
import Fejlec from './components/Fejlec'
import Bevezeto from './components/Bevezeto'
import Szamitogepek from './components/Szamitogepek'
import Lablec from './components/Lablec'
import { getComputers } from './api/api'

function App() {
  const [keresett, setKeresett] = useState('');

  // 5. Állapotok
  const [computers, setComputers] = useState([]);
  const [szurve, setSzurve] = useState(false);
  const [szurtComputers, setSzurtComputers] = useState([]);

  // 5. Adatok betöltése az oldal megnyitásakor
  useEffect(() => {
    async function betoltes() {
      const adatok = await getComputers();
      setComputers(adatok);
    }
    betoltes();
  }, []);

  // 6. Keresés és szűrés: lefut, ha változik a keresett szöveg (vagy az adatok)
  useEffect(() => {
    if (keresett !== '') {
      setSzurve(true);
      setSzurtComputers(
        computers.filter((c) =>
          c.computerName.toLowerCase().includes(keresett.toLowerCase())
        )
      );
    } else {
      setSzurve(false);
    }
  }, [keresett, computers]);

  return (
    <div className="page-container">
      <Fejlec sk={setKeresett} />
      <Bevezeto />

      <main className="main-content">
        {szurve
          ? <Szamitogepek gepek={szurtComputers} />
          : <Szamitogepek gepek={computers} />}
      </main>

      <Lablec />
    </div>
  )
}

export default App
