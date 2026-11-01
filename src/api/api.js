// Ide írja meg a getComputers függvényt a feladatlap alapján!
export async function getComputers() {
  try {
    const response = await fetch('http://localhost:5000/api/computers');
    if (!response.ok) {
      throw new Error('Hiba az API hívásnál: ' + response.status);
    }
    return await response.json();
  } catch (error) {
    // Mentőöv: ha az API nem érhető el, a public/Computers.json-t használjuk
    console.warn('Az API nem elérhető, a Computers.json-t használjuk.', error);
    const response = await fetch('/Computers.json');
    return await response.json();
  }
}
