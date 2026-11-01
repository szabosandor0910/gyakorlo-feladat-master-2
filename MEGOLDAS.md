# React szakmai vizsga – megoldás lépésről lépésre

Indítás: `npm install`, majd `npm run dev` (böngészőben: http://localhost:5173).
Az API (localhost:5000) nincs elindítva, ezért a megoldás automatikusan a `public/Computers.json`-t használja (mentőöv).

Minden lépésnél: **melyik fájl → mit kell írni**.

---

## 1. Fejléc formázása → `src/css/exam.css`

```css
.pc-header {
  background-color: #0B1120;          /* 1.1 háttérszín */
  display: flex;                      /* 1.2 flex */
  align-items: center;                /*     függőlegesen középre */
  justify-content: space-between;     /*     szélekre tolódás */
  padding: 0 30px;                    /* 1.3 fent/lent 0, bal/jobb 30px */
}

@media screen and (max-width: 900px) {   /* 1.4 reszponzivitás */
  .pc-header {
    flex-direction: column;           /* egymás alá */
    gap: 20px;                        /* 20px térköz */
  }
}
```

## 2. Navigációs linkek → `src/css/exam.css` (ugyanabba a fájlba, a fentiek alá)

```css
.nav-link {
  text-decoration: none;   /* 2.1 aláhúzás ki */
  font-size: 12px;         /* 2.2 */
  letter-spacing: 0.5px;   /* 2.3 betűköz */
}
```

## 3. Computers komponens → új fájl: `src/components/Computers.jsx`

Új fájl a `components` mappában. A `ComputersSkeleton.txt` tartalma a `return`-be kerül, a `data` prop-ot várja, a CSS-t importálni kell, és `export default`.

```jsx
import '../css/Computers.css';

function Computers({ data }) {
  return (
    <div className='pc-kartya'>
      <img src={data.image} alt={data.computerName} className="pc-image" />

      <div className="pc-tartalom">
        <span className="pc-id">Rendszer ID: {data.id}</span>

        <h2 className='pc-nev'>{data.computerName}</h2>
        <p className='pc-leiras'>{data.description}</p>

        <div className="pc-footer">
          <span className="pc-link">RÉSZLETEK ↗</span>
          <span className="pc-datum">{data.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Computers;
```

## 4. Adatlekérés → `src/api/api.js`

```js
export async function getComputers() {
  try {
    const response = await fetch('http://localhost:5000/api/computers');
    if (!response.ok) {
      throw new Error('Hiba az API hívásnál: ' + response.status);
    }
    return await response.json();
  } catch (error) {
    // Mentőöv: ha az API nem érhető el, a public/Computers.json kell
    const response = await fetch('/Computers.json');
    return await response.json();
  }
}
```

Az importálás az `App.jsx`-ben történik (lásd 5. lépés, legfelül).

## 5. Állapotkezelés és megjelenítés

### 5/a – `src/App.jsx` (importok, legfelül)
```jsx
import { getComputers } from './api/api'
```
(A `useEffect, useState` import már ott van.)

### 5/b – `src/App.jsx` (a `keresett` state alá, a függvényen belül)
```jsx
const [computers, setComputers] = useState([]);
const [szurve, setSzurve] = useState(false);
const [szurtComputers, setSzurtComputers] = useState([]);

useEffect(() => {
  async function betoltes() {
    const adatok = await getComputers();
    setComputers(adatok);
  }
  betoltes();
}, []);
```

### 5/c – `src/components/Szamitogepek.jsx`
```jsx
import Computers from './Computers';

function Szamitogepek({ gepek }) {
  return (
    <div className='szamitogepek-lista'>
      {gepek.map((gep) => (
        <Computers key={gep.id} data={gep} />
      ))}
    </div>
  );
}

export default Szamitogepek;
```
(A fájl tetején lévő `Szamitogepek.css` importot is érdemes hozzáadni: `import '../css/Szamitogepek.css';`, mert a rács formázása abban van.)

### 5/d – `src/App.jsx` (a `<main>` tartalma)
```jsx
<main className="main-content">
  {szurve
    ? <Szamitogepek gepek={szurtComputers} />
    : <Szamitogepek gepek={computers} />}
</main>
```

## 6. Keresés és szűrés → `src/App.jsx` (az előző useEffect alá)

```jsx
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
```

---

## Ellenőrzés
- Az oldalon 3 kártya látszik (IBM, Commodore, Macintosh).
- A keresőbe írva (pl. „comm") csak a Commodore 64 marad.
- A keresőt kiürítve újra megjelenik mind a három.
- A böngészőablakot 900px alá szűkítve a fejléc elemei egymás alá kerülnek.
- A menüpontoknál nincs aláhúzás, kisebb a betű.

## Magyarázat szóban (ha kérdeznek)
- **Miért kell a függőségi tömb?** `[]` = csak egyszer, betöltéskor fut; `[keresett, computers]` = minden keresésváltozáskor (és az adatok megérkezésekor) lefut.
- **Miért van a szűrésnél `toLowerCase()`?** Hogy a kis- és nagybetű ne számítson.
- **Mi a `key` a `map`-ben?** Egyedi azonosító, hogy a React tudja, melyik elem melyik.
- **Mi a mentőöv?** Ha az API nem válaszol (`catch`), a `public` mappából kérjük le ugyanazt a JSON-t.
